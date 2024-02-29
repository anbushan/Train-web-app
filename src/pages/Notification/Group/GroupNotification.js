import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../components/BasicTable";
import Loader from "../../../pages/loginForms/loader/Loader";
import { useGetGroupQuery, useDeleteGroupMutation, useAddGroupMutation, useGetNumberQuery, useAddGroupNotificationMutation } from "../../../redux/features/api/GroupApi";
import { toast } from "react-toastify";
import DeleteModel from "../../../components/DeleteModel";
import { IoIosSend } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Select from 'react-select';

const Generalgroup = () => {
  const [data, setData] = useState([]);
  const [groupname, setGroupname] = useState("");
  const [selectedphoneNumbers, setSelectedphoneNumbers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addGroupNotification] = useAddGroupMutation();
  const { data: groupData, isLoading: groupLoading } = useGetGroupQuery(currentPage);
  const [deleteGroupApi] = useDeleteGroupMutation();
  const [show, setShow] = useState(false);
  const { data: phoneData, isLoading: numberLoading } = useGetNumberQuery();
  const [addGroupNotificationApi] = useAddGroupNotificationMutation();

  useEffect(() => {
    if (groupData && groupData.data) {
      setData(groupData.data);
      setTotalPages(groupData.pagination.totalPages);
    }
  }, [groupData, currentPage]);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/admin/group");
  };

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteGroup = async () => {
    try {
      const response = await deleteGroupApi(idToDelete);
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

  const handleSendRequest = async () => {
    try {
      const response = await addGroupNotification({
        groupName: groupName,
        title: title,
        body: body,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        navigate("/admin/group-notification");
        setGroupName("");
        setTitle("");
        setBody("");
        setShowModal(false);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const CreateGroup = async () => {
    try {
      const selectedPhoneNumbers = selectedphoneNumbers.map(phone => phone.value);
      
      const response = await addGroupNotificationApi({
        groupname: groupname,
        phoneNumbers: selectedPhoneNumbers,
      });

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setGroupname("");
        setSelectedphoneNumbers([]);
        handleClose();
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NumberOptions = phoneData ? phoneData.data.map(phoneNumber => ({ value: phoneNumber, label: phoneNumber })) : [];

  const handleEmailChange = (selectedOptions) => {
    setSelectedphoneNumbers(selectedOptions);
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
    },
    {
      Header: "Group Name",
      accessor: "groupName",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Phone Numbers",
      accessor: "phoneNumbers",
      width: "auto",
      minWidth: 100,
      Cell: ({ row }) => {
        return (
          <ul>
            {row.original.phoneNumbers.map((phoneNumber) => (
              <li key={phoneNumber._id}>{phoneNumber.phoneNumber}</li>
            ))}
          </ul>
        );
      },
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      fixed: "right",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button variant="danger" className="m-1" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!groupLoading && !numberLoading ? (
        <>
          <Container fluid className="my-4">
            <Row>
              <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold " onClick={handleCancel}><AiOutlineArrowLeft /> Group</h4>
                <div>
                  <Button
                    style={{ backgroundColor: "#db6300", border: "none" }}
                    className="p-2 m-1"
                    onClick={() => setShowModal(true)}
                  >
                    <IoIosSend size={20} /> Send Notification
                  </Button>
                  <Button
                    style={{ backgroundColor: "#db6300", border: "none" }}
                    className="p-2 m-1"
                    onClick={handleShow}
                  >
                    <FaPlus size={20} /> Add Group
                  </Button>
                </div>
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
            <Row className="justify-content-center">
              <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
                <BasicTable
                  COLUMNS={COLUMNS}
                  MOCK_DATA={data}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </Col>
            </Row>
          </Container>
          <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={deleteGroup}
            DESCRIPTION="Confirm to Delete this group"
            DELETETITLE="group"
          />
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Send Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="groupName">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="body">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleSendRequest}>
                Send
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="groupname">
                <Form.Label>Group Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter group name"
                  value={groupname}
                  onChange={(e) => setGroupname(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="emails">
                <Form.Label className="mt-2">Phone Numbers</Form.Label>
                <Select
                  isMulti
                  options={NumberOptions}
                  value={selectedphoneNumbers}
                  onChange={handleEmailChange}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                style={{ backgroundColor: "#db6300", border: "none" }}
                variant="primary"
                onClick={CreateGroup}
              >
                Add Group
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

export default Generalgroup;
