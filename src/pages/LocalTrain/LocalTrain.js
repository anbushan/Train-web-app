import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/Header";
import { useGetChennaiLocalQuery, useDeleteLocalTrainMutation } from "../../redux/features/api/LocalTrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import DeleteModel from "../../components/DeleteModel";

const Train = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [selectedCity, setSelectedCity] = useState("chennai"); 
  const { data: getLocalTrainData, isLoading } = useGetChennaiLocalQuery({ page: currentPage, city: selectedCity ,id:idToDelete});
  const navigate = useNavigate();
  const [deleteLocalTrain] = useDeleteLocalTrainMutation();

  const handleNavigateAddForm = () => navigate(`/admin/add-localtrain`);

  useEffect(() => {
    if (getLocalTrainData && getLocalTrainData.data) {
      setData(getLocalTrainData.data);
      setTotalPages(getLocalTrainData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getLocalTrainData, currentPage]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    console.log(id);
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteTrain = async () => {
    try {
      const response = await deleteLocalTrain({city:selectedCity, id:idToDelete});
      console.log(idToDelete);
      if (response?.data) {

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
      Header: "Train No",
      accessor: "trainNo",
    },
    {
      Header: "Train Name",
      accessor: "trainName",
    },
    {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Zone",
        accessor: "zone",
      },
      {
        Header: "Updated On",
        accessor: "updatedOn",
      },
      {
        Header: "From",
        accessor: "from",
      },
      {
        Header: "Departure",
        accessor: "departure",
      },
      {
        Header: "To",
        accessor: "to",
      },
      {
        Header: "Arrival",
        accessor: "arrival",
      },
      {
        Header: "Duration",
        accessor: "duration",
      },
      {
        Header: "Distance",
        accessor: "distance",
      },
      {
        Header: "Speed",
        accessor: "speed",
      },
      {
        Header: "Halts",
        accessor: "halts",
      },
      {
        Header: "sClasses",
        accessor: "sClasses",
      },
      {
        Header: "sRunsOn",
        accessor: "sRunsOn",
      },
      {
        Header: "Train ID",
        accessor: "trainID",
      },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
       
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={`/admin/edit-localtrain/:${rowIdx}`}>
              <Button variant="warning">
                <FaEdit />
              </Button>
            </Link>
            <Button variant="danger"className="m-1" onClick={() => deleteHandleShow(rowIdx)} >
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
              HEADING= "Local Train"
              BUTTON_NAME= "Add Local Train"
            
            />
            <hr className="mt-3" />
          </Row>
          <Row className="mb-3">
    <Form onSubmit={""} className="d-flex flex-column flex-md-row align-items-md-center justify-content-start">
      <Col xs={12} md={4} lg={3} className="m-2">
      <Form.Group controlId="city">
                <Form.Label className="fs-4">Select City:</Form.Label>
                <Form.Control as="select" value={selectedCity} onChange={handleCityChange}>
                  <option value="chennai">Chennai</option>
                  <option value="delhi">Delhi</option>
                  <option value="pune">Pune</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="hyderabad">Hyderabad</option>
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
        YES={deleteTrain}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION= "Are you sure you want to delete this Train"
        DELETETITLE="Local Train"
      />
    </div>
  );
};

export default Train;
