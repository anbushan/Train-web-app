import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from ".././../../components/BasicTable";
import Header from ".././../../components/Header";
import Loader from ".././../../pages/loginForms/loader/Loader";
import { useGetGroupNotificationQuery, useDeleteGroupNotificationMutation, useAddGroupNotificationMutation } from ".././../../redux/features/api/GroupNotificationApi";
import { toast } from "react-toastify";
import DeleteModel from ".././../../components/DeleteModel";
import { MdStreetview } from "react-icons/md";

const GeneralGroupNotification = () => {
  const navigate = useNavigate();
  const [groupname, setGroupname] = useState("");
  const [emails, setEmails] = useState("");
  const [data, setData] = useState([]);
 
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: GroupNotificationData, isLoading } = useGetGroupNotificationQuery(currentPage);
  const [deleteGroupNotificationApi] = useDeleteGroupNotificationMutation();
  const [addGroupNotificationApi] = useAddGroupNotificationMutation();
  const [show, setShow] = useState(false);
  

  useEffect(() => {
    if (GroupNotificationData && GroupNotificationData.data) {
      setData(GroupNotificationData.data);
      setTotalPages(GroupNotificationData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [GroupNotificationData, currentPage]);

  const handleNavigateAddForm = () => navigate("/admin/group-notification");

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteGroupNotification = async () => {
    try {
      const response = await deleteGroupNotificationApi(idToDelete);
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

  const handleLogin = async () => {
    try {
      const response = await addGroupNotificationApi({
        groupname: groupname,
        emails: emails,
      });

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  // const handleGroupView = () => {
  //   navigate(`/admin/group-notification`); // Navigate to the group page with the specified groupId
  // };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
    },
    {
      Header: "Group Name",
      accessor: "groupName",
    },
    {
      Header: "Title",
      accessor: "title",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Sub Title",
      accessor: "body",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Emails",
      accessor: "emails",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
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
            <Button variant="primary" className="m-1" onClick={() => handleNavigateAddForm(rowIdx)}>
              <MdStreetview/>  Group
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
              <Col>
                <Header
                  ONCLICK={handleShow}
                  HEADING=" Group Notification"
                  BUTTON_NAME="Add Group "
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
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
            YES={deleteGroupNotification}
            DESCRIPTION="Confirm to Delete this Grop Notification"
            DELETETITLE="GroupNotification"
          />
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Group </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="groupName">
                <Form.Label>Group Name</Form.Label>
                <Form.Control type="text" placeholder="Enter group name"  value={groupname} onChange={(e) => setGroupname(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="emails"  value={emails} onChange={(e) => setEmails(e.target.value)}>
                <Form.Label>Emails</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your emails "
                
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button style={{ backgroundColor: "#db6300", border: "none" }} variant="primary" onClick={handleLogin}>
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

export default GeneralGroupNotification;
