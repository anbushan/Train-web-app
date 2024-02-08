import React, { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetIssueQuery, useDeleteIssueMutation } from "../../redux/features/api/IssueApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";

const Issue = () => {
 
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteIssueApi] = useDeleteIssueMutation();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getIssueData, isLoading } = useGetIssueQuery(currentPage);

  useEffect(() => {
    if (getIssueData && getIssueData.data) {
      setData(getIssueData.data);
      setTotalPages(getIssueData.pagination.totalPages);
      setCurrentPage(getIssueData.pagination.currentPage);
    }
  }, [getIssueData, currentPage]);

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteIssue = async () => {
    try {
      const response = await deleteIssueApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response.error.originalStatus === 200) {
        toast(response.error.data);
      } else {
        toast.error(response.error.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  };

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Image",
      accessor: "image",
    },
    {
      Header: "Comments",
      accessor: "comments",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Admin Comments",
      accessor: "adminComments",
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
            <Button variant="danger" className="m-1" onClick={() => deleteHandleShow(rowIdx)}>
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row>
            <BasicHeader HEADING="Issues" />
          </Row>
          <hr />
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
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteIssue}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure want to delete this Issue"
        DELETETITLE="Issue"
      />
    </>
  );
};

export default Issue;
