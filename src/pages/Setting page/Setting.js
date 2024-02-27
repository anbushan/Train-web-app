import React, { useState } from 'react';
import { Col, Modal, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { useGetSettingImageQuery, useEditSettingImageMutation } from '../../redux/features/api/SettingPageApi'; 
import { toast } from 'react-toastify';

const Setting = () => {
  const { data: imageData, isLoading, isError } = useGetSettingImageQuery();
  const [showModal, setShowModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageKey, setImageKey] = useState("");
  const [editSettingImage] = useEditSettingImageMutation(); 

  const handleEditClick = (identifier) => {
    const [sectionIndex, imageIndex] = identifier.split('-');
    const sectionDataKeys = [
      ['referralBanner', 'ratingBanner'],
      Object.keys(settingData.carousel),
      [
        'engineImage',
        'feedbackImage',
        'pnrImage',
        'walletImage',
        'defaultImage',
        'coachImage',
        'liveTrainGif'
      ]
    ];
    const imageKey = sectionDataKeys[sectionIndex][imageIndex];
    setImageKey(imageKey);
    setShowModal(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleCloseModal = () => {
    setImageKey("");
    setShowModal(false);
    setImageFile(null);
  };
  const handleUpdateImage = async () => {
    try {
      // Call the editSettingImage mutation function to update the image
      const response = await editSettingImage({ key:imageKey, imageFile: imageFile });
      // Check if a response is received
      if (response) {
        // If the response is an object, extract the message, otherwise use the response itself
        const message = typeof response === 'object' ? response.message : response;
        // Display a success toast with the message
        toast.success(message, { autoClose: 1000 });
      } else {
        // If no response is received, display an error toast
        toast.error("Failed to update image");
      }
    } catch (error) {
      // If an error occurs during the mutation, log the error and display an error toast
      console.error('Error updating image:', error);
      toast.error('Error updating image');
    }
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
      <Col className=''>
        <h4 className="fw-bold mb-2 mt-3">Settings</h4>
        {[
          { images: [settingData.referralBanner, settingData.ratingBanner], altTexts: ["Referral Banner", "Rating Banner"] },
          { images: settingData.carousel, altTexts: settingData.carousel && settingData.carousel.map((_, index) => `Carousel Image ${index + 1}`) },
          { images: [
            settingData.engineImage,
            settingData.feedbackImage,
            settingData.pnrImage,
            settingData.walletImage,
            settingData.defaultImage,
            settingData.coachImage,
            settingData.liveTrainGif
          ], altTexts: ["Engine Image", "Feedback Image", "PNR Image", "Wallet Image", "Default Image", "Coach Image", "Live Train GIF"] }
        ].map((section, sectionIndex) => (
          section.images && (
            <React.Fragment key={sectionIndex}>
              <Col className="d-flex flex-row justify-content-between mt-5">
                <h4 className="fw-bold" style={{ color: "#db6300", border: "none" }}>
                  {sectionIndex === 0 ? "BANNER IMAGES:" : sectionIndex === 1 ? "CAROUSEL IMAGES:" : "DEFAULT IMAGES:"}
                </h4>
              </Col>
              <Col xs={12} className="mt-3 d-flex flex-row flex-wrap justify-content-start align-items-center">
                {section.images.map((image, index) => (
                  image && (
                    <div key={index} className="image-container">
                      <img src={image} alt={section.altTexts[index]} style={{ margin: "15px", height: sectionIndex === 2 && index === 6 ? "250px" : "200px", width: "100%", maxWidth: sectionIndex === 2 && index === 6 ? "250px" : "350px" }} />
                      <FaEdit className="edit-icon" onClick={() => handleEditClick(`${sectionIndex}-${index}`)} />
                    </div>
                  )
                ))}
              </Col>
            </React.Fragment>
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
          <Button variant="secondary" onClick={handleCloseModal} >
            Close
          </Button>
          <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleUpdateImage} >
          Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Setting;
