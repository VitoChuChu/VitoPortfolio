import React from "react";
import hireme from "./Hireme.png";

const Resume = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-lg-8 col-md-11 col-12">
          <div className="row">
            <div className="name">
              <h2>竺家嫻 Vito Chu</h2>
              <ul className="ul fs-5">
                <li>Phone : (+886) 988-850896</li>
                <li>Email : vitochu1220@gmail.com</li>
                <li>Front End Engineer</li>
              </ul>
            </div>
            <div className="coreTech row">
              <div className="FET col-lg-4 col-md-4 col-12">
                <h3>Front End Tech</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>API fetch</li>
                  <li>SCSS</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>RWD design</li>
                </ul>
              </div>
              <div className="BET col-lg-4 col-md-4 col-12">
                <h3>Back End Tech</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Node.js</li>
                  <li>Restful API</li>
                </ul>
              </div>
              <div className="other col-lg-4 col-md-4 col-12">
                <h3>Other Tech</h3>
                <ul>
                  <li>Figma</li>
                  <li>Git/Github</li>
                  <li>Postman</li>
                  <li>Firebase</li>
                  <li>NPM</li>
                </ul>
              </div>
            </div>
            <div className="eduction">
              <h3>Education</h3>
              <ul>
                <li>
                  Udemy -- The Complete Web developer in 2022 : Zero to Mastery
                  -- 2022
                </li>
                <li>
                  Udemy -- 2022網頁開發全攻略(HTML, CSS, JavaScript, React, SQL,
                  Node, more) -- 2022
                </li>
                <li>
                  Tunghai University (THU) -- Statistic -- Bachelor -- 2010 ~
                  2014
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block animate__animated animate__fadeIn center">
          <img className="img-fluid rounded" src={hireme} alt="Hireme" />
        </div>
      </div>
    </div>
  );
};

export default Resume;

{
  /* <div className="col-lg-8 sHTML ccc rounded my-2">
            <h2>HTML</h2>
          </div>
          <div className="col-lg-8 sCSS ccc rounded my-2">
            <h2>CSS</h2>
          </div>
          <div className="col-lg-8 sJS ccc rounded my-2">
            <h2>JavaScript</h2>
          </div>
          <div className="col-lg-8 sAPI ccc rounded my-2">
            <h2>Restful API</h2>
          </div>
          <div className="col-lg-8 sReact ccc rounded my-2">
            <h2>React</h2>
          </div>
          <div className="col-lg-8 sBootstrap ccc rounded my-2">
            <h2>Bootstrap</h2>
          </div>
          <div className="col-lg-8 sSCSS ccc rounded my-2">
            <h2>SCSS</h2>
          </div> */
}
