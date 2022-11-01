import React from "react";
import "./landing.scss";
import Navbar from "../../components/Navbar";
import section1 from "../../assets/img/boybooks.jpg";
import section2 from "../../assets/img/boyssmartphone.jpg";
export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid m-0 p-0">
        <section className="main-section  row m-0">
          <section className="first-child-section-one col-7 d-flex flex-column justify-content-center align-items-center">
            <div className="section-body p-5">
              <h2>Nombre App</h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn btn-detail">un boton</button>
            </div>
          </section>
          <section className="second-child-section-one col-5 p-5">
            <img className="img-fluid" src={section1} alt="" />
          </section>
        </section>
        <section className="main-section  row m-0">
          <section className="first-child-section-two  col-5 p-5">
            <img className="img-fluid" src={section2} alt="" />
          </section>
          <section className="second-child-section-two col-7 d-flex flex-column justify-content-center align-items-center p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </section>
        <section className="main-section bg-success row m-0">
          <section className="first-child-section-three bg-info col-4">
            child section 1
          </section>
          <section className="second-child-section-three col-4">
            el child dos
          </section>
          <section className="third-child-section-three col-4">
            el child tres
          </section>
        </section>
        <footer className="main-footer row m-0">
          <section className="first-section-footer bg-secondary col-3">
            section 1
          </section>
          <section className="second-section-footer bg-success col-3">
            section 2
          </section>
          <section className="third-section-footer bg-success col-3">
            section 3
          </section>
          <section className="fourth-section-footer bg-success col-3">
            section 4
          </section>
        </footer>
      </div>
    </>
  );
}
