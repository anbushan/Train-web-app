import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader"
import DeleteModel from "../../components/DeleteModel";
import { useGetFeedbackQuery,useDeleteFeedbackMutation } from "../../redux/features/api/FeedBackApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
 import { useEffect } from "react";
// import Filter from "../../components/FilterComponent";
const Feedback = () => {

   const [deleteShow, setDeleteShow] = useState(false);
   const [idToDelete, setIdToDelete] = useState("");
  const [deleteFeedbackApi ] = useDeleteFeedbackMutation();
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getFeedbackData, isLoading } = useGetFeedbackQuery(currentPage);
  
  // const handleNavigateAddForm = () => navigate(`/FeedbackAddForm`);
   useEffect(() => {
    if (getFeedbackData && getFeedbackData.data) {
      setData(getFeedbackData.data);
      setTotalPages(getFeedbackData.pagination.totalPages);
      setCurrentPage(getFeedbackData.pagination.currentPage);
    }
  }, [getFeedbackData, currentPage  ]);
 
console.log(getFeedbackData);
  const deleteHandleClose = () => {
     setDeleteShow(false);
  };


  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteFeedback = async () => {
    try {
      const response = await deleteFeedbackApi(idToDelete);
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
      Header: "Email",
      accessor: "email",
    },
    {
        Header: "Feedback",
        accessor: "feedback",
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
            HEADING="Feedback"
    
            
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
      <DeleteModel YES={deleteFeedback}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure want to delete this Feedback..?"
        DELETETITLE="Feedback"
      />
        
      </>
      ):(
        <Loader/>
        
      )} 
    </div>
  );
};

export default Feedback;
