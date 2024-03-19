import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderImage from "../../assets/images/bg.png"; 
import MobileImage from "../../assets/images/Mobile.png";
import logo from "../../assets/images/logo1.png";
import playstore from "../../assets/images/pngplaystore-removebg-preview.png";


const WebsiteHeader = () => {
  return (
    <div className="">
      <Container
        fluid
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="mt-0">
            <Col className="my-5 mx-5">
              <img
                src={logo}
                className="img-fluid"
                width="50px"
                height="50px"
                alt="TrainsOnWheel Logo"
              />
            </Col>
          </Row>
          <Row className="mt-0">
            <Col
              lg={6}
              className="d-flex flex-column justify-content-top align-items-center text-center mt-5"
            >
              <p
                style={{
                  fontSize: "clamp(24px, 5vw, 45px)",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                An easier way to manage your trips!
              </p>
              {/* Hide on small screens */}
              <p
                className="my-2 mx-5 d-none d-lg-block"
                style={{
                  fontSize: "25px",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                Our innovative app is the ideal way to plan and keep track of
                your travel.
              </p>
              <p
                className="my-2 mx-5"
                style={{
                  fontSize: "20px",
                  fontFamily: "Poppins, sans-serif",
                  color: "white",
                }}
              >
                "Happy Journey"
                <img
                  src={playstore}
                  alt="TrainsOnWheel playstore"
                  srcSet=""
                  style={{ width: "40%", height: "auto" }}
                />
              </p>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={MobileImage}
                className="img-fluid"
                style={{ width: "50%", height: "auto" }}
                alt="TrainsOnWheel MobileImage"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default WebsiteHeader;