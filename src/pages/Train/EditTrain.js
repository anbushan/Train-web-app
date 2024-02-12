
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {  Col, Container, Form, Row } from "react-bootstrap";
import { TrainSchema } from "../../pages/Train/TrainValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { useEditTrainMutation ,useGetTrainByIdQuery} from "../../redux/features/api/TrainApi";
import { toast } from "react-toastify";
const EditTrain = () => {
  const navigate = useNavigate();
  const [TrainNo, setTrainNo] = useState("");
  const [TrainName, setTrainName] = useState("");
  const { id } = useParams();
  const Id = id.startsWith(":") ? id.slice(1) : id;
  const [EditTrainData, { isLoading }] = useEditTrainMutation();
  const { data: TrainData } = useGetTrainByIdQuery(Id);
// console.log(id);
console.log(TrainData);
  const handleCancel = () => {
    navigate("/admin/train");
  };
  useEffect(() => {
    if (TrainData && TrainData.data) {
      setTrainNo(TrainData.data.TrainNo);
      setTrainName(TrainData.data.TrainName);
     
    }
  }, [TrainData]);
  // console.log(TrainData);
  const initialValues = {
    TrainNo: "",
    TrainName: "",
   
  };
  const handleEditData = async () => {
    try {
      const response = await EditTrainData({
        id: Id,
        data: {
          TrainNo: TrainNo,
          TrainName: TrainName,
         
        },
      });
      
      console.log(response);
    
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/train");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
       }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={TrainSchema}
          onSubmit={handleEditData}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Form>
              <Row className="d-flex flex-row justify-content-between align-items-center mt-3">
                  <Col className="d-flex justify-content-start mb-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Edit Train</h4>
                  </Col>
                  <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                 <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />              
                      <BasicButton
                      className="m-1"
                      label="Update"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={
                        isSubmitting ||
                        !TrainNo ||
                        !TrainName ||                     
                        (touched.TrainNo && errors.TrainNo) ||
                        (touched.TrainName && errors.TrainName)                    
                      }
                      onClick={handleSubmit}
                    />
                            
                          </Col>  
                         </Row>            
                   <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Train No"
                        type=""
                        name="TrainNo"
                        value={TrainNo}
                        className={`form-control ${
                          touched.TrainNo && errors.TrainNo
                            ? "is-invalid"
                            : ""
                        }`}
                      
                        onChange={(e) => {
                          setTrainNo(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.TrainNo && errors.TrainNo ? (
                            <p className="text-danger">{errors.TrainNo}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Train Name"
                        type=""
                        name="TrainName"
                        value={TrainName}
                        className={`form-control ${
                          touched.TrainName && errors.TrainName
                            ? "is-invalid"
                            : ""
                        }`}
                       
                        onChange={(e) => {
                          setTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.TrainName && errors.TrainName ? (
                            <p className="text-danger">{errors.TrainName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>               
                  </Col>
                </Row>  
                
                
                     <Row className=" mt-3  d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">  
                    <Col className="d-flex justify-content-start align-items-center">                 
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                  </Col>
                  
                 <Col className="d-flex justify-content-end align-items-center">            
                   <BasicButton
                     className="m-1"
                     label="Update"
                     type="button"
                     isLoading={isLoading}
                     loaderVariant="info"
                     disabled={
                       isSubmitting ||
                       !TrainNo ||
                       !TrainName |                    
                       (touched.TrainNo && errors.TrainNo) ||
                       (touched.TrainName && errors.TrainName)                 
                     }
                     onClick={handleSubmit}
                   />
                  </Col>
                </Row>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default EditTrain;
