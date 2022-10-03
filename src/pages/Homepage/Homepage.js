import React from "react";
import Me from "./Me.jpg";

const Homepage = () => {
  return (
    <div className="container-fluid">
      <div className="row ccr mt-3 animate__animated animate__fadeIn">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row ccr">
            <div className="col-lg-3 col-md-5 col-10 p-2 mb-2">
              <img src={Me} alt="Vito" className="img-fluid rounded" />
            </div>
            <div className="col-lg-8 col-md-7 col-12 ccr">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 ps-4 d-flex flex-column justify-content-center align-items-start">
                  <h1 className="fs-1">竺家嫻 Vito Chu</h1>
                  <h1 className="fs-1">前端工程師</h1>
                  <p className="fs-5 m-0">
                    Tiny grass, your steps are small, but you possess the earth
                    under your tread.
                  </p>
                  <p className="fs-5 mb-2">
                    It's a beauty journey because I finally found my interest in
                    job.
                  </p>
                </div>
                <div
                  style={{ height: "5vh" }}
                  className="d-none d-md-block"
                ></div>
                <div className="col-lg-12 col-md-12 col-12 ps-4 pt-4 d-flex flex-column justify-content-start align-items-start">
                  <p className="fs-5 m-0">
                    統計系畢業，電子製造業打滾七年，依靠線上資源Udemy自學轉職前端工程師，具備HTML、CSS、JavaScript、React、Bootstrap的使用經驗，擁有獨立完成網站作品的能力。
                  </p>
                  <p className="fs-5 m-0 mb-3">
                    行動力強，擅長尋找答案，具有獨立解決問題能力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
