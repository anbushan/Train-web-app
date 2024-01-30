import React from "react";
import { Container, Row, Col, } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="mt-4 mx-2">
        <Col className="d-flex align-items-start">
          <h2>Welcome</h2>
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-center align-items-center mt-3">
        <Col md={4} className="mx-2 my-2 shadow rounded p-4">
          <h5 className="text-center">User Count</h5>
          <h4 className="text-center">25</h4>
        <Col>logo</Col>
        </Col>

        <Col md={4} className="mx-2 my-2 shadow rounded p-4">
          <h5 className="text-center">Feedback Count</h5>
          <h4 className="text-center">28</h4>
          <Col>logo</Col>
        </Col>

        <Col md={4} className="mx-2 my-2 shadow rounded p-4">
          <h5 className="text-center">Withdraw Request</h5>
          <h4 className="text-center">30</h4>
          <Col>logo</Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
