import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetWithdrawrequestQuery,useDeleteWithdrawrequestMutation } from "../../redux/features/api/WithdrawRequestApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
 import { useEffect } from "react";
// import Filter from "../../components/FilterComponent";
const Withdrawrequest = () => {

   const [deleteShow, setDeleteShow] = useState(false);
   const [idToDelete, setIdToDelete] = useState("");
  const [deleteWithdrawrequestApi ] = useDeleteWithdrawrequestMutation();
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getWithdrawrequestData, isLoading } = useGetWithdrawrequestQuery(currentPage);
  
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate(`/WithdrawrequestAddForm`);
   useEffect(() => {
    if (getWithdrawrequestData && getWithdrawrequestData) {
      setData(getWithdrawrequestData.data);
      setTotalPages(getWithdrawrequestData.pagination.totalPages);
      setCurrentPage(getWithdrawrequestData.pagination.currentPage);
    }
  }, [getWithdrawrequestData, currentPage]);
 
console.log(getWithdrawrequestData);


  const deleteHandleClose = () => {
     setDeleteShow(false);
  };


  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteWithdrawrequest = async () => {
    try {
      const response = await deleteWithdrawrequestApi(idToDelete);
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
      accessor: (d, i) => i + 1,
  
      minWidth: 10,
    },
    {
      Header: "Email",
      accessor: "email",
      // width: "auto",
      // minWidth: 100
    },
    
    {
      Header: "Upi ID",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
      // width: "auto",
      // minWidth: 100
    },
    
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      // width: "auto",
      // minWidth: 100
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
          <Link to={"/admin/edit-withdrawrequest"}>
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
            ONCLICK={handleNavigateAddForm}
            HEADING="Withdraw Request"
      
            
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
      <DeleteModel YES={deleteWithdrawrequest}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION=" Are you sure want to delete this Withdrawrequest?"
        DELETETITLE="Withdrawrequest"
      />
        
      </>
      ):(
        <Loader/>
        
      )}
    </div>
  );
};

export default Withdrawrequest;