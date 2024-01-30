import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import Header from "../../components/Header";
import DeleteModel from "../../components/DeleteModel";
import { useGetStationQuery,useDeleteStationMutation } from "../../redux/features/api/StationApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
 import { useEffect } from "react";
// import Filter from "../../components/FilterComponent";
const Station = () => {

   const [deleteShow, setDeleteShow] = useState(false);
   const [idToDelete, setIdToDelete] = useState("");
  const [deleteStationApi ] = useDeleteStationMutation();
  const [data , setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getStationData, isLoading } = useGetStationQuery(currentPage);
  
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate(`/StationAddForm`);
   useEffect(() => {
    if (getStationData && getStationData.data) {
      setData(getStationData.data);
      setTotalPages(getStationData.totalPages);
      setCurrentPage(getStationData.currentPage);
    }
  }, [getStationData, currentPage]);
 
console.log(getStationData);
  const deleteHandleClose = () => {
     setDeleteShow(false);
  };


  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteStation = async () => {
    try {
      const response = await deleteStationApi(idToDelete);
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
      Header: "station Code ",
      accessor: "stationCode",
    },
    {
      Header: "Station Name",
      accessor: "stationName",
    },
    {
        Header: "city ",
        accessor: "city",
      },  
      {
        Header: "state ",
        accessor: "state",
      },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) =>{
        const rowIdx = props.row.original._id;
        console.log(props.row);
        return (
        
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={`/StationEditForm/${rowIdx}`}>
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
          <Header
            ONCLICK={handleNavigateAddForm}
            HEADING="Station"
            BUTTON_NAME="Add Station"
            
          />
         </Row>
         <Row>
          {/* <Filter datePicker={true} textInput={true} textSelect={true}/> */}
         </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={data} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}
          />
        </Row>
      </Container>
      <DeleteModel YES={deleteStation}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Station"
        DELETETITLE="Station"
      />
        
      </>
      ):(
        <Loader/>
        
      )}
    </div>
  );
};

export default Station;
