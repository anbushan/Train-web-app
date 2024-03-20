import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Formik } from "formik";
import { LogAndRegSchema } from "./LoginValidation";
import TextInput from "../../components/TextInput";
import { useLoginUserMutation } from "../../redux/features/api/AuthApi";
import { toast } from "react-toastify";
import BasicButton from "../../components/BasicButton";
import login from "../../assets/images/loginlogo2.png";

const Login = () => {
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const [loginApi, { isLoading }] = useLoginUserMutation();

  const initialValues = {
    email: "",
    password: "",
  };

  const showPassword = () => {
    let eye = document.getElementById("password");
    if (eye.type === "password") {
      eye.type = "text";
      setPasswordIcon(true);
    } else {
      eye.type = "password";
      setPasswordIcon(false);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginApi({
        email: email,
        password: password,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        history("/admin/dashboard");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container
      fluid
      className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center bg-white"
      style={{ overflow: "hidden" }}
    >
      <Row className="justify-content-center align-items-center">
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className="justify-content-center align-items-center "
        >
          <img
            className="img-fluid d-none d-md-none d-sm-none d-lg-flex d-xl-flex d-xxl-flex d-lg-block ml-10 mt-md-4 justify-content-center align-items-center"
            src={login}
            alt="Img"
            style={{ height: "600px", width: "900px" }}
          />
        </Col>

        <Col
          xs={12}
          md={12}
          lg={6}
          xl={6}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <Row className="shadow p-4  bg-body rounded d-flex flex-column justify-content-center align-items-center">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h5>Login</h5>
              <p className="text-secondary text-noWarp">
                Welcome back! Please enter your details
              </p>
            </Col>
            <Col>
              <Formik
                initialValues={initialValues}
                validationSchema={LogAndRegSchema}
                onSubmit={handleLogin}
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
                  <Form
                    className="d-flex flex-column justify-content-center"
                    onSubmit={handleFormSubmit}
                  >
                    <Col className="align-items-start">
                      <TextInput
                        htmlFor="email"
                        label={"Email"}
                        name="email"
                        type="email"
                        size="md"
                        id="email"
                        placeholder="Enter your email"
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setEmail(e.target.value.trim());
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.email && errors.email ? (
                            <p className="text-danger">{errors.email}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Row className="d-flex mt-2 flex-row justify align-items-center">
                      <Col className="d-flex flex-row justify-end align-items-center">
                        <Form.Label
                          htmlFor="password*"
                          className="d-flex flex-row justify-start"
                        >
                          Password<span className="text-danger">*</span>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row className="d-flex flex-row justify-between align-items-center">
                      <Col className="d-flex flex-row justify-content-end align-items-center">
                        <Form.Control
                          name="password"
                          type="password"
                          size="md"
                          id="password"
                          placeholder="Enter your password"
                          className={`position-relative form-control ${
                            touched.password && errors.password
                              ? "border-danger"
                              : ""
                          }`}
                          onChange={(e) => {
                            setPassword(e.target.value.trim());
                            handleChange(e);
                          }}
                          onBlur={handleBlur}
                        />
                        <div
                          className="position-absolute m-2 pointer"
                          onClick={showPassword}
                        >
                          {password ? (
                            <>
                              {!passwordIcon ? (
                                <AiOutlineEyeInvisible />
                              ) : (
                                <AiOutlineEye />
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </Col>
                    </Row>
                    {touched.password && errors.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : (
                      ""
                    )}

                    <BasicButton
                      className="mt-3"
                      variant={"warning"}
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleLogin}
                      isLoading={isLoading}
                      label={"Login"}
                    />
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
