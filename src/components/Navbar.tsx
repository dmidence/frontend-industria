import React from "react";
import logo from "../assets/img/logo3.png";
export default function Navbar() {
  return (
    <nav className="navbar main-navbar  ">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img className="img-fluid img-brand" src={logo} alt="" />
          <span className="text-white">NAPP</span>
        </a>
        <div className="d-flex" role="search">
          <button className="btn text-white " type="submit">
            <strong> Iniciar Sesion</strong>
          </button>
        </div>
      </div>
    </nav>
  );
}
