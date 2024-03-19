import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import section2 from '../../assets/images/app.png'

const TravelInformation = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mt-4">
          <Col className='Heading d-flex flex-column justify-content-center align-items-center mb-3'>
          <p style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>What Are You Getting ?</p>
          </Col>
        </Row>

        <Row className="mt-0">
          <Col lg={6} className="d-flex flex-column justify-content-center align-items-center text-center">
            <p className='my-2 mx-4' style={{ fontSize: "clamp(20px, 3vw, 40px)", fontFamily: "Poppins, sans-serif", color: "#4EB8E7" }}>Live Travel Information</p>
            <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>
              Stay in the know with real-time updates about the status of your train, direct to your phone.</p>

            <p className='my-2 mx-5' style={{ fontSize: "clamp(20px, 3vw, 40px)", fontFamily: "Poppins, sans-serif", color: "#4EB8E7" }}>PNR Status</p>
            <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>
              Check PNR Status of your train ticket with one click.</p>

            <p className='my-2 mx-5' style={{ fontSize: "clamp(20px, 3vw, 40px)", fontFamily: "Poppins, sans-serif", color: "#4EB8E7" }}>Seat Availability</p>
            <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>
              Find your journey, find your seat. We're here to assist for when you arrive on-board our Trains on Wheels app.</p>
          </Col>

          <Col lg={6} className='d-flex justify-content-center align-items-center'>
            <img src={section2} className="img-fluid float-md-right wow fadeInLeft" style={{ marginTop: '5vw', width: "80%", maxWidth: "400px", height: "auto" }} alt="TrainsOnWheel Getpageimage" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TravelInformation;
