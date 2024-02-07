import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import Header from "../../components/Header";
import DeleteModel from "../../components/DeleteModel";
import { useGetTrainQuery,useDeleteTrainMutation } from "../../redux/features/api/TrainApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
 import { useEffect } from "react";
// import Filter from "../../components/FilterComponent";
const Train = () => {

   const [deleteShow, setDeleteShow] = useState(false);
   const [idToDelete, setIdToDelete] = useState("");
  const [deleteTrainApi ] = useDeleteTrainMutation();
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getTrainData, isLoading } = useGetTrainQuery(currentPage);
  
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate(`/admin/add-train`);
   useEffect(() => {
    if (getTrainData && getTrainData.data) {
      setData(getTrainData.data);
      setTotalPages(getTrainData.pagination.totalPages);
      setCurrentPage(getTrainData.pagination.currentPage);
    }
  }, [getTrainData, currentPage]);
 
console.log(getTrainData);
  const deleteHandleClose = () => {
     setDeleteShow(false);
  };


  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteTrain = async () => {
    try {
      const response = await deleteTrainApi(idToDelete);
      console.log(response);
      setDeleteShow(false);
      setIdToDelete("");
      if (response.error.originalStatus === 200) {
        toast(response.error.data);
      } else {
        toast.error(response.error.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  }
  const COLUMNS = [
    {
      Header: "ID",
      accessor:  (d, i) => i + 1,
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
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) =>{
        const rowIdx = props.row.original._id;
        console.log(props.row);
        return (
        
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to="/admin/edit-train">
            <Button variant="warning">
              <FaEdit />
            </Button>
          </Link>
          <Button variant="danger" className="m-1" onClick={() => deleteHandleShow(rowIdx)}>
            <MdDelete />
          </Button>
        </div>
      )
    }
  }
  ];

  return (
    <div>
    {!isLoading ? (
      <>
    <Container fluid className="mt-3">
        <Row className="">
          <Header
            ONCLICK={handleNavigateAddForm}
            HEADING="Train"
            BUTTON_NAME="Add Train"
            
          />

          <hr className="mt-3"/>
         </Row>
         <Row>
          {/* <Filter datePicker={true} textInput={true} textSelect={true}/> */}
         </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={data} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}
          />
        </Row>
      </Container>
      <DeleteModel YES={deleteTrain}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure want to delete this Train..?"
        DELETETITLE="Train"
      />
        
      </>
      ):(
        <Loader/>
        
      )} 
    </div>
  );
};

export default Train;
