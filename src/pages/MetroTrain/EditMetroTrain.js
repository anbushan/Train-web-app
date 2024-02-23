import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { useEditMetroTrainMutation ,useGetMetroTrainByIdQuery} from "../../redux/features/api/MetroTrainApi";
import { MetroTrainSchema } from "../../pages/MetroTrain/MetroTrainValidation";
import { toast } from "react-toastify";

const EditTrain = () => {
  const navigate = useNavigate();
  const [route, setRoute] = useState("");
  const [day, setDay] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [via, setVia] = useState("");
  const [firsttrain, setFirsttrain] = useState("");
  const [lasttrain, setLasttrain] = useState("");
  const [timing1, setTiming1] = useState("");
  const [timing1frequency, setTiming1frequency] = useState("");
  const [timing2, setTiming2] = useState("");
  const [timing2frequency, setTiming2frequency] = useState("");
  const [timing3, setTiming3] = useState("");
  const [timing3frequency, setTiming3frequency] = useState("");
  const [city, setCity] = useState("chennai");  
  const { id } = useParams();
  const Id = id && id.startsWith(":") ? id.slice(1) : id;
  const [EditMetroTrainData, { isLoading }] = useEditMetroTrainMutation();
  const { data: MetroTrainData } = useGetMetroTrainByIdQuery({id:Id,city:city});

  console.log(id);
  console.log(city);
  console.log(MetroTrainData);



  const handleCancel = () => {
    navigate("/admin/metro-train");
  };
  useEffect(() => {
    if (MetroTrainData && MetroTrainData.data) {
      setRoute(MetroTrainData.data.route);
      setDay(MetroTrainData.data.day);
      setSource(MetroTrainData.data.source);
      setDestination(MetroTrainData.data.destination);
      setVia(MetroTrainData.data.via);
      setFirsttrain(MetroTrainData.data.first_train);
      setLasttrain(MetroTrainData.data.last_train);
      setTiming1(MetroTrainData.data.timing1);
      setTiming1frequency(MetroTrainData.data.timing1_train_frequency);
      setTiming2(MetroTrainData.data.timing2);
      setTiming2frequency(MetroTrainData.data.timing2_train_frequency);
      setTiming3(MetroTrainData.data.timing3);
      setTiming3frequency(MetroTrainData.data.timing3_train_frequency);
    }
  }, [MetroTrainData]);
  
console.log(route);
console.log(day);

  const initialValues = {
    route: "",
    day: "",
    source: "",
    destination: "",
    via: "",
    firsttrain: "",
    lasttrain: "",
    timing1: "",
    timing1frequency: "",
    timing2: "",
    timing2frequency: "",
    timing3: "",
    timing3frequency: "",
   
  };
  const handleEditData = async () => {
    try {
      const response = await EditMetroTrainData({
        id: Id, city:city,
        data: {
            route:route ,
            day: day,
            source:source,
            destination: destination,
            via: via,
            first_train: firsttrain,
            last_train: lasttrain,
            timing1: timing1,
            timing1_train_frequency: timing1frequency,
            timing2: timing2,
            timing2_train_frequency: timing2frequency,
            timing3: timing3,
            timing3_train_frequency: timing3frequency,
          
         
        },
      });
      
      console.log(response);
    
      if (response?.data) {
        setRoute("");
        setDay("");
        setSource("");
        setDestination("");
        setVia("");
        setFirsttrain("");
        setLasttrain("");
        setTiming1("");
        setTiming1frequency("");
        setTiming2("");
        setTiming2frequency("");
        setTiming3("");
        setTiming3frequency("");
       
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/metro-train");
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
          validationSchema={MetroTrainSchema}
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
                    <h4>Edit MetroTrain</h4>
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
                        !route ||
                        !day ||  
                        !source ||
                        !destination ||  
                        !via ||
                        !firsttrain ||          
                        !lasttrain ||
                        !timing1 ||  
                        !timing1frequency ||
                        !timing2 ||  
                        !timing2frequency ||
                        !timing3 ||  
                        !timing3frequency ||             
                        (touched.route && errors.route) ||
                        (touched.day && errors.day) ||
                        (touched.source && errors.source) ||
                        (touched.destination && errors.destination) ||
                        (touched.via && errors.via) ||
                        (touched.firsttrain && errors.firsttrain) ||
                        (touched.lasttrain && errors.lasttrain) ||
                        (touched.timing1 && errors.timing1) ||
                        (touched.timing1frequency && errors.timing1frequency) ||
                        (touched.timing2 && errors.timing2) ||
                        (touched.timing2frequency && errors.timing2frequency)||  
                        (touched.timing3 && errors.timing3) || 
                        (touched.timing3frequency && errors.timing3frequency)                
                      }
                      onClick={handleSubmit}
                    />
                            
                          </Col>  
                         </Row>            
                              
                         <Row className="mb-3">
                  <Form
                    onSubmit={""}
                    className="d-flex flex-column flex-md-row align-items-md-center justify-content-start"
                  >
                    <Col xs={12} md={4} lg={3} className="m-2">
                      <Form.Group controlId="city">
                        <Form.Label className="fs-4">Select City:</Form.Label>
                        <Form.Control
                          as="select"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value="chennai">Chennai</option>
                          <option value="delhi">Delhi</option>
                          <option value="pune">Pune</option>
                          <option value="kolkata">Kolkata</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="hyderabad">Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form>
                </Row>

               
                         <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Route "
                        type=""
                        name="route"
                        value={route}
                        className={`form-control ${
                          touched.route && errors.route ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setRoute(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.route && errors.route ? (
                            <p className="text-danger">{errors.route}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Day "
                        type=""
                        name="day"
                        value={day}
                        className={`form-control ${
                          touched.day && errors.day
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setDay(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.day && errors.day ? (
                            <p className="text-danger">{errors.day}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Source"
                        type=""
                        name="source"
                        value={source}
                        className={`form-control ${
                          touched.source && errors.source ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setSource(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.source && errors.source ? (
                            <p className="text-danger">{errors.source}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Destination"
                        type=""
                        name="destination"
                        value={destination}
                        className={`form-control ${
                          touched.destination && errors.destination ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setDestination(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.destination && errors.destination ? (
                            <p className="text-danger">{errors.destination}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Via"
                        type=""
                        name="via"
                        value={via}
                        className={`form-control ${
                          touched.via && errors.via
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setVia(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.via && errors.via ? (
                            <p className="text-danger">{errors.via}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="First Train"
                        type=""
                        name="firsttrain"
                        value={firsttrain}
                        className={`form-control ${
                          touched.firsttrain && errors.firsttrain ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setFirsttrain(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.firsttrain && errors.firsttrain ? (
                            <p className="text-danger">{errors.firsttrain}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Last train "
                        type=""
                        name="lasttrain"
                        value={lasttrain}
                        className={`form-control ${
                          touched.lasttrain && errors.lasttrain
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setLasttrain(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.lasttrain && errors.lasttrain ? (
                            <p className="text-danger">{errors.lasttrain}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    
                  </Col>

                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing1"
                        type=""
                        name="timing1"
                        value={timing1}
                        className={`form-control ${
                          touched.timing1 && errors.timing1 ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTiming1(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing1 && errors.timing1 ? (
                            <p className="text-danger">{errors.timing1}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing1 Frequency"
                        type=""
                        name="timing1frequency"
                        value={timing1frequency}
                        className={`form-control ${
                          touched.timing1frequency && errors.timing1frequency
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTiming1frequency(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing1frequency && errors.timing1frequency ? (
                            <p className="text-danger">{errors.timing1frequency}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing2"
                        type=""
                        name="timing2"
                        value={timing2}
                        className={`form-control ${
                          touched.timing2 && errors.timing2
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTiming2(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing2 && errors.timing2 ? (
                            <p className="text-danger">{errors.timing2}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing2 Frequency"
                        type=""
                        name="timing2frequency"
                        value={timing2frequency}
                        className={`form-control ${
                          touched.timing2frequency && errors.timing2frequency ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTiming2frequency(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing2frequency && errors.timing2frequency ? (
                            <p className="text-danger">{errors.timing2frequency}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing3"
                        type=""
                        name="timing3"
                        value={timing3}
                        className={`form-control ${
                          touched.timing3 && errors.timing3 ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTiming3(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing3 && errors.timing3 ? (
                            <p className="text-danger">{errors.timing3}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Timing3 Frequency"
                        type=""
                        name="timing3frequency"
                        value={timing3frequency}
                        className={`form-control ${
                          touched.timing3frequency && errors.timing3frequency
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTiming3frequency(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.timing3frequency && errors.timing3frequency ? (
                            <p className="text-danger">{errors.timing3frequency}</p>
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
                      !route ||
                        !day ||  
                        !source ||
                        !destination ||  
                        !via ||
                        !firsttrain ||          
                        !lasttrain ||
                        !timing1 ||  
                        !timing1frequency ||
                        !timing2 ||  
                        !timing2frequency ||
                        !timing3 ||  
                        !timing3frequency ||             
                        (touched.route && errors.route) ||
                        (touched.day && errors.day) ||
                        (touched.source && errors.source) ||
                        (touched.destination && errors.destination) ||
                        (touched.via && errors.via) ||
                        (touched.firsttrain && errors.firsttrain) ||
                        (touched.lasttrain && errors.lasttrain) ||
                        (touched.timing1 && errors.timing1) ||
                        (touched.timing1frequency && errors.timing1frequency) ||
                        (touched.timing2 && errors.timing2) ||
                        (touched.timing2frequency && errors.timing2frequency)||  
                        (touched.timing3 && errors.timing3) || 
                        (touched.timing3frequency && errors.timing3frequency)                                           
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
