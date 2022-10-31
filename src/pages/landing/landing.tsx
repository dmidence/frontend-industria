import React from "react";
import "./landing.scss";
import Navbar from "../../components/Navbar";
export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid m-0 p-0">
        <section className="main-section bg-secondary row m-0">
          <section className="first-child-section-one bg-info col-6">
            child section 1
          </section>
          <section className="second-child-section-one col-6">
            el child dos
          </section>
        </section>
        <section className="main-section bg-warning row m-0">
          <section className="first-child-section-two bg-info col-6">
            child section 1
          </section>
          <section className="second-child-section-two col-6">
            el child dos
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
