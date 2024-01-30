import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import Header from "../../components/Header";
import Loader from "../../pages/loginForms/loader/Loader";
import {
    useGetNotificationQuery,
} from "../../redux/features/api/NotificationApi";
import { toast } from "react-toastify";

const Notification = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
//   const [idToDelete, setIdToDelete] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data: NotificationData, isLoading } = useGetNotificationQuery(currentPage);
  const handleNavigateAddForm = () => navigate("/admin/add-info");
  useEffect(() => {
    if (NotificationData && NotificationData.data) {
      setData(NotificationData.data);
      setTotalPages(NotificationData.totalPages);
      setCurrentPage(currentPage);
    }
  }, [NotificationData, currentPage]);

  console.log(NotificationData);
//   const deleteHandleClose = () => {
//     setDeleteShow(false);
//   };

 
//   const deleteHandleShow = (id) => {
//     setIdToDelete(id);
//     setDeleteShow(true);
//   };

//   const delTimeSheetData = async () => {
//     try {
//       const response = await deleteSchemeMutation(idToDelete);
//       setDeleteShow(false);
//       setIdToDelete("");
//       if (response.error.originalStatus === 200) {
//         toast.success(response.error.data, { autoClose: 1000 });
//       } else {
//         toast.error(response.error.data, { autoClose: 1000 });
//       }
//     } catch (error) {
//       toast.error("Internal Server Error");
//     }
//   };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
    },
    {
      Header: "Email",
      accessor: "email",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Password",
      accessor: "password",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Referal ID",
      accessor: "referralId",
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      fixed: "right",
      Cell: (props) => {
        const rowIdx = props.row.original._id;

        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Link to={`/admin/edit-Notification/`}>
              <FaEdit size={20} color="#5046e5" />
            </Link>
            <span className="m-1">
              <MdDelete size={20} color="#5046e5" />
            </span>
          </div>
        );
   },
    },
  ];

  return (
    <>
    
        <>
          <Container fluid className="my-4">
            <Row>
              <Col className="">
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING="Notification"
                  BUTTON_NAME="Add Notification"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />
            <Row className="d-flex flex-column align-items-center justift-content-center">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
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
          {/* <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={delTimeSheetData}
            DESCRIPTION="Confirm to Delete this Scheme"
            DELETETITLE="Schemes"
          /> */}
        </>
      
      </>
  );
};

export default Notification;
