import React from 'react';
import { Col } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { useGetSettingImageQuery } from '../../redux/features/api/SettingPageApi'; // Adjust the import path as needed

const Setting = () => {
  const { data: imageData, isLoading, isError } = useGetSettingImageQuery();

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
          <Col className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {settingData.referralBanner && (
              <div className="image-container">
                <img src={settingData.referralBanner} alt="Referral Banner" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.ratingBanner && (
              <div className="image-container">
                <img src={settingData.ratingBanner} alt="Rating Banner" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
          </Col>

          <Col className="d-flex flex-row justify-content-between mt-5">
            <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>CAROUSEL IMAGES:</h4>
          </Col>
          {/* Render carousel images */}
          <Col className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {settingData.carousel && settingData.carousel.map((carouselImage, index) => (
              <div className="image-container" key={index}>
                <img src={carouselImage} alt={`Carousel Image ${index + 1}`} style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
               
                <FaEdit className="edit-icon" />
              </div>
            ))}
          </Col>

          <Col className="d-flex flex-row justify-content-between mt-5">
            <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>DEFAULT IMAGES:</h4>
          </Col>
          {/* Render default images */}
          <Col className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
            {settingData.engineImage && (
              <div className="image-container">
                <img src={settingData.engineImage} alt="Default Image 1" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.feedbackImage && (
              <div className="image-container">
                <img src={settingData.feedbackImage} alt="Feedback Image" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.pnrImage && (
              <div className="image-container">
                <img src={settingData.pnrImage} alt="PNR Image" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.walletImage && (
              <div className="image-container">
                <img src={settingData.walletImage} alt="Wallet Image" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.defaultImage && (
              <div className="image-container">
                <img src={settingData.defaultImage} alt="Engine Image" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.coachImage && (
              <div className="image-container">
                <img src={settingData.coachImage} alt="Coach Image" style={{ margin: "15px", height: "200px", width: "350px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
            {settingData.liveTrainGif && (
              <div className="image-container">
                <img src={settingData.liveTrainGif} alt="Live Train GIF" style={{ margin: "15px", height: "250px", width: "250px", maxWidth: "100%" }} />
                <FaEdit className="edit-icon" />
              </div>
            )}
          </Col>
        </>
      )}
    </>
  );
};

export default Setting;
