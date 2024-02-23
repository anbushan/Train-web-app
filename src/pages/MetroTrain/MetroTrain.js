import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/Header";
import { useDeleteMetroTrainMutation, useGetChennaiMetroQuery } from "../../redux/features/api/MetroTrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import DeleteModel from "../../components/DeleteModel";

const Train = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [selectedCity, setSelectedCity] = useState("Chennai"); 
  console.log(selectedCity);
  const { data: getMetroTrainData, isLoading } = useGetChennaiMetroQuery({ page: currentPage, city: selectedCity });
  const [deleteMetroTrain] = useDeleteMetroTrainMutation();

  const navigate = useNavigate();

  const handleNavigateAddForm = () => navigate(`/admin/add-metrotrain`);

  useEffect(() => {
    if (getMetroTrainData && getMetroTrainData.data) {
      setData(getMetroTrainData.data);
      setTotalPages(getMetroTrainData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getMetroTrainData, currentPage]);

  console.log(getMetroTrainData);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteMetro = async () => {
    try {
      const response = await deleteMetroTrain({city:selectedCity, id:idToDelete});
      console.log(idToDelete);
      if (response?.data){
       
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        setDeleteShow(false);
        setIdToDelete("");
       
      } else {
       
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
        setDeleteShow(false);
        setIdToDelete("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
    },
    {
      Header: "Route",
      accessor: "route",
    },
    {
      Header: "Day",
      accessor: "day",
    },
    {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Destination",
        accessor: "destination",
      },
      {
        Header: "Via",
        accessor: "via",
      },
      {
        Header: "First Train",
        accessor: "first_train",
      },
      {
        Header: "Last Train",
        accessor: "last_train",
      },
      {
        Header: "Timing 1",
        accessor: "timing1",
      },
      {
        Header: "Timing1 Train Frequency",
        accessor: "timing1_train_frequency",
      },
      {
        Header: "Timing 2",
        accessor: "timing2",
      },
      {
        Header: "Timing2 Train Frequency",
        accessor: "timing2_train_frequency",
      },
      {
        Header: "Timing 3",
        accessor: "timing3",
      },
      {
        Header: "Timing3 Train Frequency",
        accessor: "timing3_train_frequency",
      },
      {
        Header: "Additional Data",
        accessor: "additional_data",
      },
     
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
       
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={`/admin/edit-metrotrain/:${rowIdx}`}>
              <Button variant="warning">
                <FaEdit />
              </Button>
            </Link>
            <Button variant="danger" className="m-1" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row className="">
            <Header
              ONCLICK={handleNavigateAddForm}
              HEADING= "Metro Train"
              BUTTON_NAME= "Add Metro Train"
            
            />
            <hr className="mt-3" />
          </Row>
          <Row className="mb-3">
    <Form onSubmit={""} className="d-flex flex-column flex-md-row align-items-md-center justify-content-start">
      <Col xs={12} md={4} lg={3} className="m-2">
      <Form.Group controlId="city">
                <Form.Label className="fs-4">Select City:</Form.Label>
                <Form.Control as="select" value={selectedCity} onChange={handleCityChange}>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nodia">Nodia</option>
                  <option value="Bangalore">Bangalore</option>
                </Form.Control>
              </Form.Group>
      </Col>
    </Form>
  </Row>








          <Row className="">
            <BasicTable
              COLUMNS={COLUMNS}
              MOCK_DATA={data}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteMetro}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION= "Are you sure you want to delete this Train"
        DELETETITLE="Train"
      />
    </div>
  );
};

export default Train;
