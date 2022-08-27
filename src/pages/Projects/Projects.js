import React from "react";
import SmartBrains from "./SmartBrains.png";
import RobotFriends from "./RobotFriends.png";
import BackgroundGenerator from "./BackgroundGenerator.png";
import Gitt from "./Gitt.png";
import Live from "./Live.png";

const Projects = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-dark"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active container-fluid"
            data-bs-interval="5000"
          >
            <div className="row cc">
              <img
                src={SmartBrains}
                class="d-block w-50"
                alt="..."
                className="col-lg-6"
              />
              <div className="info col-lg-4 text-center">
                <div className="row">
                  <div className="info col-lg-12">
                    <h4 className="">Project :</h4>
                    <p>Smart Brains</p>
                  </div>
                  <div className="link col-lg-12">
                    <a
                      href="https://vitochuchu.github.io/Smart-Brain/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Live} class="d-block" alt="Live" className="" />
                    </a>
                    <a
                      href="https://github.com/VitoChuChu/Smart-Brain"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Gitt} class="d-block" alt="Code" className="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item container-fluid" data-bs-interval="5000">
            <div className="row cc">
              <img
                src={RobotFriends}
                class="d-block w-50"
                alt="..."
                className="col-lg-6"
              />
              <div className="info col-lg-4 text-center">
                <div className="row">
                  <div className="info col-lg-12">
                    <h4 className="">Project :</h4>
                    <p>Robot Friends</p>
                  </div>
                  <div className="link col-lg-12">
                    <a
                      href="https://vitochuchu.github.io/Robot-Friends/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Live} class="d-block" alt="Live" className="" />
                    </a>
                    <a
                      href="https://github.com/VitoChuChu/Robot-Friends"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Gitt} class="d-block" alt="Code" className="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item container-fluid" data-bs-interval="5000">
            <div className="row cc">
              <img
                src={BackgroundGenerator}
                class="d-block w-50"
                alt="..."
                className="col-lg-6"
              />
              <div className="info col-lg-4 text-center">
                <div className="row">
                  <div className="info col-lg-12">
                    <h4 className="">Project :</h4>
                    <p>Background Generator</p>
                  </div>
                  <div className="link col-lg-12">
                    <a
                      href="https://vitochuchu.github.io/Background-generator/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Live} class="d-block" alt="Live" className="" />
                    </a>
                    <a
                      href="https://github.com/VitoChuChu/Background-generator"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={Gitt} class="d-block" alt="Code" className="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
