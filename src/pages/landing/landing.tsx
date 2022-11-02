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
        <main className="main-section main-bg  row m-0">
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
              <button className="btn btn-detail">Lorem</button>
            </div>
          </section>
          <section className="second-child-section-one col-5 p-5 ">
            {/* <div className="overflow-hidden"> */}
            <img
              className="img-fluid scale-hover rounded"
              src={section1}
              alt=""
            />
            {/* </div> */}
          </section>

          <section className="first-child-section-two  col-5 p-5">
            {/* <div className="overflow-hidden"> */}
            <img
              className="img-fluid scale-hover2  rounded"
              src={section2}
              alt=""
            />
            {/* </div> */}
          </section>
          <section className="second-child-section-two col-7 d-flex flex-column justify-content-center align-items-center p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
        </main>
        <section className="main-section father-section bg-footer row m-0 pb-5">
          <svg
            className="child-section top-wave p-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,101.3C560,117,640,139,720,128C800,117,880,75,960,80C1040,85,1120,139,1200,160C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <section className="first-child-section-three wave-section col-4">
            child section 1
          </section>
          <section className="second-child-section-three wave-section col-4">
            el child dos
          </section>
          <section className="third-child-section-three wave-section col-4">
            el child tres
          </section>
        </section>
        <footer className="main-footer bg-footer row m-0">
          <section className="first-section-footer  col-3">section 1</section>
          <section className="second-section-footer  col-3">section 2</section>
          <section className="third-section-footer  col-3">section 3</section>
          <section className="fourth-section-footer  col-3">section 4</section>
          <section className="fifth-section-footer">@Nombre App 2022</section>
        </footer>
      </div>
    </>
  );
}
