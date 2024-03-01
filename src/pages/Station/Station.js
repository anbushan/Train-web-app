import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/Header";
import DeleteModel from "../../components/DeleteModel";
import { useGetStationQuery, useDeleteStationMutation } from "../../redux/features/api/StationApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";

const Station = () => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getStationData, isLoading } = useGetStationQuery({ page: currentPage, search: searchTerm });
  console.log(getStationData);
  const[deleteStationApi] = useDeleteStationMutation();
  const navigate = useNavigate();

  const handleNavigateAddForm = () => navigate(`/admin/add-station`);

  useEffect(() => {
    if (getStationData && getStationData.data) {
      setData(getStationData.data);
      setTotalPages(getStationData.pagination.totalPages);
      setCurrentPage(getStationData.pagination.currentPage);
    }
  }, [getStationData]);

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteStation = async () => {
    try {
      const response = await deleteStationApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });

      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
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
      Header: "Station Code",
      accessor: "stationCode",
    },
    {
      Header: "Station Name",
      accessor: "stationName",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
             <Link to={`/admin/edit-station/${rowIdx}`}>
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
          <Row>
            <Header
              ONCLICK={handleNavigateAddForm}
              HEADING="Station"
              BUTTON_NAME="Add Station"
            />
            <hr className="mt-3" />
          </Row>
          <Row className="justify-content-center col-md-6 col-lg-3 mx-2 mt-4 mb-4">
            <input 
              type="text"
              placeholder="Search Train..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /></Row>
          <Row className="d-flex flex-column align-items-center justift-content-center">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
                <BasicTable
                  COLUMNS={COLUMNS}
                  MOCK_DATA={data}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </Col>
            </Row>
        </Container>
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteStation}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Station"
        DELETETITLE="Station"
      />
    </div>
  );
};

export default Station;
