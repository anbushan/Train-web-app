import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { StationSchema } from "../../pages/Station/StationValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { useEditStationMutation } from "../../redux/features/api/StationApi";
import { toast } from "react-toastify";

const EditStation = () => {
  const { id } = useParams();
  const Id = id && id.startsWith(":") ? id.slice(1) : id;
  const [{ data: editStation }, { isLoading }] = useEditStationMutation();

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/station");
  };
  const [stationCode, setStationCode] = useState("");
  const [stationName, setStationName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (editStation) {
      setStationCode(editStation.stationCode);
      setStationName(editStation.stationName);
      setCity(editStation.city);
      setState(editStation.state);
    }
  }, [editStation]);

  const initialValues = {
    stationCode: "",
    stationName: "",
    city: "",
    state: "",
  };

  const handleAddData = async () => {
    try {
      const response = await editStation({
        id: Id,
        data: {
          stationCode,
          stationName,
          city,
          state,
        },
      });

      if (response.error.originalStatus === 200) {
        setStationCode("");
        setStationName("");
        setCity("");
        setState("");

        navigate("/admin/station");
        toast.success(response.error.data, { autoClose: 2000 });
        setTimeout(() => navigate("/admin/station"), 3000);
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
          validationSchema={StationSchema}
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
                <Row className="d-flex flex-row justify-content-between align-items-center mt-3">
                  <Col className="d-flex justify-content-start mb-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Edit Station</h4>
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
                        !stationCode ||
                        !stationName ||
                        !city ||
                        !state ||
                        (touched.stationCode && errors.stationCode) ||
                        (touched.stationName && errors.stationName) ||
                        (touched.city && errors.city) ||
                        (touched.state && errors.state)
                      }
                      onClick={handleSubmit}
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Station Code"
                        type=""
                        name="stationCode"
                        className={`form-control ${
                          touched.stationCode && errors.stationCode
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setStationCode(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.stationCode && errors.stationCode ? (
                            <p className="text-danger">{errors.stationCode}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Station Name"
                        type=""
                        name="stationName"
                        className={`form-control ${
                          touched.stationName && errors.stationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.stationName && errors.stationName ? (
                            <p className="text-danger">{errors.stationName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="City "
                        type=""
                        name="city"
                        className={`form-control ${
                          touched.city && errors.city ? "is-invalid" : ""
                        }`}
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
                    </Col>
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

export default EditStation;
