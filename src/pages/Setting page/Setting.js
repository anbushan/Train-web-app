import React from 'react'
import BasicHeader from"../../components/BasicHeader";
import { Col, Row } from 'react-bootstrap';
const Setting = () => {
  return (
    <>
      <BasicHeader 
               
                  HEADING="Settings"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2 mt-3"
                  
                />
    
  <Row>
  
  
  
  <Col xs={12} md={6} lg={6} className="mb-3 justify-content-center align-items-center">
          <div className="d-flex flex-column p-3 p-md-5 m-1">
            <h4 className=" fs-4 mb-1 fw-bolder text-start">Referral Image:</h4>
            </div>
            <img style={{height:"250px",width:"400px"}} className='justify-content-center align-items-center text-center'
             src='https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zulian-yuliansyah-573130.jpg&fm=jpg'></img>
            
  </Col>


  
  <Col xs={12} md={6} lg={6} className="mb-3 justify-content-center align-items-center">
          <div className="d-flex flex-column p-3 p-md-5 m-1">
            <h4 className=" fs-4 mb-1 fw-bolder text-start">Ratting Banner:</h4>
            </div>
            <img style={{height:"250px",width:"400px"}} className='justify-content-center align-items-center text-center'
             src='https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zulian-yuliansyah-573130.jpg&fm=jpg'></img>
            
  </Col>
  <Col></Col>
  
  </Row>
    
    </>
  )
}

export default Setting