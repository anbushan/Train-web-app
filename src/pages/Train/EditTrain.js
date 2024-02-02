import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { TrainSchema } from "../../pages/Train/TrainValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { useEditTrainMutation, useGetTrainByIdQuery } from "../../redux/features/api/TrainApi";
import { toast } from "react-toastify";

const EditTrain = () => {
  const { id } = useParams();
  const Id = id && id.startsWith(":") ? id.slice(1) : id;
//   const { data: editTrainData } = useGetTrainByIdQuery(Id);
  const [{data:editTrain}, { isLoading }] = useEditTrainMutation();

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/Train");
  };

  const [TrainNo, setTrainNo] = useState("");
  const [TrainName, setTrainName] = useState("");


  useEffect(() => {
    if (editTrain) {
      setTrainNo(editTrain.stationCode);
      setTrainName(editTrain.stationName);
    
    }
  }, [editTrain]);

  const initialValues = {
    TrainNo: "",
    TrainName: "",
    
  };

  const handleAddData = async () => {
    try {
      const response = await editTrain({
        id: Id,
        data: {
            TrainNo,
            TrainName,
       
        },
      });

      if (response.error.originalStatus === 200) {
        setTrainNo("");
        setTrainName("");
      

        navigate("/admin/Train");
        toast.success(response.error.data, { autoClose: 2000 });
        setTimeout(() => navigate("/admin/Train"), 3000);
      } else {
        toast.error(response.error.data, { autoClose: 2000 });
        console.error(response.error.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error", { autoClose: 2000 });
    }
  };

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={TrainSchema}
          onSubmit={handleAddData}
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
                <Row className="d-flex flex-row justify-content-between align-items-center">
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
                        className={`form-control ${
                          touched.TrainNo && errors.TrainNo
                            ? "is-invalid"
                            : ""
                        }`}
                        value={TrainNo}
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
                        className={`form-control ${
                          touched.TrainName && errors.TrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        value={TrainName}
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

                    {/* <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="City"
                        type=""
                        name="city"
                        className={`form-control ${
                          touched.city && errors.city ? "is-invalid" : ""
                        }`}
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.city && errors.city ? (
                            <p className="text-danger">{errors.city}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="State"
                        type=""
                        name="state"
                        className={`form-control ${
                          touched.state && errors.state ? "is-invalid" : ""
                        }`}
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.state && errors.state ? (
                            <p className="text-danger">{errors.state}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col> */}
                  </Col>
                </Row>
                <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">
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
                        !TrainName ||
                        
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
