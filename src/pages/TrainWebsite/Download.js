import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import train from "../../assets/images/train download.png"
import playstore from "../../assets/images/play-store-badge-en.png"
import appstore from "../../assets/images/app-store-badge-en.png"

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
          <p className='my-2 mx-5' style={{ fontSize: "clamp(20px, 2vw, 45px)", fontFamily: "Poppins, sans-serif", color: "#4EB8E7" }}>Enjoy now Trains on Time App</p>
          <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>
            Ready to travel?</p>
            <p className='my-2 mx-5' style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Plan your trip and show your Pass as you go.</p>
            <div class="row mb-3">
                <div class="col-md-6 mx-auto text-center mt-3">
                  <ul class="list-inline m-0 py-2">
                  
                  <li class="list-inline-item app-logos">
  <div
    onClick={handleClick}
    style={{ cursor: 'pointer' }}
  >
    <img
      src={playstore}
      alt="Download TrainsOnWheels on Apple Store"
      style={{ height: '48px', maxWidth: '100%' }}
    />
  </div>
</li>

<li class="list-inline-item app-logos">
    <img
      onClick={handleClick}
      src={appstore}
      alt="Download TrainsOnWheels on Apple Store"
      style={{ height: '48px', maxWidth: '100%' }}
    />

</li>

                  </ul>
                </div>
              </div>
           
          </Col>
          <Col lg={6} className='d-flex justify-content-center align-items-center'>
            <img src={train} className="img-fluid float-md-right wow fadeInLeft" style={{ marginTop: '5vw', width: "80%", height: "auto" }} alt="Getpageimage" />
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Downlaod