import React from "react";
import logo from "../../assets/img/logo3.png";
export default function FooterLanding() {
  return (
    <footer className="w-100 bg-back main-footer m-0  bg-footer row text-white p-3">
      <div className="col-3 footer-logo">
        <img className="img-fluid img-footer" src={logo} alt="" />

        <p className="text-center fs-3">Napp</p>
      </div>
      <div className="col-3 footer-section pt-3 ">
        <i className="fa-solid fa-link"> seccion 3</i>
        <br />
        <p className=" fs-6">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          doloremque perspiciatis quidem! Nam magnam nulla sint voluptatum
          exercitationem culpa voluptas numquam fugiat eius consequuntur, fuga
          doloribus explicabo blanditiis eaque voluptatem.{" "}
        </p>
        <p className=" fs-6"></p>
      </div>
      <div className="col-3 footer-section pt-3 ">
        <i className="fa-solid fa-link"> Enlaces</i>
        <br />
        <p className=" fs-6">Iniciar Sesión</p>
        <p className=" fs-6">Planes</p>
      </div>

      <div className="col-3 footer-section pt-3 ">
        <i className="fa-solid fa-phone"> Contactanos</i>
        <br />
        <p className="fs-4 ">
          <i className="fa-brands fa-facebook p-2"></i>

          <i className="fa-brands fa-twitter p-2"></i>
          <i className="fa-brands fa-github p-2"></i>
        </p>
        <p className=" fs-6">+504 2222-2220</p>
        <p className=" fs-6">correosoporte@unah.hn</p>
      </div>
    </footer>
  );
}
