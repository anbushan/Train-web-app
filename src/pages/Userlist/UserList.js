import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { BsSearch, BsX } from "react-icons/bs"; 
import BasicTable from "../../components/TablePaginationComponent";
import Header from "../../components/BasicHeader";
import Loader from "../loginForms/loader/Loader";
import { useGetUserListQuery } from "../../redux/features/api/UserListApi";

const UserList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();

  const [searchInput, setSearchInput] = useState(""); 

  const { data: getUserlistData, isLoading, refetch } = useGetUserListQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getUserlistData && getUserlistData.data) {
      setData(getUserlistData.data);
      setTotalPages(getUserlistData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(getUserlistData.pagination.itemsPerPage);

    }
  }, [getUserlistData, currentPage]);

  const handleSearch = () => {
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput });
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
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
    {
      Header: "Created At",
      accessor: "createdAt",
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
          <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search UserList..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress} 
                />
                {searchInput && (
                  <span className="input-group-text" onClick={handleClear}>
                    <BsX />
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
              <Button style={{ backgroundColor: "#0077B2", border: "none" }} onClick={handleSearch} className="">Search</Button>
            </Col>
          </Row>

          <Row className="d-flex flex-column align-items-center justift-content-center">
            <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
              <BasicTable
                COLUMNS={COLUMNS}
                MOCK_DATA={data}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
             
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
