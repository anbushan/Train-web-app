import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/images/user.png";
import feedback from "../../assets/images/feedback.png";
import withdrawrequest from "../../assets/images/withdraw request.png";
import { useGetDashboardQuery } from "../../redux/features/api/DashboardApi";
import Loader from "../Loader/Loader";

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

      <Row className="d-flex flex-row justify-content-center align-items-stretch  mb-3">
        <Col sm={12} md={6} lg={6} className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column p-5 m-1 h-100">
            <Row className=" mx-2 fs-4 fw-bolder">Newly User:</Row>
            {users.length > 0 ? (
              users.map((user, index) => (
                <Row key={index} className="my-2">
                  <div className="shadow rounded my-5 p-3">
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">{index + 1}. Facebook ID: {user.facebookId}</Row>
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">Name: {user.name}</Row>
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">Referral ID: {user.referralId}</Row>
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">Email: {user.email}</Row>
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">Password : {user.password}</Row>
                    <Row className="mt-3 mx-4 fs-8 fw-bolder">Provider: {user.provider}</Row>
                  </div>
                </Row>
              ))
            ) : (
              <Row>No newly users available</Row>
            )}
          </div>
        </Col>

        <Col sm={12} md={6} lg={6} className="mt-4">
          <div className="d-flex flex-column p-3 m-1 h-100">
            <Row className="mt-1 mx-2 fs-4 fw-bolder">Withdraw Request:</Row>
            {withdrawRequests.map((request, index) => (
              <Row key={index}className="my-2">
                <div className="shadow rounded my-5 p-3">
                  <Row className="mt-3 mx-4 fs-8 fw-bolder"> {index + 1}. Email: {request.email}</Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder">Upi Id: {request.upiId} </Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder">Withdraw Amount: {request.withdrawAmount}</Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder"> Status: {request.status} </Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder">ApprovedDate: {request.approvedDate} </Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder">Created At: {request.createdAt}</Row>
                  <Row className="mt-3 mx-4 fs-8 fw-bolder">Updated At: {request.updatedAt} </Row>
                </div>
              </Row>
            ))}
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
