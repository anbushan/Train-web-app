import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../../components/TablePaginationComponent";
import Loader from "../../loginForms/loader/Loader";
import { useGetGroupNotificationQuery, useDeleteGroupNotificationMutation } from "../../../redux/features/api/GroupNotificationApi";
import { toast } from "react-toastify";
import DeleteModel from "../../../components/DeleteModel";
import { MdOutlineStreetview } from "react-icons/md";
import { BsSearch, BsX } from "react-icons/bs";



const GroupNotification = () => {
  const navigate = useNavigate();
 
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const { data: GroupNotificationData, isLoading ,refetch} = useGetGroupNotificationQuery({ page: currentPage, search: searchTerm });
  const [deleteGroupNotificationApi] = useDeleteGroupNotificationMutation();

 

  useEffect(() => {
    if (GroupNotificationData && GroupNotificationData.data) {
      setData(GroupNotificationData.data);
      setTotalPages(GroupNotificationData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(GroupNotificationData.pagination.itemsPerPage);
    }
  }, [GroupNotificationData, currentPage]);

  const handleNavigateAddForm = () => navigate("/admin/group");

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    refetch({ page: currentPage, search: searchInput });
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

 
  const COLUMNS = [
    {
      Header: "ID",
      accessor:"s_no",
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
      Header: "Phone Numbers",
      accessor: "phoneNumbers",
      width: "auto",
      minWidth: 100,
      Cell: ({ row }) => {
        return (
          <ul>
            {row.original.phoneNumbers.map((phoneNumber, index) => (
              <li key={index}>{phoneNumber}</li>
            ))}
          </ul>
        );
      },
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
                <h4 className="fw-bold "> Group Notification</h4>
                <div>
                  <Button
                    style={{ backgroundColor: "#db6300", border: "none" }}
                    className="p-2 m-1"
                    onClick={handleNavigateAddForm}
                  >
                    <MdOutlineStreetview size={20} /><span className="d-none d-md-inline"> View Group</span>
                  </Button>
                </div>
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2 " />

            <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search notification..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {searchInput && (
                  <span className="input-group-text" onClick={handleClear}>
                    <BsX />
                  </span>
                )}
              </div>
            </Col>
            <Col  className="d-flex flex-column text-center my-4"
            xxl={2}
            xl={2}
            lg={2}
            sm={3}
            md={3}>
              <Button style={{ backgroundColor: "#db6300", border: "none" }} onClick={handleSearch} className="">Search</Button>
            </Col>
          </Row>
            <Row className="justify-content-center">
              <Col xs={12} lg={12} xl={12} xxl={12} md={12} className="table-responsive">
                <BasicTable
                  COLUMNS={COLUMNS}
                  MOCK_DATA={data}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                />
              </Col>
            </Row>
          </Container>
          <DeleteModel
            DELETESTATE={deleteShow}
            ONCLICK={deleteHandleClose}
            YES={deleteGroupNotification}
            DESCRIPTION="Confirm to Delete this Group Notification"
            DELETETITLE="GroupNotification"
          />
       
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GroupNotification;
