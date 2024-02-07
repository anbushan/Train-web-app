import { Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NotificationSchema } from "../../pages/Notification/NotificationValidation";
import BasicButton from "../../components/BasicButton";
import TextInput from "../../components/TextInput";

import { useAddNotificationMutation } from "../../redux/features/api/NotificationApi";
import { toast } from "react-toastify";

const AddNotification = () => {
  const [tittle, settittle] = useState("");
  const [subtittle, setsubtittle] = useState("");
  const [image, setimage] = useState("");
  const [NotificationAddData, { isLoading }] = useAddNotificationMutation();

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/notification");
  };

  const initialValues = {
    tittle: "",
    subtittle: "",
    image: "",
  };

  const handleAddData = async () => {
    try {
      const formData = new FormData();
      formData.append("tittle", tittle);
      formData.append("subtittle", subtittle);
      formData.append("image", image);

      const response = await NotificationAddData(formData);

      if (response?.data) {
        settittle("");
        setsubtittle("");
        setimage("");

        navigate("/admin/Notification");
        toast.success(response?.data?.message, { autoClose: 1000 });
        setTimeout(() => navigate("/admin/Notification"), 3000);
        console.log(response.error.data);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error.data);
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
          validationSchema={NotificationSchema}
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
                  <Col className="d-flex justify-content-start mb-3 mt-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Add Notification</h4>
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
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        tittle === "" ||
                        subtittle === "" ||
                        image === "" ||
                        (touched.tittle && errors.tittle) ||
                        (touched.subtittle && errors.subtittle) ||
                        (touched.image && errors.image)
                          ? handleSubmit
                          : handleAddData
                      }
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Title"
                        type=""
                        name="title"
                        className={`form-control ${
                          touched.tittle && errors.tittle ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          settittle(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.tittle && errors.tittle ? (
                            <p className="text-danger">{errors.tittle}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Subtitle"
                        type=""
                        name="subtitle"
                        className={`form-control ${
                          touched.subtittle && errors.subtittle
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setsubtittle(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.subtittle && errors.subtittle ? (
                            <p className="text-danger">{errors.subtittle}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Image"
                        type="file" // Change the type to file
                        name="image"
                        className={`form-control ${
                          touched.image && errors.image ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setimage(e.target.files[0]); // Use e.target.files to get the selected file
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.image && errors.image ? (
                            <p className="text-danger">{errors.image}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
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
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        tittle === "" ||
                        subtittle === "" ||
                        image === "" ||
                        (touched.tittle && errors.tittle) ||
                        (touched.subtittle && errors.subtittle) ||
                        (touched.image && errors.image)
                          ? handleSubmit
                          : handleAddData
                      }
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
export default AddNotification;
