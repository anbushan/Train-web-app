import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import Header from "../../components/Header";
import Loader from "../loginForms/loader/Loader";
import {
  useGetUserListQuery,
} from "../../redux/features/api/UserListApi";


const UserList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getTrainData, isLoading } = useGetUserListQuery(currentPage);
  const handleNavigateAddForm = () => navigate("/admin/adduser-list");
  useEffect(() => {
    if (getTrainData && getTrainData.data) {
      setData(getTrainData.data);
      setTotalPages(getTrainData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getTrainData, currentPage]);

  console.log(getTrainData);


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
      Header: "Referal ID",
      accessor: "referralId",
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
                  HEADING="User List"
                  BUTTON_NAME="Add User"
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

export default UserList;
