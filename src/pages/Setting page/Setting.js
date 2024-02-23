import React, { useState } from 'react';
import BasicHeader from '../../components/BasicHeader';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

const Setting = () => {
  const [showBannerCards, setShowBannerCards] = useState(true);
  const [showSecondSet, setShowSecondSet] = useState(false);
  const [showDefaultImages, setShowDefaultImages] = useState(false); // Added state variable

  const handleBannerButtonClick = () => {
    setShowBannerCards(!showBannerCards);
    setShowSecondSet(false);
    setShowDefaultImages(false); // Reset other state variables
  };

  const handleSecondButtonClick = () => {
    setShowSecondSet(!showSecondSet);
    setShowBannerCards(false);
    setShowDefaultImages(false); // Reset other state variables
  };

  const handleDefaultButtonClick = () => {
    setShowDefaultImages(!showDefaultImages);
    setShowSecondSet(false);
    setShowBannerCards(false); // Reset other state variables
  };

  return (
    <>
      <BasicHeader
        className="mt-5"
        HEADING="Settings"
        headingClassName="text-center text-md-start m-md-4 m-xl-2 mt-3"
      />
      <Container>
        <Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>
          <Col>
            <Button
              style={{ backgroundColor: "#db6300", border: "none" }}
              onClick={handleBannerButtonClick}
            >
              BANNER IMAGE
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "#db6300", border: "none" }}
              onClick={handleSecondButtonClick}
            >
              CAROUSEL IMAGE
            </Button>
          </Col>
          <Col>
            <Button
              style={{ backgroundColor: "#db6300", border: "none" }}
              onClick={handleDefaultButtonClick}
            >
              DEFAULT IMAGE
            </Button>
          </Col>
        </Row>
        {showBannerCards && (
          <Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>
            <Col>
              <Card className="mt-3">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                />
              </Card>
            </Col>
            <Col>
              <Button className='mt-3' variant="primary">Edit Image</Button>
            </Col>
            <Col>
              <Card className="mt-3">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                />
              </Card>
            </Col>
            <Col>
              <Button className='mt-3' variant="primary">Edit Image</Button>
            </Col>
          </Row>
        )}
        {showSecondSet && (
          <>
            <Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
            
              </Col>
              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
              </Col>
              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
              </Col>
              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
            </Row>
            <Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>
           
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
              </Col>
             
              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
              </Col>
             

              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
              <Col>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                  />
                </Card>
              </Col>
              <Col>
                <Button className='mt-3' variant="primary">Edit Image</Button>
              </Col>
            </Row>
          </>
        )}
        { showDefaultImages && (


<>
<Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>
  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>

  </Col>
  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Col>
  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Col>
  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
</Row>
<Row className='d-flex flex-row justify-content-center align-items-center mt-5 mx-5'>

  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Col>
 
  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Col>
 

  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
  <Col>
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/150"
      />
    </Card>
  </Col>
  <Col>
    <Button className='mt-3' variant="primary">Edit Image</Button>
  </Col>
</Row>
</>
        )}
      </Container>
    </>
  );
};

export default Setting;
