import React from "react";
import "./landing.scss";
import Navbar from "../../components/Navbar";
import FooterLanding from "../../components/FooterLanding/FooterLanding";
import section2 from "../../assets/img/child3.jpg";
import cardimg from "../../assets/img/card1.jpg";
import cardimg2 from "../../assets/img/card2.jpg";
import cardimg3 from "../../assets/img/card3.svg";
export default function Landing() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid m-0 p-0 margin-landing ">
        <main className="w-100 main-bg">
          <div className="opac-bg">
            <div className="row ms-auto me-auto w-75  main-section p-5 pt-2">
              <h1 className="mb-3 w-100 text-center text-detail">Crescendus</h1>
              <section className="col-6 d-flex justify-content-center align-items-center">
                <div className="p-2 text-center">
                  <strong>
                    <h3 className="text-custom"></h3>
                  </strong>
                  <strong>
                    <p className="my-2">
                      Es una herramienta de colaboración y comunicación
                      integrada que facilita la comunicación y colaboración
                      mejoradas entre las personas, fomenta el aprendizaje
                      social y mejora la eficacia del curso.
                    </p>
                  </strong>
                  <button
                    className="btn btn-outline-detail btn-lg  my-4"
                    onClick={() =>
                      (window.location.href = import.meta.env.VITE_API_LOGIN)
                    }
                  >
                    <strong>Ingresa a tu Espacio</strong>
                  </button>
                </div>
              </section>
              <section className="col-6 my-5 d-flex justify-content-center align-items-center">
                <img
                  src={section2}
                  alt=""
                  className="scale-hover2 img-fluid w-75"
                />
              </section>
            </div>
          </div>
        </main>

        <main className="ms-auto me-auto w-75  main-section w-100 p-5 bg-detail">
          <div className="w-100 text-center mt-4">
            <h2 className="text-white"></h2>
            <div className="w-75 m-auto row">
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src={cardimg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Gestión eficiente</h5>
                    <p className="card-text">
                      Permite un control general efectivo y completo de la
                      administración, automatización y comunicación con
                      usuarios, profesores y por supuesto, la gestión del
                      contenido.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src={cardimg2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Enseñanza para todos</h5>
                    <p className="card-text">
                      Facilita la inclusión de todas las personas a la hora de
                      acceder a la formación. La plataforma favorece la
                      inclusión de personas con alguna discapacidad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src={cardimg3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Se beneficia de las ventajas del Cloud Computing.
                    </h5>
                    <p className="card-text">
                      Se puede acceder desde cualquier lugar y sin limitarse a
                      un tipo de dispositivo o sistema operativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterLanding></FooterLanding>
      </div>
    </>
  );
}
