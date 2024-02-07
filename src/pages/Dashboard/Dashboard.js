import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/images/user.png";
import feedback from "../../assets/images/feedback.png";
import withdrawrequest from "../../assets/images/withdraw request.png";
import { useGetDashboardQuery } from "../../redux/features/api/DashboardApi";
import Loader from "../Loader/Loader";
import TableComponents from "../../components/TableComponent";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDashboardQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const {
    totalUsers,
    totalFeedbacks,
    totalWithdrawRequests,
    users = [],
    withdrawRequests = [],
  } = data;

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Referral Id",
      accessor: "referralId",
    },
  ];

  const COLUMNSS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Upi Id ",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
    },
    {
      Header: "Status ",
      accessor: "status",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
    },
  ];

  return (
     
    <div>
    {!isLoading ? (
      <>
    <Container fluid>
      <Row className="mt-4 mx-2">
        <Col className="d-flex align-items-start shadow rounded p-3">
          <h4>Dashboard</h4>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={user} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-5 fw-bolder">Users Count</div>
              <h3>
                <div className="fs-8 fw-bolder justify-content-center align-items-center">{totalUsers}</div>
              </h3>
              <div className="fs-14 fw-bolder">Total Number of User Counts</div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={feedback} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-5 fw-bolder">Feedback Count</div>
              <h3>
                <div className="fs-8 fw-bolder justify-content-center align-items-center">{totalFeedbacks}</div>
              </h3>
              <div className="fs-14 fw-bolder">Total Number of Feedbacks</div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={withdrawrequest} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-5 fw-bolder">Withdraw Request</div>
              <h3>
                <div className="fs-8 fw-bolder justify-content-center align-items-center">{totalWithdrawRequests}</div>
              </h3>
              <div className="fs-14 fw-bolder">Total Number of Withdraw Requests</div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-3 d-flex flex-row justify-content-start align-items-start">
        <Col xs={12} md={6} lg={6} className="mb-3 justify-content-start align-items-start">
          <div className="d-flex flex-column p-3 p-md-5 m-1">
            <h4 className=" fs-4 mb-4 fw-bolder text-center">New User Join:</h4>
            {users.length > 0 ? (
              <TableComponents
                COLUMNS={COLUMNS}
                MOCK_DATA={users}
              />
            ) : (
              <Row className="mx-2">No newly users available</Row>
            )}
          </div>
        </Col>

        <Col xs={12} md={6} className="mb-3">
          <div className="d-flex flex-column p-3 p-md-5 m-1">
            <h4 className=" fs-4 mb-4 fw-bolder text-center">New Withdraw Request:</h4>
            {withdrawRequests.length > 0 ? (
              <TableComponents
                COLUMNS={COLUMNSS}
                MOCK_DATA={withdrawRequests}
              />
            ) : (
              <Row className="mx-2">No Withdraw Request available</Row>
            )}
          </div>
        </Col>
      </Row>
    </Container>
    </>
      ):(
        <Loader/>
        
      )} 
    </div>
  );
};

export default Dashboard;
