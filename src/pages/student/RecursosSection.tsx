import React from 'react'

export default function RecursosSection({recursos}:{recursos:any}) {
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
      <h6>Asignaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex justify-content-around"
        style={{ minHeight: '50vh' }}
      >
        {recursos.map((recurso:any) => (
          <strong>
            <a href="">{`Recurso ${recurso}`}</a>
          </strong>
        ))}
      </section>
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
