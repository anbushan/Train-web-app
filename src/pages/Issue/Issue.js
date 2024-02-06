import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader"
import DeleteModel from "../../components/DeleteModel";
import { useGetIssueQuery,useDeleteIssueMutation } from "../../redux/features/api/IssueApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
 import { useEffect } from "react";
// import Filter from "../../components/FilterComponent";
const Issue = () => {

   const [deleteShow, setDeleteShow] = useState(false);
   const [idToDelete, setIdToDelete] = useState("");
  const [deleteIssueApi ] = useDeleteIssueMutation();
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getIssueData, isLoading } = useGetIssueQuery(currentPage);
  
  const navigate = useNavigate();
  // const handleNavigateAddForm = () => navigate(`/IssueAddForm`);
   useEffect(() => {
    if (getIssueData && getIssueData.data) {
      setData(getIssueData.data);
      setTotalPages(getIssueData.pagination.totalPages);
      setCurrentPage(getIssueData.currentPage);
    }
  }, [getIssueData, currentPage]);
 
console.log(getIssueData);
  const deleteHandleClose = () => {
     setDeleteShow(false);
  };


  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteIssue = async () => {
    try {
      const response = await deleteIssueApi(idToDelete);
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
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Comments",
        accessor: "comments",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Admin Comments",
        accessor: "adminComments",
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
      Cell: (props) =>{
        const rowIdx = props.row.original._id;
        console.log(props.row);
        return (
        
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={"/admin/edit-issue"}>
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
        <Row>
          <BasicHeader
            // ONCLICK={handleNavigateAddForm}
            HEADING="Issues"
    
            
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
      <DeleteModel YES={deleteIssue}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Issue"
        DELETETITLE="Issue"
      />
        
      </>
      ):(
        <Loader/>
        
      )} 
    </div>
  );
};

export default Issue;
