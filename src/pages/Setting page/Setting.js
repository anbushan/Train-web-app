import React from 'react';
import BasicHeader from '../../components/BasicHeader';
import { Container, Col, Row } from 'react-bootstrap';

const Setting = () => {
  return (
    <>
      <BasicHeader 
        HEADING="Settings"
        headingClassName="text-center text-md-start m-md-4 m-xl-2 mt-3"
      />
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="mb-3">
            <div className="d-flex flex-column p-3 p-md-5 m-1">
              <h4 className="fs-4 mb-1 fw-bolder text-start">Referral:</h4>
            </div>
            <img
              style={{ height: "auto", width: "100%" }}
              className="d-block mx-auto mb-3"
              src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zulian-yuliansyah-573130.jpg&fm=jpg"
              alt="Referral"
            />
          </Col>
          <Col xs={12} md={6} lg={6} className="mb-3">
            <div className="d-flex flex-column p-3 p-md-5 m-1">
              <h4 className="fs-4 mb-1 fw-bolder text-start">Rating Banner:</h4>
            </div>
            <img
              style={{ height: "auto", width: "100%" }}
              className="d-block mx-auto mb-3"
              src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zulian-yuliansyah-573130.jpg&fm=jpg"
              alt="Rating Banner"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Setting;
