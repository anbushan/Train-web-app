import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/Header";
import DeleteModel from "../../components/DeleteModel";
import { useGetTrainQuery, useDeleteTrainMutation } from "../../redux/features/api/TrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";

const Train = () => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteTrainApi] = useDeleteTrainMutation();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [searchInput, setSearchInput] = useState(""); 
  const { data: getTrainData, isLoading ,refetch } = useGetTrainQuery({ page: currentPage, search: searchTerm });
  console.log(getTrainData);
  const navigate = useNavigate();

  const handleNavigateAddForm = () => navigate(`/admin/add-train`);

  useEffect(() => {
    if (getTrainData && getTrainData.data) {
      setData(getTrainData.data);
      setTotalPages(getTrainData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(getTrainData.pagination.itemsPerPage);
    }
  }, [getTrainData, currentPage]);
  
  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput });
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const deleteTrain = async () => {
    try {
      const response = await deleteTrainApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
      
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
       }
    } catch (error) {
      console.error(error);
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
    },
    {
      Header: "Train No",
      accessor: "TrainNo",
    },
    {
      Header: "Train Name",
      accessor: "TrainName",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
    },
   
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={`/admin/edit-train/${rowIdx}`}>
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
              HEADING= "Train"
              BUTTON_NAME= "Add Train"
            
            />
            <hr className="mt-3 bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 "/>
          </Row>
          <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Train..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {searchInput && (
                  <span className="input-group-text" onClick={handleClear} >
                    <BsX/>
                  </span>
                )}
              </div>
            </Col>
            <Col  className="d-flex flex-column text-center my-4"
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleSearch} className="">Search</Button>
            </Col>
          </Row>

             <Row className="d-flex flex-column align-items-center justift-content-center">
            <BasicTable
              COLUMNS={COLUMNS}
              MOCK_DATA={data}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
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
        DELETETITLE="Train"
      />
    </div>
  );
};

export default Train;
