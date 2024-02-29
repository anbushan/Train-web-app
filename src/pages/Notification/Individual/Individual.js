import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BasicTable from ".././../../components/BasicTable";
import Header from ".././../../components/BasicHeader";
import Loader from "../../loginForms/loader/Loader";
import { useGetIndividualNotificationQuery } from ".././../../redux/features/api/IndividualNotificationApi";

const IndividualNotification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getIndividualNotificationData, isLoading } = useGetIndividualNotificationQuery(currentPage);

  useEffect(() => {
    if (getIndividualNotificationData && getIndividualNotificationData.data) {
      setData(getIndividualNotificationData.data);
      setTotalPages(getIndividualNotificationData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getIndividualNotificationData, currentPage]);

  const handleNavigateAddForm = () => navigate("/admin/adduser-list");

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
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Body",
      accessor: "body",
    },
  ];
  
  return (
    <>
      {!isLoading ? (
        <Container fluid className="my-4">
          <Row>
            <Col>
              <Header
                ONCLICK={handleNavigateAddForm}
                HEADING="Individual Notification"
                headingClassName="text-center text-md-start m-md-4 m-xl-2"
              />
            </Col>
          </Row>
          <hr className="bg-primary" />
          <Row className="justify-content-center">
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

export default IndividualNotification;
