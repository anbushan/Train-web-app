import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from ".././../../components/BasicTable";
import Header from ".././../../components/Header";
import Loader from ".././../../pages/loginForms/loader/Loader";
import { useGetNotificationQuery, useDeleteNotificationMutation } from ".././../../redux/features/api/NotificationApi";
import { toast } from "react-toastify";
import DeleteModel from ".././../../components/DeleteModel";

const GeneralNotification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: NotificationData, isLoading } = useGetNotificationQuery(currentPage);
  const [deleteNotificationApi] = useDeleteNotificationMutation();

  useEffect(() => {
    if (NotificationData && NotificationData.data) {
      setData(NotificationData.data);
      setTotalPages(NotificationData.totalPages);
      setCurrentPage(currentPage);
    }
  }, [NotificationData, currentPage]);

  console.log(NotificationData);
  
  const handleNavigateAddForm = () => navigate("/admin/add-general");

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };
  const deleteNotification = async () => {
    try {
      const response = await deleteNotificationApi(idToDelete);
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
  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
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
      Header: "Image",
      accessor: "image",
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
              <Col>
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING=" General Notification"
                  BUTTON_NAME="Add General"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
            <Row className="justify-content-center">
              <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
                <BasicTable
                  COLUMNS={COLUMNS}
                  MOCK_DATA={NotificationData}
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
            YES={deleteNotification}
            DESCRIPTION="Confirm to Delete this notification"
            DELETETITLE="Notification"
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GeneralNotification;
