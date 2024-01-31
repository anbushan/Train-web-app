import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/images/user.png"

const Dashboard = () => {
  return (
    <Container className="vh-100">
      <Row className="mt-4 mx-2">
        <Col className="d-flex align-items-start">
          <h2>Welcome</h2>
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-center align-items-center mt-3">
        <Col xs={12} md={3} className="mx-4 my-2 shadow rounded p-4">
          <h5 className="text-center no-wrap">User Count</h5>
          <h3 className="text-center">25</h3>
          <div>Logo</div>
        </Col>

        <Col xs={12} md={3} className="mx-4 my-2 shadow rounded p-4">
          <h5 className="text-center no-wrap">Feedback Count</h5>
          <h3 className="text-center">28</h3>
          <div>Logo</div>
        </Col>

        <Col xs={12}md={3}  className="mx-4 my-2 shadow rounded p-4">
          <h5 className="text-center no-wrap">Withdraw Request</h5>
          <h3 className="text-center">30</h3>
          <div>Logo</div>
        </Col>
      </Row>



      <Row className=" mt-4 mx-4">
      <Col className="shadow rounded my-2 m-3">
        <h4 className="mt-3 mx-4">Recently Joined</h4>
        <Row className="mt-4">
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50} alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
          <h4> <Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>

        <Row className="mt-3"> 
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50} alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
          <h4> <Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>

        <Row className="mt-4">
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50} alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
            <h4><Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>

        <Row className="mt-3 mb-3">
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50}alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
          <h4> <Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>


      </Col>

      <Col className="shadow rounded my-2 m-3">
      
      <h4 className="mt-3 mx-4">Withdraw Request</h4>

      <Row className="mt-3 mb-3">
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50} alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
          <h4> <Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>

        <Row className="mt-3 mb-3">
          {/* Image column */}
          <Col xs={4} className="mx-4">
            <img  src={user}
                width={50}alt="user" />
          </Col>

          {/* Text content column */}
          <Col xs={6}>
          <h4> <Row>John Deo</Row></h4>
            <Row>Recently Joined</Row>
          </Col>
        </Row>
        <hr/>
        
      </Col>
    </Row>
      
    </Container>
  );
};

export default Dashboard;
