import React, { useState, useEffect } from "react";
import { Button, Container, Row, Modal, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetWithdrawrequestQuery, useDeleteWithdrawrequestMutation, useEditWithdrawrequestMutation } from "../../redux/features/api/WithdrawRequestApi";
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setCurrentPage(1);
    }
  }, [id]);

  const { data: getWithdrawrequestData, isLoading } = useGetWithdrawrequestQuery(currentPage, id);

  useEffect(() => {
    if (getWithdrawrequestData && getWithdrawrequestData.data) {
      setData(getWithdrawrequestData.data);
      setTotalPages(getWithdrawrequestData.pagination.totalPages);
    }
  }, [getWithdrawrequestData]);

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
        navigate("/admin/withdraw-request");
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

  const handleSendRequestShow = () => {
    setSendRequestShow(true);
  };

  const handleSendRequest = async () => {
    try {
      const response = await addIndividualNotification(email, {
        title,
        body,
      });
      if (response?.data) {
        toast.success("Notification sent successfully", { autoClose: 1000 });
        setSendRequestShow(false);
        setEmail("");
        setTitle("");
        setBody("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
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
            <Button variant="danger" className="ms-2" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
            <Button variant="primary" className="ms-2" onClick={handleSendRequestShow}>
              <IoIosSend />
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
              <BasicHeader HEADING="Withdraw Request" />
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
        <Form.Control as="select" value={selectedOption} onChange={handleDropdownChange}>
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
    <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleEditData}>
      Update
    </Button>
  </Modal.Footer>
</Modal>

          <Modal show={sendRequestShow} onHide={handleSendRequestClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Send Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicUPI">
                  <Form.Label>UPI ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter UPI ID" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicWithdrawAmount">
                  <Form.Label>Withdraw Amount</Form.Label>
                  <Form.Control type="text" placeholder="Enter withdraw amount" value={body} onChange={(e) => setBody(e.target.value)} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleSendRequestClose}>
                Cancel
              </Button>
              <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleSendRequest}>
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

