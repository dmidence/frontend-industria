import React from 'react'

export default function CalSection({ calfications }: { calfications: any }) {
  return (
    <>
      <nav aria-label="..." className="w-full d-flex justify-content-center">
        <ul className="pagination w-full d-flex justify-content-around">
          <li className="page-item">
            <a className="page-link" href="#">
              Unidad 1 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              Unidad 2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Unidad 3
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      <h6>Calificaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex "
        style={{ minHeight: '50vh' }}
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Asignacion</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </section>
      <strong>Total:100/100</strong>
      <div>
        <h6 className="pt-2">Descripcion del Curso:</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusantium tenetur omnis, perferendis optio consectetur nobis
          doloremque pariatur sapiente incidunt commodi eius neque repellat fuga
          reiciendis? Repellat quasi recusandae laudantium?
        </p>
      </div>
    </>
  )
}
