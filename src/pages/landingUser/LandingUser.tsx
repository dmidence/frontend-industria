import React from "react";
import Navbar from "../../components/Navbar";
import AdminFooter from "../../components/Footer/AdminFooter";
import logoBig from "../../assets/img/logo3.png";

export default function LandingUser() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid m-0 p-0 margin-landing  ">
        <main className="row  w-100 m-0 p-0  landing-user">
          <div className=" landing-opacitybg d-flex flex-column justify-content-center align-items-center">
            <h1 className=" mb-5">Bienvenido</h1>
            <img src={logoBig} alt="" className="customl2img" />
            <p className="w-50">
              {/* AQUI CARLOS */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              dolores quasi repudiandae enim porro quos obcaecati adipisci
              asperiores voluptatum mollitia quisquam ex tempore consequatur
              voluptatem delectus error ea impedit ad.
              {/* HASTA AQUI CARLOS */}
            </p>
            <button className=" btn btn-info  text-white">Inicia Sesión</button>
          </div>
        </main>
        <AdminFooter></AdminFooter>
      </div>
    </>
  );
}
