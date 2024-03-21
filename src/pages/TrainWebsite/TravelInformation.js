import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import group from "../../assets/images/Group 66.png";

const TravelInformation = () => {
  return (
    <div>
      <section className='p-5'>
        <Container>
          <div className='text-center'>
            <div className='choose'>
              <h1 style={{ fontSize: "clamp(24px, 5vw, 45px)", fontFamily: "Poppins, sans-serif", color: "black" }}>Why choose us</h1>
              <p></p>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className='chooseBox'>
                <div className='pic'>
                  <picture>
                    <source media="(min-width: 100px)" srcSet="./assets/images/Group 66.png" type="image/webp" />
                    <img src={group} alt="ACT fidernet" className='img-fluid' />
                  </picture>
                </div>
                <div className='chooseTxt at1'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>TRAINS ON WHEELS</h3>
                  <p className='fonts text-center'>A complete solution for all your IRCTC and Metro train needs! </p>
                </div>
                <div className='chooseTxt at2'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>LIVE TRAIN</h3>
                  <p className='fonts'>Get the IRCTC live train running information.</p>
                </div>
                <div className='chooseTxt at3'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>SEAT AVAILABILITY</h3>
                  <p className='fonts'>Check IRCTC train ticket and  upcoming station  seat availability here </p>
                </div>
                <div className='chooseTxt at4'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>PNR STATUS</h3>
                  <p className='fonts'>PNR status check to know whether IRCTC train seat is confirmed or not.</p>
                </div>
                <div className='chooseTxt at5'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>REFERRAL AMOUNT</h3>
                  <p className='fonts'>Easily earn even your travel when you referred to friends & family.</p>
                </div>
                <div className='chooseTxt at6'>
                  <h3 style={{ color: '#000', fontWeight: '700', fontSize: '25px' }}>NOTIFICATION</h3>
                  <p className='fonts'>A complete solution for all your IRCTC and Metro train needs! </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default TravelInformation;
