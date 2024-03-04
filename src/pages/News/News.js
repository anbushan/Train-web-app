import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MdDelete, MdRefresh } from "react-icons/md";
import axios from "axios";
import Header from "../../components/BasicHeader";
import Loader from "../../pages/loginForms/loader/Loader";
import {
  useGetNewsTableQuery,
  useDeleteNewsMutation,
} from "../../redux/features/api/NewsApi";
import { toast } from "react-toastify";
import DeleteModel from "../../components/DeleteModel";
import Tablepagination from "../../components/TablePaginationComponent";

const News = () => {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("");
  const [category, setCategory] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [idToDelete, setIdToDelete] = useState("");
  const [deleteShow, setDeleteShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState();
  const {
    data: newsTableData,
    isLoading: tableLoading,
    refetch,
  } = useGetNewsTableQuery(currentPage);
  const [deleteNewsApi] = useDeleteNewsMutation();
  const [refreshLoading, setRefreshLoading] = useState(false);

  useEffect(() => {
    if (newsTableData && newsTableData.data) {
      setData(newsTableData.data);
      setTotalPages(newsTableData.pagination.totalPages);
      setItemsPerPage(newsTableData.pagination.itemsPerPage);
    }
  }, [newsTableData]);

  const deleteHandleClose = () => setDeleteShow(false);

  const deleteHandleShow = (id) => {
    setIdToDelete(id);
    setDeleteShow(true);
  };

  const deleteNews = async () => {
    try {
      const response = await deleteNewsApi(idToDelete);
      setDeleteShow(false);
      setIdToDelete("");
      if (response?.data) {
        toast.success(response.data.message, { autoClose: 1000 });
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!lang && !category) {
      toast.error("Please select both language and category .", {
        autoClose: 2000,
      });
      return;
    }

    if (!lang) {
      toast.error("Please select a language .", { autoClose: 2000 });
      return;
    }

    if (!category) {
      toast.error("Please select a category .", { autoClose: 2000 });
      return;
    }

    setRefreshLoading(true);
    await refetch();
    setRefreshLoading(false);
    try {
      const response = await axios.get(
        `https://train-info.onrender.com/news/addNewsInDB?category=${category}&lang=${lang}`
      );
      if (response?.data) {
        console.log(lang);
        console.log(category);
        console.log(response);
        toast.success(response?.data?.message, { autoClose: 1000 });
        setLang("");
        setCategory("");
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        setLang("");
        setCategory("");
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
      Header: "Category",
      accessor: "category",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Language",
      accessor: "lang",
      width: "auto",
      minWidth: 100,
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Image",
      accessor: "image",
    },
    {
      Header: "Published At",
      accessor: "publishedAt",
    },
    {
      Header: "ACTIONS",
      accessor: "action",
      fixed: "right",
      Cell: (props) => {
        const rowIdx = props.row.original._id;
        return (
          <div className="d-flex align-items-center justify-content-center flex-row">
            <Button
              variant="danger"
              className="m-1"
              onClick={() => deleteHandleShow(rowIdx)}
            >
              <MdDelete />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {!tableLoading ? (
        <>
          <Container fluid className="my-4">
            <Row>
              <Col>
                <Header
                  HEADING=" News"
                  headingClassName="text-center text-md-start m-md-4 m-xl-2"
                />
              </Col>
            </Row>
            <hr className="bg-primary ml-xxl-n2 ml-xl-n2 ml-lg-n2" />
            <Row className="mb-3">
              <Col>
                <Form>
                  <Row className="mb-4 mt-4">
                    <Col xs={12} md={4} lg={3}>
                      <Form.Group controlId="language">
                        <Form.Label
                          className="text-dark"
                          style={{ fontWeight: "bolder" }}
                        >
                          Languages:
                        </Form.Label>
                        <Form.Select
                          value={lang}
                          onChange={(e) => setLang(e.target.value)}
                          className="mb-2"
                        >
                          <option value="" disabled>
                            Select Languages
                          </option>
                          <option value="ta">Tamil</option>
                          <option value="en">English</option>
                          <option value="te">Telugu</option>
                          <option value="hi">Hindi</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                      <Form.Group controlId="category">
                        <Form.Label
                          className="text-dark"
                          style={{ fontWeight: "bolder" }}
                        >
                          Categories:
                        </Form.Label>
                        <Form.Select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="mb-2"
                        >
                          <option value="" disabled>
                            Select Categories
                          </option>
                          <option value="general">General</option>
                          <option value="world">World</option>
                          <option value="nation">Nation</option>
                          <option value="business">Business</option>
                          <option value="technology">Technology</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="sports">Sports</option>
                          <option value="science">Science</option>
                          <option value="health">Health</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={3} className=" d-flex flex-column ">
                      <Button
                        style={{
                          backgroundColor: "#db6300",
                          border: "none",
                          marginTop: "30px",
                          position: "relative",
                        }}
                        type="button"
                        onClick={handleSubmit}
                        disabled={refreshLoading}
                      >
                        <MdRefresh
                          size={25}
                          style={{
                            marginRight: "0px",
                            animation: refreshLoading
                              ? "spin 1s linear infinite"
                              : "none",
                          }}
                          className="justify-content-center align-items-center "
                        />
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          
            <Row className="justify-content-center">
              <Col
                xs={12}
                lg={12}
                xl={12}
                xxl={12}
                md={12}
                className="table-responsive"
              >
                <Tablepagination
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
            YES={deleteNews}
            DESCRIPTION="Confirm to Delete this News"
            DELETETITLE="News"
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default News;
