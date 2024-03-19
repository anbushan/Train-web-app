import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alternate from"../../assets/images/alternate.jpg";
import coachposition from"../../assets/images/coach position.jpg";
import lanuguage  from"../../assets/images/language.jpg";
import livetrain  from"../../assets/images/live train.jpg";
import local  from"../../assets/images/local.jpg";
import metro  from"../../assets/images/metro.jpg";
import pnr  from"../../assets/images/pnr.jpg";
import refer  from"../../assets/images/refer.jpg";
import withdraw  from"../../assets/images/withdraw.jpg";







const Choose = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <main
      className="site-content"
      style={{ transition: "all 0.4s" }}
    >
      <section className="container pt-5">
        <div className="row align-items-center">
          {/* For mobile and tablet view, take up full width */}
          <div className="col-md-12 mb-4 col-lg-8 mb-md-0">
            <Slider {...settings}>
              <div className="widget-box p-3">
                <img
                  src={alternate}
                  className="img-fluid rounded shadow" 
                  alt="TrainsOnWheel screenshot1"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={coachposition}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot2"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={lanuguage}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot3"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={livetrain}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot4"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={local}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot5"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={metro}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot6"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={pnr}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot7"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={refer}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot8"
                />
              </div>
              <div className="widget-box p-3">
                <img
                  src={withdraw}
                  className="img-fluid rounded shadow"
                  alt="TrainsOnWheel screenshot9"
                />
              </div>
            </Slider>
          </div>
          {/* For desktop view, split width into 8 and 4 columns */}
          <div className="col-md-12  col-lg-4 order-md-2 text-center">
            <h2 className="mt-md-4" style={{ color: "#212529", fontFamily: "Poppins, sans-serif",fontSize:"28px" }}>
              Get information related to Local & Metro Trains, BEST on your
              smartphone
            </h2>
            {/* <a
              href="javascript:void(0)"
              className="btn btn-cta mt-3"
              style={{
                background: "#3b64b8",
                border: "0",
                color: "#fff",
                borderRadius: "3px",
                fontWeight: "500",
                padding: "15px 40px",
                boxShadow: "0 6px 10px 0 rgba(0,0,0,0.1)",
                textTransform: "uppercase",
                fontSize: "13px",
                letterSpacing: "1px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              View All Features
            </a> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Choose;