import React, { useState, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetFeedbackQuery, useDeleteFeedbackMutation } from "../../redux/features/api/FeedBackApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";

const Feedback = () => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteFeedbackApi] = useDeleteFeedbackMutation();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getFeedbackData, isLoading } = useGetFeedbackQuery(currentPage);

  useEffect(() => {
    if (getFeedbackData && getFeedbackData.data) {
      setData(getFeedbackData.data);
      setTotalPages(getFeedbackData.pagination.totalPages);
      setCurrentPage(currentPage);
    }
  }, [getFeedbackData, currentPage]);

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteFeedback = async () => {
    try {
      const response = await deleteFeedbackApi(idToDelete);
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
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Feedback",
      accessor: "feedback",
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
      Header: "Actions",
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
    <div>
      {!isLoading ? (
        <Container fluid className="mt-3">
          <Row>
            <BasicHeader HEADING="Feedback" />
            <hr className="mt-3" />
          </Row>
          <Row>
            {/* Add filter component here */}
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
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteFeedback}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure you want to delete this Feedback"
        DELETETITLE="Feedback"
      />
    </div>
  );
};

export default Feedback;
