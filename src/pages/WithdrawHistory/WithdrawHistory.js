import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import Header from "../../components/Header";
import Loader from "../loginForms/loader/Loader";
import {
  useGetWithdrawhistoryQuery,
} from "../../redux/features/api/WithdrawHistoryApi";


const Withdrawhistory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getWithdrawhistoryData, isLoading } = useGetWithdrawhistoryQuery(currentPage);
  const handleNavigateAddForm = () => navigate("/admin/Add-User");
  useEffect(() => {
    if (getWithdrawhistoryData && getWithdrawhistoryData.data) {
      setData(getWithdrawhistoryData.data);
      setTotalPages(getWithdrawhistoryData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getWithdrawhistoryData, currentPage]);

  console.log(getWithdrawhistoryData);


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
    }, {
      Header: "Created At",
      accessor: "createdAt",
      // width: "auto",
      // minWidth: 100
    },
    
    {
      Header: "Updated At",
      accessor: "updatedAt",
    },
 
  ];

  return (
    <>
  
    {!isLoading ? (
        <>
          <Container fluid className="my-4" style={{overflow:"hidden"}}>
            <Row>
              <Col className="">
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING="Withdraw History"
                  // BUTTON_NAME="Add Withdrawhistory"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
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
          {/* <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={delTimeSheetData}
            DESCRIPTION="Confirm to Delete this Scheme"
            DELETETITLE="Schemes"
          /> */}
        </>
   
      ):(
   <Loader/>
        
       )} 
      </>
  );
};

export default Withdrawhistory;
