import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import map from"../../assets/images/map.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#313947",
        color: "white",
        fontFamily: "Poppins, sans-serif"
      }}
    >
      <Container fluid className="mt-4">
        <Row className="d-flex flex-row justify-content-center align-items-center mt-2">
          <Col xs={12} md={12} lg={4} className="text-center">
            <h4
              className=" mt-md-4 mt-2 mb-2"
              style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif" }}
            >
              About Us
            </h4>
            <p
              className="my-2 mx-5 "
              style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}
            >
              We'll get you where you want to go. From live train updates to
              seat availability, PNR status, train between status, our
              innovative app is the ideal way to plan and keep track of your
              travel.
            </p>
          </Col>

          <Col
            xs={12}
            md={12}
            lg={4}
            className="text-center"
            style={{
              backgroundImage: `url(${map})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              marginTop: "50px",
             
            }}
          >
            <h4
              className="mt-2 mb-2"
              style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif" }}
            >
              QUICK LINKS
            </h4>
           
            <p  style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              About
            </p>
            <p   style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              FAQ
            </p>
            <p  style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
            <Link
        style={{ textDecoration: "none", color: "white" }}
        to="/privacy-policy"
      >
        privacy policy
      </Link>
            </p>
            <p   style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              Help
            </p>
            <p   style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
           
            <Link
        style={{ textDecoration: "none", color: "white" }}
        to="/terms&-condition"
      >
      Terms and Condition
      </Link>
            </p>
            </Col>
    

          <Col xs={12} sm={12} lg={4} className="text-center">
            <h4
              className="mt-2 mb-2"
              style={{ fontSize: "25px", fontFamily: "Poppins, sans-serif" }}
            >
              CONTACT INFO
            </h4>
            <p style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              <FaLocationDot /> Kadirimangalam Tirupathur
            </p>
            <p style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              <FaPhoneAlt /> <a href="tel:+916381475573">+91 6381475573</a>
            </p>
            <p style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}>
              <IoMail />{" "}
              <a href="mailto:trainsontime@email.com">trainsontime@email.com</a>
            </p>
          </Col>
        </Row>

        <Row className="d-flex flex-row justify-content-center align-items-center mt-4">
          <Col xs={12} sm={4} className="text-center">
            <p
              className="mt-3"
              style={{ fontSize: "20px", fontFamily: "Poppins, sans-serif" }}
            >
              Copyrights © 2024 Trains on Wheels. All Rights Reserved 2024
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}; 

export default Footer;
