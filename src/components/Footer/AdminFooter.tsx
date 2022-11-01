import React from 'react'

export default function AdminFooter() {
  return <nav className="navbar navbar-expand-lg navbar-light bg-dark text-secondary pe-1" style={{height:"8vh"}}>
  {/* <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarTogglerDemo01"
    aria-controls="navbarTogglerDemo01"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div
    className=" navbar-collapse"
    id="navbarTogglerDemo01"
  >
    <div className="d-flex w-100 justify-content-center align-items-center p-2">
    @NombreApp 2022
    </div>
  </div>
</nav>
}
