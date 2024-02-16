import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from ".././../../components/BasicTable";
import Header from ".././../../components/Header";
import Loader from ".././../../pages/loginForms/loader/Loader";
import { useGetGroupQuery, useDeleteGroupMutation } from ".././../../redux/features/api/GroupApi";
import { toast } from "react-toastify";
import DeleteModel from ".././../../components/DeleteModel";
import { IoIosSend } from "react-icons/io";

const Generalgroup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: groupData, isLoading } = useGetGroupQuery(currentPage);
  const [deletegroupApi] = useDeleteGroupMutation();

  useEffect(() => {
    if (groupData && groupData.data) {
      setData(groupData.data);
      setTotalPages(groupData.totalPages);
      setCurrentPage(currentPage);
    }
  }, [groupData, currentPage]);

  const handleNavigateAddForm = () => navigate("");

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
            <Button variant="primary" className="ms-2" >
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
          <Container fluid className="my-4">
            <Row>
              <Col>
                <Header
                  ONCLICK={handleNavigateAddForm}
                  HEADING=" Group"
                  BUTTON_NAME="Group"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Generalgroup;
