import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from ".././../../components/BasicTable";
import Loader from ".././../../pages/loginForms/loader/Loader";
import { useGetGroupQuery, useDeleteGroupMutation,useAddGroupMutation } from ".././../../redux/features/api/GroupApi";
import { toast } from "react-toastify";
import DeleteModel from ".././../../components/DeleteModel";
import { IoIosSend } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Generalgroup = () => {

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 const [addGroupNotification] = useAddGroupMutation();
  const { data: groupData, isLoading } = useGetGroupQuery(currentPage);
  const [deletegroupApi] = useDeleteGroupMutation();

 
  useEffect(() => {
    if (groupData && groupData.data) {
      setData(groupData.data);
      setTotalPages(groupData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [groupData, currentPage]);

console.log(groupData);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/group");
  };

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };
  const deletegroup = async () => {
    try {
      const response = await deletegroupApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
      
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
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
        console.log(response);
        navigate("/admin/group-notification");
        setShowModal(false); 
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
    },
    {
      Header: "Group Name",
      accessor: "groupName",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Emails",
      accessor: "emails",
      width: "auto",
      minWidth: 100,
      Cell: ({ row }) => {
        return (
          <ul>
            {row.original.emails.map((email) => (
              <li key={email._id}>{email.email}</li>
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
      {!isLoading ? (
        <>
          <Container fluid className="my-4">
            <Row>
              <Col className="d-flex flex-row justify-content-between mt-1">
             
                <h4  className="fw-bold "onClick={handleCancel}> <AiOutlineArrowLeft /> Group </h4>
                <Button
                  style={{ backgroundColor: "#db6300", border: "none" }}
                  className="p-2"
                  onClick={() => setShowModal(true)}
                >
                  <IoIosSend size={20} /> Send Notification
                </Button>
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
            <Row className="justify-content-center">
              <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
                <BasicTable
                  COLUMNS={COLUMNS}
                  MOCK_DATA={data} // Use the backend data directly here
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
            YES={deletegroup}
            DESCRIPTION="Confirm to Delete this group"
            DELETETITLE="group"
          />
          {/* Modal for sending notification */}
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
                  <Form.Label>body</Form.Label>
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Generalgroup;
