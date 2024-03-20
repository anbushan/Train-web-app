import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import train from "../../assets/images/train image.png"
import playstore from "../../assets/images/pngplaystore-removebg-preview.png"
import mixpanel from 'mixpanel-browser';

const Downlaod = () => {
  const handleClick = () => {
     
    mixpanel.track('Download App');
  };
  return (
    <div>
        <Container fluid>
        <Row className="mt-4">
          <Col className='d-flex flex-column justify-content-center align-items-center mb-3'>
          <p style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Download App</p>
          </Col>
        </Row>


        <Row className="mt-0">
          <Col lg={6} className="d-flex flex-column justify-content-center align-items-center text-center ">
          <p className='my-2 mx-5' style={{ fontSize: "clamp(25px, 2vw, 45px)", fontFamily: "Poppins, sans-serif", color: "#4EB8E7" }}>Enjoy now Trains on Wheels App</p>
          <p className='my-2 mx-5' style={{ fontSize: "clamp(20px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black"}}>
            Ready to travel?</p>
            <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black"}}>Plan your trip and show your Pass as you go.</p>
          <img  onClick={handleClick} src={playstore} alt="TrainsOnWheel playstore" srcSet=""  style={{width: "30%", height: "auto"}} />
           
          </Col>

          <Col lg={6} className='d-flex justify-content-center align-items-center'>
            <img src={train} className="img-fluid float-md-right wow fadeInLeft" style={{ marginTop: '5vw', width: "80%", height: "auto" }} alt="TrainsOnWheel trainimage" />
          </Col>
        </Row>


        </Container>
    </div>
  )
}

export default Downlaod