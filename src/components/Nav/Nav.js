import React from "react";
import { Link } from "react-router-dom";
import cake from "./cake.png";
import git from "./git.png";
import link from "./link.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navBG fs-3 p-2 shadow-lg">
      <div className="container">
        <a
          class="navbar-brand"
          href="https://www.cakeresume.com/me/VitoChu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={cake} alt="Cakeresume" width="55" />
        </a>
        <a
          class="navbar-brand"
          href="https://github.com/VitoChuChu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={git} alt="Github" width="55" />
        </a>
        <a
          class="navbar-brand"
          href="www.linkedin.com/in/vito-chu-a82486246"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={link} alt="Linkedin" width="55" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto pe-5">
            <li className="nav-item px-2 zoom">
              <Link className="nav-link active " aria-current="page" to="/">
                About
              </Link>
            </li>
            <li className="nav-item px-2 zoom">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Projects"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item px-2 zoom">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Resume"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
