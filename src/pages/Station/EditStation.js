import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { StationSchema } from "../../pages/Station/StationValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";
import { useEditStationMutation,useGetStationByIdQuery } from "../../redux/features/api/StationApi";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const EditStation = () => {
 
  const [stationCode, setStationCode] = useState("");
  const [stationName, setStationName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { id } = useParams();
  const Id = id.startsWith(":") ? id.slice(1) : id;
 const [EditStationData, { isLoading }] = useEditStationMutation();
  const { data: editStation } = useGetStationByIdQuery(Id);
  const { t } = useTranslation();

console.log(id);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/station");
  };

  useEffect(() => {
    if (editStation && editStation.data) {
      setStationCode(editStation.data.stationCode);
      setStationName(editStation.data.stationName);
      setCity(editStation.data.city);
      setState(editStation.data.state);
    }
  }, [editStation]);

console.log(editStation);


  const initialValues = {
    stationCode: "",
    stationName: "",
    city: "",
    state: "",
  };

  const handleEditData = async () => {
    try {
      const response = await EditStationData({
        id: Id,
        data: {
          stationCode: stationCode,
          stationName: stationName,
          city:city,
          state:state,
         
        },
      });
      
      console.log(response);
    
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/station");
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
          validationSchema={StationSchema}
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
                    <h4>{t("Edit Station")}</h4>
                  </Col>
                  <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label={t("Cancel")}
                    />
                    <BasicButton
                      className="m-1"
                      label={t("Update")}
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
                        label={t("Station Code")}
                        type=""
                        name="stationCode"
                        value={stationCode}
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
                        label={t("Station Name")}
                        type=""
                        name="stationName"
                        value={stationName}
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
                        label={t("City ")}
                        type=""
                        name="city"
                        value={city}
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
                        label={t("State")}
                        type=""
                        name="state"
                        value={state}
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
