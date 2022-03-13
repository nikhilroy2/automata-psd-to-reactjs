import React from "react";
import './Header.css';
function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require("../../Static/img/logo.png")} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KEY FEATURES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  TOKENOMIC
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  ROAD MAP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
