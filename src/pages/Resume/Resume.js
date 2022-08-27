import React from "react";

const Resume = () => {
  return (
    <div className="container-fluid smallFont">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-11 col-12">
          <div className="row">
            <div className="name">
              <h2>竺家嫻 Vito Chu</h2>
              <ul className="ul">
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
                  <li>Restful API</li>
                  <li>SCSS</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="BET col-lg-4 col-md-4 col-12">
                <h3>Back End Tech</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>PdAmin</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="other col-lg-4 col-md-4 col-12">
                <h3>Other Tech</h3>
                <ul>
                  <li>Figma</li>
                  <li>Git/Github</li>
                  <li>NPM</li>
                </ul>
              </div>
            </div>
            <div className="eduction">
              <h3>Eduction</h3>
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
        <div className="col-lg-3 d-flex flex-column text-center d-none d-lg-block">
          <div className="">
            <div className="sHTML cc m-3 sbox">
              <h2>HTML</h2>
            </div>
            <div className="sCSS cc m-3 sbox2">
              <h2>CSS</h2>
            </div>
            <div className="sJS cc m-3 sbox">
              <h2>JavaScript</h2>
            </div>
            <div className="sAPI cc m-3 sbox2">
              <h2>Restful API</h2>
            </div>
            <div className="sReact cc m-3 sbox">
              <h2>React</h2>
            </div>
            <div className="sBootstrap cc m-3 sbox2">
              <h2>Bootstrap</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
