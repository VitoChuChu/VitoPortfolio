import React from "react";
import Me from "./Me.jpg";
// import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="whole row h-100 justify-content-center">
        <div className="upper col-lg-11 col-md-10 col-11">
          <div className="row ">
            <div className="upperLeft col-lg-3 col-md-5 col-11">
              <img src={Me} alt="Vito" className="w-100" />
            </div>
            <div className="upperRight col-lg-8 col-md-7 col-11">
              <div className="row">
                <div className="h-50 col-lg-12 col-md-12 col-12 p-5 d-flex flex-column justify-content-center align-items-start">
                  <h1 className="fs-1">竺家嫻 Vito Chu</h1>
                  <h1 className="fs-1">前端工程師</h1>
                </div>
                <div className="col-lg-12 col-md-12 col-11 w-100 p-5 d-flex flex-column justify-content-center align-items-end">
                  <h3 className="fs-3">#細心 #注重細節 #渴望新知 #勤奮學習</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower col-lg-12 col-md-12 col-11 p-3 d-flex flex-column justify-content-start text-center">
          <h4 className="fs-5">
            Tiny grass, your steps are small, but you possess the earth under
            your tread.
          </h4>
          <h4 className="fs-5">
            It's a beauty journey because I finally found my interest in job.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
