import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import train from "../../assets/images/rail.png"
const Features = () => {
    // const buttonStyle = {
    //     boxShadow: '0 6px 10px 0 rgba(0,0,0,0.1)',
    //     fontSize: '0.75rem',
    //     borderRadius: '.3rem',
    //     color: '#fff',
    //     cursor: 'pointer',
    //     textTransform: 'uppercase',
    //     background: '#3B64B8',
    //     border: '0',
    //     borderRadius: '3px',
    //     padding: '15px 40px',
    //     fontFamily: "'Rubik', sans-serif",
    //     fontWeight: '800',
    //     letterSpacing: '1px'
    // };
    return (
        <div>
            <section className='mt-5 information'style={{ marginBottom: '-125px'}} >
                <img src={train} className="img-fluid shadow d-none d-md-block justify-content-center" alt="TrainsOnWheel section-3" />
            </section>
            <Container className="mt-n2 pb-5 mt-5" >
                <Row className="justify-content-center">
                    <Col md={4} className="mt-2 d-flex justify-content-center"  >
                        <div className="bg-white shadow rounded p-4 text-center">
                            <p className="lead fontfamily">Travel Train Express</p>
                            <p style={{ fontSize: "clamp(14px, 2vw, 20px)" }} className="text-muted fontfamily">Find the superfast high-speed  A to B routes for Express trains</p>
                            {/* <Button href="#" className="mt-3 btn btn-cta" style={buttonStyle}>Trains Express</Button> */}
                        </div>
                    </Col>
                    <Col md={4} className="mt-2 d-flex justify-content-center">
                        <div className="bg-white shadow rounded p-4 text-center">
                            <p className='lead fontfamily'>Live Train Announcements</p>
                            <p style={{ fontSize: "clamp(14px, 2vw, 20px)" }} className="text-muted fontfamily">View the official announcements related to local trains, metro trains, origin, and destination Live train status.</p>
                            {/* <Button href="#" className="mt-3 btn btn-cta" style={buttonStyle}>Train Announcement</Button> */}
                        </div>
                    </Col>
                    <Col md={4} className="mt-2 d-flex justify-content-center">
                        <div className="bg-white shadow rounded p-4 text-center">
                            <p className="lead fontfamily">Commuter News</p>
                            <p style={{ fontSize: "clamp(14px, 2vw, 20px)"}} className="text-muted fontfamily">Get the latest news, updates, and more from the railways directly on the Train wheels app</p>
                            {/* <Button href="#" className="mt-3 btn btn-cta" style={buttonStyle}>View News</Button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Features;