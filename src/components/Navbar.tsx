import React from "react";
import logo from "../assets/img/logo3.png";
export default function Navbar() {
  return (
    <nav className="navbar main-navbar bg-back ">
      <div className="container-fluid w-75">
        <a className="navbar-brand">
          <img className="img-fluid img-brand" src={logo} alt="" />

          <span className=" text-white">&nbsp; Crescendus</span>
        </a>
        <div className="d-flex" role="search">
          <button
            className="btn text-white cursor-pointer pointer "
            type="submit"
            onClick={() =>
              (window.location.href = import.meta.env.VITE_API_LOGIN)
            }
          >
            <strong className="logButton">
              <i className="fa-solid fa-right-to-bracket"></i> &nbsp;Iniciar
              Sesion
            </strong>
          </button>
        </div>
      </div>
    </nav>
  );
}
