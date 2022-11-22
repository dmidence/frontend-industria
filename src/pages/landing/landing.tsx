import React from "react";
import "./landing.scss";
import Navbar from "../../components/Navbar";
import FooterLanding from "../../components/FooterLanding/FooterLanding";
import section2 from "../../assets/img/child3.jpg";
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
                    <h3 className="text-custom">
                      {/* AQUI CARLOS */}
                      Facilidad y Practicidad
                    </h3>
                  </strong>
                  <strong>
                    <p className="my-2">
                      {/* AQUI CARLOS */}
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Itaque enim distinctio, accusamus repellendus odit ullam
                      modi voluptatem voluptas dolorum quo voluptate nam nisi in
                      atque vel, cupiditate illo excepturi mollitia!
                    </p>
                  </strong>
                  <button
                    className="btn btn-outline-detail btn-lg  my-4"
                    onClick={() =>
                      (window.location.href = import.meta.env.VITE_API_LOGIN)
                    }
                  >
                    <strong>{/* AQUI CARLOS */}Registrate</strong>
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
            <h2 className="text-white">{/* AQUI TAMBIÉN CARLOS */}Lorem</h2>
            <div className="w-75 m-auto row">
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src="https://th.bing.com/th/id/R.88139a5696007b191d2b0868f3f1b1af?rik=RnBb%2b6Cnw9H3ig&pid=ImgRaw&r=0"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* AQUI CARLOS */}Card title
                    </h5>
                    <p className="card-text">
                      {/* AQUI CARLOS */}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src="https://th.bing.com/th/id/R.88139a5696007b191d2b0868f3f1b1af?rik=RnBb%2b6Cnw9H3ig&pid=ImgRaw&r=0"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* AQUI CARLOS */}Card title
                    </h5>
                    <p className="card-text">
                      {/* AQUI CARLOS */}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card custom-card2">
                  <img
                    className="card-img-top"
                    src="https://th.bing.com/th/id/R.88139a5696007b191d2b0868f3f1b1af?rik=RnBb%2b6Cnw9H3ig&pid=ImgRaw&r=0"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {/* AQUI CARLOS */}Card title
                    </h5>
                    <p className="card-text">
                      {/* AQUI CARLOS */}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
