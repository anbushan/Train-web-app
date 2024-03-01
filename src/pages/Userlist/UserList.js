import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/BasicHeader";
import Loader from "../loginForms/loader/Loader";
import { useGetUserListQuery } from "../../redux/features/api/UserListApi";

const UserList = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getUserlistData, isLoading } = useGetUserListQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getUserlistData && getUserlistData.data) {
      setData(getUserlistData.data);
      setTotalPages(getUserlistData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getUserlistData, currentPage]);

  // const handleNavigateAddForm = () => navigate("/admin/adduser-list");

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Referral ID",
      accessor: "referralId",
    },
  ];

  return (
    <>
      {!isLoading ? (
        <Container fluid className="my-4">
          <Row>
            <Col>
              <Header
             
                HEADING="User List"
                
                headingClassName="text-center text-md-start m-md-4 m-xl-2"
              />
            </Col>
          </Row>
          <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
          <Row className="justify-content-center col-md-6 col-lg-3 mx-2 mt-4 mb-4">
            <input 
              type="text"
              placeholder="Search UserList..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            /></Row>
          <Row className="d-flex flex-column align-items-center justift-content-center">
            <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
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
    </>
  );
};

export default UserList;
