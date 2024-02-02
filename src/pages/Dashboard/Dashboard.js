import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/images/user.png";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      colors: ["#db6300"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 6, 12, 18, 24],
      },
    ],
  });

  return (
    <Container>
      <Row className="mt-4 mx-2">
        <Col className="d-flex align-items-start shadow rounded p-3">
          <h4>Dashboard</h4>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={user} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-6 fw-bolder">Total</div>
              <div className="fs-14 fw-bolder">$ 23,548</div>
              <div>347 bottles bottles</div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={user} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-6 fw-bolder">Users Count</div>
              <div className="fs-14 fw-bolder">$ 23,548</div>
              <div>347 bottles bottles</div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="mb-3">
          <div className="d-flex flex-row shadow rounded p-3">
            <div className="d-flex flex-column">
              <img src={user} width={60} className="rounded-circle p-2" alt="..." />
            </div>
            <div className="text-end pt-2 ms-2">
              <div className="fs-6 fw-bolder">Feedback Count</div>
              <div className="fs-14 fw-bolder">$ 23,548</div>
              <div>347 bottles bottles</div>
            </div>
          </div>
        </Col>

        <Col sm={12} lg={8} className="mt-3">
          <Chart options={state.options} series={state.series} type="area" width="80%" />
        </Col>
      </Row>

      <Row className="d-flex flex-row justify-content-center align-items-center mb-3">
        <Col sm={12} md={6} lg={6} className="mb-3">
          <div className="d-flex flex-column shadow rounded p-5 m-2">
            <Row className="mt-1 mx-4 fs-8 fw-bolder">Top Performing</Row>
            <Row className="">
              <Col className="mt-3">1. international wines</Col>
              <Col className="mt-3">139 orders</Col>
            </Row>
            <Row>
              <Col className="mt-3">2. Santhosh_distributor</Col>
              <Col className="mt-3">4 orders</Col>
            </Row>
            <Row>
              <Col className="mt-3">3. Naveen ullah </Col>
              <Col className="mt-3">10 orders</Col>
            </Row>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6} className="mb-3">
          <div className="d-flex flex-column shadow rounded p-5 m-2">
            <Row className="mt-1 mx-4 fs-8 fw-bolder">Top Performing Retailers</Row>
            <Row className="">
              <Col className="mt-3">1. Retailer Dev Env</Col>
              <Col className="mt-3">44 orders</Col>
            </Row>
            <Row>
              <Col className="mt-3">2. Shopify test site</Col>
              <Col className="mt-3">23 orders</Col>
            </Row>
            <Row>
              <Col className="mt-3">3. Ind Dev Wines</Col>
              <Col className="mt-3">7 orders</Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
