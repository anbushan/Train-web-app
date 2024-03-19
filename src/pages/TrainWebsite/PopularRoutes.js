import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import bangalore from"../../assets/images/bangalore.png";
import kolkata from"../../assets/images/kolkata.png";
import chennai from"../../assets/images/chennai.png";
import hyderabad from"../../assets/images/hyderabad.png";
import ahmedabad from"../../assets/images/ahmedabad.png";
import delhi from"../../assets/images/delhi.png";
import mumbai from"../../assets/images/mumbai.png";
import pune from"../../assets/images/pune.png";
import nagpur from"../../assets/images/nagpur.png";
import noida from"../../assets/images/noida.png";








const PopularRoutes = () => {
  return (
    <section className="py-5 mt-4  mb-3" style={{fontFamily: "Poppins, sans-serif"}}>
    <Container>
    <Row className="justify-content-center">
          <Col xs={12}>
          <div className="text-center responsive-title">
    <h2 className='text-center responsive-title'>Popular Routes</h2>
</div>
          <Carousel
            nextIcon={null} 
            prevIcon={null} 
            indicators={false} 
            fade 
            interval={2000} 
          >
            <Carousel.Item>
              <Row className="justify-content-center py-3 text-center">
              <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={bangalore} alt="TrainsOnWheel Bangalore" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap ">BANGALORE</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={kolkata} alt="TrainsOnWheel kolkata" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">KOLKATA</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={chennai} alt="TrainsOnWheel chennai" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">CHENNAI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={hyderabad} alt="TrainsOnWheel hyderabad" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">HYDERABAD</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={ahmedabad} alt="TrainsOnWheel ahmedabad" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">AHMEDABAD</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            {/* Add more Carousel.Items for additional slides */}
            <Carousel.Item>
              <Row className="justify-content-center py-3">
              <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={delhi} alt="TrainsOnWheel delhi" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">DELHI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={mumbai} alt="TrainsOnWheel mumbai" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">MUMBAI</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={pune} alt="TrainsOnWheel pune" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">PUNE</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={nagpur} alt="TrainsOnWheel nagpur" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">NAGPUR</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} sm={4} md={2} className="mt-3">
                  <Card className="border-0">
                    <Card.Img src={noida} alt="TrainsOnWheel noida" style={{ maxWidth: '100%', height: 'auto' }} />
                    <Card.Body>
                      <Card.Title  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontFamily: "Poppins, sans-serif", color: "black" }} className="text-center text-nowrap">NOIDA</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  </section>
  );
};
export default PopularRoutes