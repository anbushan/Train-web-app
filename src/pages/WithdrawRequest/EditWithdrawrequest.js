// import React, { useState, useEffect } from "react";
// import { Formik } from "formik";
// import { Col, Container, Form, Row, Modal } from "react-bootstrap";
// import { WithdrawrequestSchema } from "../../pages/WithdrawRequest/WithdrawRequestValidation";
// import { useNavigate, useParams } from "react-router-dom";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import BasicButton from "../../components/BasicButton";
// import TextSelect from "../../components/TextSelect";
// import { useEditWithdrawrequestMutation } from "../../redux/features/api/WithdrawRequestApi";
// import { toast } from "react-toastify";

// const EditWithdrawrequest = () => {
//   const { id } = useParams();
//   const Id = id && id.startsWith(":") ? id.slice(1) : id;
//   const [{ data: editWithdrawrequest }, { isLoading }] = useEditWithdrawrequestMutation();

//   const navigate = useNavigate();
//   const handleCancel = () => {
//     navigate("/admin/withdraw-request");
//   };

//   const [status, setStatus] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (editWithdrawrequest) {
//       setStatus(editWithdrawrequest.status);
//     }
//   }, [editWithdrawrequest]);

//   const initialValues = {
//     status: "",
//   };

//   const handleAddData = async () => {
//     try {
//       const response = await editWithdrawrequest({
//         id: Id,
//         data: {
//           status,
//         },
//       });

//       if (response.error.originalStatus === 200) {
//         setStatus("");
//         setShowModal(false);

//         navigate("/admin/Withdrawrequest");
//         toast.success(response.error.data, { autoClose: 2000 });
//         setTimeout(() => navigate("/admin/Withdrawrequest"), 3000);
//       } else {
//         toast.error(response.error.data, { autoClose: 2000 });
//         console.error(response.error.data);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Internal Server Error", { autoClose: 2000 });
//     }
//   };

//   const option = [
//     {
//       value: "Pending",
//       label: "Pending",
//     },
//     {
//       value: "Approved",
//       label: "Approved",
//     },
//   ];

//   return (
//     <div>
//       <Container fluid>
//         <Row className="d-flex flex-row justify-content-between align-items-center mt-3">
//           <Col className="d-flex justify-content-start mb-3">
//             <h4 onClick={handleCancel}>
//               <AiOutlineArrowLeft />
//             </h4>
//             <h4>Edit Withdrawrequest</h4>
//           </Col>
//           <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
//             <BasicButton
//               className="m-1"
//               variant="secondary"
//               onClick={handleCancel}
//               label="Cancel"
//             />
//             <BasicButton
//               className="m-1"
//               label="Update"
//               type="button"
//               isLoading={isLoading}
//               loaderVariant="info"
//               disabled={!status}
//               onClick={() => setShowModal(true)}
//             />
//           </Col>
//         </Row>
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Withdrawrequest</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={WithdrawrequestSchema}
//               onSubmit={handleAddData}
//             >
//               {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//               }) => (
//                 <Form>
//                   <TextSelect
//                     name="status"
//                     label="Status"
//                     value={status}
//                     options={option}
//                     meta={
//                       touched.status && errors.status
//                         ? { touched: true, error: errors.status }
//                         : null
//                     }
//                     onChange={(selectedOption) =>
//                       setStatus(selectedOption.value)
//                     }
//                     handleBlur={handleBlur}
//                   />
//                   <div className="d-flex justify-content-end">
//                     <BasicButton
//                       className="m-1"
//                       variant="secondary"
//                       onClick={() => setShowModal(false)}
//                       label="Cancel"
//                     />
//                     <BasicButton
//                       className="m-1"
//                       label="Update"
//                       type="button"
//                       isLoading={isLoading}
//                       loaderVariant="info"
//                       disabled={!status}
//                       onClick={handleSubmit}
//                     />
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </Modal.Body>
//         </Modal>
//       </Container>
//     </div>
//   );
// };

// export default EditWithdrawrequest;
