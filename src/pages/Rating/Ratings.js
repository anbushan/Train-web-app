import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import BasicTable from "../../components/TablePaginationComponent";
import BasicHeader from "../../components/BasicHeader";
import DeleteModel from "../../components/DeleteModel";
import { useGetRatingsQuery, useDeleteRatingsMutation } from "../../redux/features/api/RatingsApi";
import { toast } from "react-toastify";
import Loader from "../../pages/loginForms/loader/Loader";
import { BsSearch, BsX } from "react-icons/bs";

const Ratings = () => {
 
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteRatingsApi] = useDeleteRatingsMutation();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const { data: getRatingsData, isLoading ,refetch } = useGetRatingsQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getRatingsData && getRatingsData.data) {
      setData(getRatingsData.data);
      setTotalPages(getRatingsData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(getRatingsData.pagination.itemsPerPage);
    }
  }, [getRatingsData, currentPage]);

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const deleteRatings = async () => {
    try {
      const response = await deleteRatingsApi(idToDelete);
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
      accessor:"s_no",
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Rating",
      accessor: "rating",
    },
    {
        Header: "comments",
        accessor: "comments",
      },
    {
      Header: "Created At",
      accessor: "createdAt",
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
            <BasicHeader HEADING="Ratings" />
          </Row>
          <hr />
          <Row>
          <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search Ratings..."
                  className="form-control"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={handleKeyPress}
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
              <Button style={{ backgroundColor: "#0077B2", border: "none" }} onClick={handleSearch} className="">Search</Button>
            </Col>
          </Row>
            <BasicTable
              COLUMNS={COLUMNS}
              MOCK_DATA={data}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
            />
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
      <DeleteModel
        YES={deleteRatings}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Are you sure want to delete this Ratings"
        DELETETITLE="Ratings"
      />
    </>
  );
};

export default Ratings;
