import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { WithdrawrequestSchema } from "../../pages/WithdrawRequest/WithdrawRequestValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../components/BasicButton";
import TextSelect from "../../components/TextSelect";
import { useEditWithdrawrequestMutation } from "../../redux/features/api/WithdrawRequestApi";
import { toast } from "react-toastify";

const EditWithdrawrequest = () => {
  const { id } = useParams();
  const Id = id && id.startsWith(":") ? id.slice(1) : id;
//   const { data: editWithdrawrequestData } = useGetWithdrawrequestByIdQuery(Id);
  const [{data:editWithdrawrequest}, { isLoading }] = useEditWithdrawrequestMutation();

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/withdraw-request");
  };

  const [status, setStatus] = useState("");
 


  useEffect(() => {
    if (editWithdrawrequest) {
        setStatus(editWithdrawrequest.status);
      
    
    }
  }, [editWithdrawrequest]);

  const initialValues = {
    status: "",
  
    
  };

  const handleAddData = async () => {
    try {
      const response = await editWithdrawrequest({
        id: Id,
        data: {
            status,
         
       
        },
      });

      if (response.error.originalStatus === 200) {
        setStatus("");
      
      

        navigate("/admin/Withdrawrequest");
        toast.success(response.error.data, { autoClose: 2000 });
        setTimeout(() => navigate("/admin/Withdrawrequest"), 3000);
      } else {
        toast.error(response.error.data, { autoClose: 2000 });
        console.error(response.error.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error", { autoClose: 2000 });
    }
  };

  const option = [
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: " Approved",
      label: "  Approved",
    },

    ];
  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={WithdrawrequestSchema}
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
                    <h4>Edit Withdrawrequest</h4>
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
                        !status ||
                       
                        
                        (touched.status && errors.status) 
                      
                      
                      }
                      onClick={handleSubmit}
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                    <TextSelect
                    name="status"
                    label="status"
                    value={status}
                    options={option}
                    meta={
                      touched.status && errors.status
                        ? { touched: true, error: errors.status }
                        : null
                    }
                    onChange={(selectedOption)=>setStatus(selectedOption.value)}
                    handleBlur={handleBlur}
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
                      label="Update"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={
                        isSubmitting ||
                        !status ||
                       
                        
                        (touched.status && errors.status)
                        
                     
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

export default EditWithdrawrequest;
