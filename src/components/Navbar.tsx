import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar main-navbar ">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div className="d-flex" role="search">
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
