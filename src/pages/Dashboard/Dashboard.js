import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid>
<Row className="mt-4 mx-5">
  <Col className="d-flex align-items-start">
    <h2>Welcome</h2>
  </Col>
</Row>

    



      <Row className="d-flex flex-row justify-content-center align-items-center mt-5">
<Col className="mx-4  shadow rounded  align-items center justify-content-center p-4 no-wrap">
    <Row>
<h5  className="d-flex flex-row justify-start">User Count</h5>
<h4  className="d-flex flex-row justify-start"> 25 </h4>

<Col> logo</Col>
</Row>
</Col>



<Col className="mx-4  shadow rounded  align-items center justify-content-center p-4">
    <Row>
<h5  className="d-flex flex-row justify-start">FeedBack Count</h5>
<h4  className="d-flex flex-row justify-start"> 28 </h4>

<Col> logo</Col>
</Row>
</Col>
 

<Col className="mx-4  shadow rounded  align-items center justify-content-center p-4">
    <Row>
<h5 className="d-flex flex-row justify-start">Withdraw Request</h5>
<h4  className="d-flex flex-row justify-start"> 30 </h4>

<Col> logo</Col>
</Row>
</Col>




      </Row>
    </Container>
  );
};

export default Dashboard;
