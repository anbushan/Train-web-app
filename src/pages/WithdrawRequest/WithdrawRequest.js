import React, { useState, useEffect } from "react";
import { Button, Container, Row, Modal, Form, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import BasicTable from "../../components/BasicTable";
import DeleteModel from "../../components/DeleteModel";
import {
  useGetWithdrawrequestQuery,
  useDeleteWithdrawrequestMutation,
  useEditWithdrawrequestMutation,
  useGetEmailQuery,
} from "../../redux/features/api/WithdrawRequestApi";
import { useAddIndividualNotificationMutation } from "../../redux/features/api/IndividualNotificationApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import { useParams, useNavigate } from "react-router-dom";

const Withdrawrequest = () => {
  const [editShow, setEditShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [editId, setEditId] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteWithdrawrequestApi] = useDeleteWithdrawrequestMutation();
  const [updateWithdrawrequestApi] = useEditWithdrawrequestMutation();
  const [addIndividualNotification] = useAddIndividualNotificationMutation();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sendRequestShow, setSendRequestShow] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [emailOptions, setEmailOptions] = useState([]); // Define emailOptions state
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: getWithdrawrequestData, isLoading } =
    useGetWithdrawrequestQuery(currentPage, id);
  const { data: emailData } = useGetEmailQuery();

  useEffect(() => {
    if (getWithdrawrequestData && getWithdrawrequestData.data) {
      setData(getWithdrawrequestData.data);
      setTotalPages(getWithdrawrequestData.pagination.totalPages);
    }
  }, [getWithdrawrequestData]);

  useEffect(() => {
    if (emailData && emailData.data) {
      setEmailOptions(emailData.data);
    }
  }, [emailData]);

  const handleCancel = () => {
    navigate("/admin/withdraw-request");
  };

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteWithdrawrequest = async () => {
    try {
      const response = await deleteWithdrawrequestApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditShow = (id) => {
    setEditId(id);
    setEditShow(true);
  };

  const handleEditClose = () => {
    setEditShow(false);
    setEditId(null);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEditData = async () => {
    try {
      const response = await updateWithdrawrequestApi({
        id: editId,
        data: {
          status: selectedOption,
        },
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        handleEditClose();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendRequestClose = () => {
    setSendRequestShow(false);
  };

  const handleSendRequest = async () => {
    try {
      const response = await addIndividualNotification({
        email: email,
        title: title,
        body: body,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        navigate("/admin/withdraw-request");
        setSendRequestShow(false);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Upi ID",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button variant="warning" onClick={() => handleEditShow(rowIdx)}>
              <FaEdit />
            </Button>
            <Button
              variant="danger"
              className="ms-2"
              onClick={() => deleteHandleShow(rowIdx)}
            >
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!isLoading ? (
        <>
          <Container fluid className="mt-3">
            <Row>
              <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold" onClick={handleCancel}>
                  Withdraw Request
                </h4>
                <Button
                  style={{ backgroundColor: "#db6300", border: "none" }}
                  className="p-2"
                  onClick={() => setSendRequestShow(true)}
                >
                  <IoIosSend size={20} /> Individual Notification
                </Button>
              </Col>
            </Row>
            <Row>
              <BasicTable
                COLUMNS={COLUMNS}
                MOCK_DATA={data}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </Row>
          </Container>

          <DeleteModel
            YES={deleteWithdrawrequest}
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            DESCRIPTION="Are you sure want to delete this Withdrawrequest"
            DELETETITLE="Withdrawrequest"
          />

          <Modal show={editShow} onHide={handleEditClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Withdraw Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Status:</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#db6300", border: "none" }}
                onClick={handleEditData}
              >
                Update
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={sendRequestShow}
            onHide={handleSendRequestClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Send Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    as="select"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    <option value="">Select an email</option>
                    {emailOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicUPI">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicWithdrawAmount">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleSendRequestClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#db6300", border: "none" }}
                onClick={handleSendRequest}
              >
                Send
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Withdrawrequest;
