import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Explore = () => {
    return (
        <Container className="mt-md-4" style={{fontFamily: "'Poppins', sans-serif"}}>
            <Row className="py-5 ">
            <Col md={12} className=''>
    <h2 className='text-center responsive-title'>
        <span style={{color:"#3b64b8"}} className=" font-weight-bold">Explore Cities</span> | Trains on Wheels Guides
    </h2>
</Col>

                <Col md={5} className="pt-1 text-center mt-5 font">
                    <p className="font-weight-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        New to the City of Dreams? We’ve got your back!
                    </p>
                    <p style={{ fontFamily: "'Poppins', sans-serif" }}>
                        Use Trains on wheels your guide partner and explore all the beautiful places. Find out the best destinations in the city and do not miss out on all the fun it has to offer.
                    </p>
                    <ul className="list-unstyled pb-3 ">
                        <li className="mt-3">
                            <p  style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Famous places in India</p>
                        </li>
                        <li className="mt-3">
                            <p style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Top tourist destinations India</p>
                        </li>
                        <li className="mt-3">
                            <p style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Famous food items in India</p>
                        </li>
                        <li className="mt-3">
                            <p  style={{ textDecoration: 'none', transition: 'all 0.2s', color: '#004085', fontFamily: "'Poppins', sans-serif" }}>Top Festivals in India</p>
                        </li>
                    </ul>
                    {/* <Button href="#" className="btn btn-primary" style={{
                        boxShadow: '0 6px 10px 0 rgba(0,0,0,0.1)',
                        fontSize: '0.75rem',
                        borderRadius: '.3rem',
                        color: '#fff',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        background: '#3b64b8',
                        border: '0',
                        borderRadius: '3px',
                        padding: '15px 40px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: '800',
                        letterSpacing: '1px'
                    }}>Explore India</Button> */}
                </Col>
                <Col md={7} className='mt-5'>
                    <Row noGutters className="mt-4 mt-md-0 justify-content-center align-items-center">
                        <Col xs={4}>
                            <img src="https://www.trainman.in/assets/images/perfect-destination/delhi.jpg" style={{ width: '310px' }} className="img-fluid py-2 " alt="TrainsOnWheel Explore1" />
                            <img src="https://static.toiimg.com/thumb/msid-71219738,width-748,height-499,resizemode=4,imgsize-214741/.jpg" className="img-fluid w-100 float-right" alt="TrainsOnWheel Explore2" />
                        </Col>
                        <Col xs={6}>
                            <img src="https://yatrirailways.com/bl-themes/atom-magazine/img/explore-place.png" className="img-fluid " alt="TrainsOnWheel Explore3" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Explore;
