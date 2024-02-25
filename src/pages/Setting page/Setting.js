import React, { useState } from 'react';
import { Col, Modal, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { useGetSettingImageQuery } from '../../redux/features/api/SettingPageApi'; // Adjust the import path as needed

const Setting = () => {
  const { data: imageData, isLoading, isError } = useGetSettingImageQuery();
  const [showModal, setShowModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset image file state
    setImageFile(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    console.error('Error fetching image data:', isError);
    return <p>Error fetching data</p>;
  }

  if (!imageData || !imageData.data || !Array.isArray(imageData.data) || imageData.data.length === 0) {
    console.warn('Image data is missing or not in the expected format:', imageData);
    return <p>No image data available</p>;
  }

  const settingData = imageData.data[0];

  return (
    <>
      <Col className="d-flex flex-row justify-content-between mt-4">        
        <h4 className="fw-bold">Settings</h4>
      </Col>
      <Col className="d-flex flex-row justify-content-between mt-5">
        <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>BANNER IMAGES:</h4>
      </Col>
      {/* Render banner images */}
      {settingData && (
        <>
          <Col xs={12} className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {[settingData.referralBanner, settingData.ratingBanner].map((banner, index) => (
              banner && (
                <div key={index} className="image-container">
                  <img src={banner} alt={index === 0 ? "Referral Banner" : "Rating Banner"} style={{ margin: "15px", height: "200px", width: "100%", maxWidth: "350px" }} />
                  <FaEdit className="edit-icon" onClick={handleEditClick} /> 
                </div>
              )
            ))}
          </Col>

          <Col className="d-flex flex-row justify-content-between mt-5">
            <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>CAROUSEL IMAGES:</h4>
          </Col>
          {/* Render carousel images */}
          <Col xs={12} className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {settingData.carousel && settingData.carousel.map((carouselImage, index) => (
              <div className="image-container" key={index}>
                <img src={carouselImage} alt={`Carousel Image ${index + 1}`} style={{ margin: "15px", height: "200px", width: "100%", maxWidth: "350px" }} />
                <FaEdit className="edit-icon" onClick={handleEditClick} />
              </div>
            ))}
          </Col>

          <Col className="d-flex flex-row justify-content-between mt-5">
            <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>DEFAULT IMAGES:</h4>
          </Col>
          {/* Render default images */}
          <Col xs={12} className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {[
              { image: settingData.engineImage, alt: "Default Image 1" },
              { image: settingData.feedbackImage, alt: "Feedback Image" },
              { image: settingData.pnrImage, alt: "PNR Image" },
              { image: settingData.walletImage, alt: "Wallet Image" },
              { image: settingData.defaultImage, alt: "Engine Image" },
              { image: settingData.coachImage, alt: "Coach Image" },
              { image: settingData.liveTrainGif, alt: "Live Train GIF" }
            ].map((item, index) => (
              item.image && (
                <div key={index} className="image-container">
                  <img src={item.image} alt={item.alt} style={{ margin: "15px", height: index === 6 ? "250px" : "200px", width: "100%", maxWidth: index === 6 ? "250px" : "350px" }} />
                  <FaEdit className="edit-icon" onClick={handleEditClick} />
                </div>
              )
            ))}
          </Col>
          <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button  style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleCloseModal}>
           Update
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      )}
    </>
  );
};

export default Setting;
