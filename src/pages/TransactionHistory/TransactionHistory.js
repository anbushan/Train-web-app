import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/TablePaginationComponent";
import Loader from "../loginForms/loader/Loader";
import { useGetTransactionhistoryQuery,useDeleteTransactionhistoryMutation } from "../../redux/features/api/TransactionHistoryApi";
import { toast } from "react-toastify";
import DeleteModel from "../../components/DeleteModel";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { BsSearch, BsX } from "react-icons/bs";


const Transactionhistory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const [deleteShow, setDeleteShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState(""); 
  const [deleteTransactionhistoryApi] = useDeleteTransactionhistoryMutation();
  const { data: getTransactionhistoryData, isLoading ,refetch} = useGetTransactionhistoryQuery({ page: currentPage, search: searchTerm });

  useEffect(() => {
    if (getTransactionhistoryData && getTransactionhistoryData.data) {
      setData(getTransactionhistoryData.data);
      setTotalPages(getTransactionhistoryData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(getTransactionhistoryData.pagination.itemsPerPage);
    }
  }, [getTransactionhistoryData, currentPage]);

  const handleNavigateAddForm = () => navigate("/admin/add-transaction");

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
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const Transactionhistory = async () => {
    try {
      const response = await deleteTransactionhistoryApi(idToDelete);
    
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        setDeleteShow(false);
      setIdToDelete("");
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
      Header: "User",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi ID",
      accessor: "upiId",
    },
    {
      Header: "Mode Of Payment",
      accessor: "modeOfPayment",
    },
    {
      Header: " Amount",
      accessor: "amount",
    },
    {
      Header: "Transaction Id",
      accessor: "transactionId",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: (props) => {
        const imageUrl = props.value; 
        return <img src={imageUrl} alt="img" style={{ maxWidth: '50px', maxHeight: '50px' }} />;
      },
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
        <Container fluid className="my-4">
          <Row>
          <Col className="d-flex flex-row justify-content-between mt-1">
                <h4 className="fw-bold "> Transaction History</h4>
                <div>
                  <Button
                    style={{ backgroundColor: "#db6300", border: "none" }}
                    className="p-2 m-1"
                    onClick={handleNavigateAddForm}
                  >
                    <FaPlus size={20} /><span className="d-none d-md-inline"> Add Transaction</span>
                  </Button>
                </div>
              </Col>
          </Row>
          <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2" />
          <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
            <Col className="my-4 mx-2" xxl={3} xl={3} lg={3} sm={6} md={6}>
              <div className="input-group">
                <span className="input-group-text">
                  <BsSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search history..."
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
          <DeleteModel
        YES={Transactionhistory}
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION= "Are you sure you want to delete this Transaction"
        DELETETITLE="Transaction History"
      />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Transactionhistory;
