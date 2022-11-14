import React from "react";
import useModal from "../../components/Modal/useModal";

export default function CalSection({ calfications }: { calfications: any }) {
  let { modal, openModal } = useModal({ title: "Subir Tarea", body: "" });
  return (
    <>
      <h6>Calificaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex p-4"
        style={{ minHeight: "50vh" }}
      >
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Asignacion</th>
              <th scope="col">Entrega</th>
              <th scope="col">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td className="text-left">
                <p>Sin entregar/Entregado</p>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => openModal()}
                >
                  {" "}
                  Entregar
                </button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td className="text-left">
                <p>Sin entregar/Entregado</p>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => openModal()}
                >
                  {" "}
                  Entregar
                </button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td className="text-left">
                <p>Sin entregar/Entregado</p>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => openModal()}
                >
                  {" "}
                  Entregar
                </button>
              </td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </section>
      <strong>Total:100/100</strong>

      {modal}
    </>
  );
}
