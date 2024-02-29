import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import user from "../../assets/images/user.png";
import feedback from "../../assets/images/feedback.png";
import withdrawrequest from "../../assets/images/withdraw request.png";
import train from "../../assets/images/train.png";
import station from "../../assets/images/station.png";
import metrotrain from "../../assets/images/metrotrain.png";
import { useGetDashboardQuery } from "../../redux/features/api/DashboardApi";
import Loader from "../Loader/Loader";
import TableComponents from "../../components/TableComponent";


const Dashboard = () => {
  const { data, error, isLoading } = useGetDashboardQuery();

  if (isLoading) {
    return <Loader />;
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
    totalTrains,
    totalStations,
    totallyMetroTrains,
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
      Header: "Phone Number",
      accessor: "phoneNumber",
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
      Header: "Phone Number",
      accessor: "phoneNumber",
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
    <Container fluid>
      <Row className="mt-4 mx-2">
        <Col>
          <h4 className="fs-4 fw-bolder">Dashboard</h4>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={user} width={60} className="rounded-circle" alt="User" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Users Count</div>
                <h3 className="fs-8 fw-bolder">{totalUsers}</h3>
                <div className="fs-14">Total Number of Users</div>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={feedback} width={60} className="rounded-circle" alt="Feedback" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Feedback Count</div>
                <h3 className="fs-8 fw-bolder">{totalFeedbacks}</h3>
                <div className="fs-14">Total Number of Feedbacks</div>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={withdrawrequest} width={60} className="rounded-circle" alt="Withdraw Request" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Withdraw Requests</div>
                <h3 className="fs-8 fw-bolder">{totalWithdrawRequests}</h3>
                <div className="fs-14">Total Number of Withdraw Requests</div>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={train} width={60} className="rounded-circle" alt="Withdraw Request" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Total Trains</div>
                <h3 className="fs-8 fw-bolder">{totalTrains}</h3>
                <div className="fs-14">Total Number of Trains</div>
              </div>
            </div>
          </Card>
        </Col>
        
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={station} width={60} className="rounded-circle" alt="Withdraw Request" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Total Stations</div>
                <h3 className="fs-8 fw-bolder">{totalStations}</h3>
                <div className="fs-14">Total Number of Stations</div>
              </div>
            </div>
          </Card>
        </Col>
           
        <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="p-3 rounded shadow">
            <div className="d-flex align-items-center">
              <img src={metrotrain} width={60} className="rounded-circle" alt="Withdraw Request" />
              <div className="ms-3">
                <div className="fs-5 fw-bolder">Total Metro Trains</div>
                <h3 className="fs-8 fw-bolder">{totallyMetroTrains}</h3>
                <div className="fs-14">Total Number of Trains</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12} md={6} lg={12} className="mb-3">
          <Card className="p-3 rounded shadow">
            <h4 className="fs-4 mb-4 fw-bolder text-center">New User Join:</h4>
            {users.length > 0 ? (
              <TableComponents COLUMNS={COLUMNS} MOCK_DATA={users} />
            ) : (
              <div>No new users available</div>
            )}
          </Card>
        </Col>

        <Col xs={12} md={6} lg={12} className="mb-3">
          <Card className="p-3 rounded shadow">
            <h4 className="fs-4 mb-4 fw-bolder text-center">New Withdraw Request:</h4>
            {withdrawRequests.length > 0 ? (
              <TableComponents COLUMNS={COLUMNSS} MOCK_DATA={withdrawRequests} />
            ) : (
              <div>No new withdrawal requests available</div>
            )}
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Dashboard;
