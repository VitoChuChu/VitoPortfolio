import React from "react";
import { v4 as uuidv4 } from "uuid";
import Tilt from "react-parallax-tilt";
import Vmovie from "./Vmovie.png";
import SmartBrains from "./SmartBrain.png";
import BackgroundGenerator from "./BackgroundGenerator.png";

const Projects = () => {
  const VmovieTool = [
    "React",
    "Bootstrap 5",
    "Fetch",
    "Swiper",
    "SCSS",
    "Figma",
    "Github",
    "Firebase firestore",
    "Firebase authentication",
    "TMDb (data resource)",
  ];
  const SmartBrainTool = [
    "React",
    "Bootstrap 5",
    "Fetch",
    "PostgreSQL",
    "DBeaver",
    "Github",
    "Heroku",
    "Clarifai (AI resource)",
  ];

  const BackgroundTool = ["HTML", "SCSS", "JavaScript"];
  const VmovieToolList = VmovieTool.map((tool) => {
    return (
      <li className="list-inline-item m-1" key={uuidv4()}>
        <button type="button" className="btnStyle">
          {tool}
        </button>
      </li>
    );
  });
  const SmartBrainToolList = SmartBrainTool.map((tool) => {
    return (
      <li className="list-inline-item m-1" key={uuidv4()}>
        <button type="button" className="btnStyle">
          {tool}
        </button>
      </li>
    );
  });
  const BackgroundList = BackgroundTool.map((tool) => {
    return (
      <li className="list-inline-item m-1" key={uuidv4()}>
        <button type="button" className="btnStyle">
          {tool}
        </button>
      </li>
    );
  });

  return (
    <div className="container-fluid ccc">
      <h1 className="mt-3">PROJECTS</h1>
      <div className="row mt-3 ccr">
        <div className="col-lg-5 col-md-10 m-1">
          <Tilt tiltAngleXInitial={0} tiltAngleYInitial={-10}>
            <img
              className="img-fluid rounded shadow animate__animated animate__fadeInLeft"
              src={Vmovie}
              alt="Vmovie"
            />
          </Tilt>
        </div>
        <div className="col-lg-6 col-md-12 animate__animated animate__fadeInRight">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <h2>Vmovie</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <p>
                This website has collected the movies information from The Movie
                DataBase. Including the latest movies or hotest movies that
                waiting for you! Even you can find what is the most people loved
                movie in the movie history!! The classic one!!!
              </p>
            </div>
            <div className="col-lg-12 col-md-12">
              <ul className="list-inline m-0 ccr">{VmovieToolList}</ul>
            </div>
            <div className="col-lg-12 col-md-12 ccr">
              <a
                className="btnLinkStyle col-lg-2"
                href="https://vitochuchu.github.io/Vmovie/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>DEMO</button>
              </a>
              <a
                className="btnLinkStyle col-lg-2"
                href="https://github.com/VitoChuChu/Vmovie"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 ccr">
        <div className="col-lg-5 col-md-10">
          <Tilt tiltAngleXInitial={0} tiltAngleYInitial={-10}>
            <img
              className="img-fluid rounded shadow animate__animated animate__fadeInLeft"
              src={SmartBrains}
              alt="SmartBrains"
            />
          </Tilt>
        </div>
        <div className="col-lg-6 col-md-12 m-2 animate__animated animate__fadeInRight">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <h2>SmartBrains</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <p>
                This website has the function to detect if there is any face
                exist on the image you want to know with AI. Also, you can
                register an account so that you can record how many faces you
                checked.
              </p>
            </div>
            <div className="col-lg-12 col-md-12">
              <ul className="list-inline m-0 ccr">{SmartBrainToolList}</ul>
            </div>
            <div className="col-lg-12 col-md-12 ccr">
              <a
                className="btnLinkStyle col-lg-2"
                href="https://vitochuchu.github.io/Smart-Brain-Face-Defection/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>DEMO</button>
              </a>
              <a
                className="btnLinkStyle col-lg-2"
                href="https://github.com/VitoChuChu/Smart-Brain-Face-Defection"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-3 ccr">
        <div className="col-lg-5 col-md-10">
          <Tilt tiltAngleXInitial={0} tiltAngleYInitial={-10}>
            <img
              className="img-fluid rounded shadow animate__animated animate__fadeInLeft"
              src={BackgroundGenerator}
              alt="BackgroundGenerator"
            />
          </Tilt>
        </div>
        <div className="col-lg-6 col-md-12 m-2 animate__animated animate__fadeInRight">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <h2>Background Generator</h2>
            </div>
            <div className="col-lg-12 col-md-12">
              <p>
                This website is a small tool that can help you to feel the color
                looks like. And help you to make your web more beautiful!! Also
                we have random function that might make a touch fire to your
                mind maybe!
              </p>
            </div>
            <div className="col-lg-12 col-md-12">
              <ul className="list-inline m-0 ccr">{BackgroundList}</ul>
            </div>
            <div className="col-lg-12 col-md-12 ccr">
              <a
                className="btnLinkStyle col-lg-2"
                href="https://vitochuchu.github.io/Background-generator/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>DEMO</button>
              </a>
              <a
                className="btnLinkStyle col-lg-2"
                href="https://github.com/VitoChuChu/Background-generator"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button>CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
