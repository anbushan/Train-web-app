import React, { useEffect, useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/BasicTable";
import BasicHeader from "../../components/BasicHeader";
import Loader from "../loginForms/loader/Loader";
import { useGetWithdrawhistoryQuery } from "../../redux/features/api/WithdrawHistoryApi";

const Withdrawhistory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const { data: getWithdrawhistoryData, isLoading } = useGetWithdrawhistoryQuery(
    currentPage
  );

  useEffect(() => {
    if (getWithdrawhistoryData && getWithdrawhistoryData.data) {
      setData(getWithdrawhistoryData.data);
      setTotalPages(getWithdrawhistoryData.pagination.totalPages);
      setCurrentPage(currentPage);
      setItemsPerPage(getWithdrawhistoryData.pagination.itemsPerPage);
    }
  }, [getWithdrawhistoryData, currentPage]);

  const handleNavigateAddForm = () => navigate("/admin/Add-User");

  const COLUMNS = [
    {
      Header: "ID",
      accessor: (d, i) => i + 1,
      minWidth: 10,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Upi ID",
      accessor: "upiId",
    },
    {
      Header: "Withdraw Amount",
      accessor: "withdrawAmount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Created At",
      accessor: "createdAt",
    },
    {
      Header: "Updated At",
      accessor: "updatedAt",
    },
  ];

  return (
    <>
      {!isLoading ? (
        <Container fluid className="my-4">
          <Row>
            <Col>
              <BasicHeader
                ONCLICK={handleNavigateAddForm}
                HEADING="Withdraw History"
                headingClassName="text-center text-md-start m-md-4 m-xl-2"
              />
            </Col>
          </Row>
          <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2" />
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Withdrawhistory;
