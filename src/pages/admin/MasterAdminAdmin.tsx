import React, { ReactElement, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminFooter from '../../components/Footer/AdminFooter'

export default function MasterAdminAdmin() {
  let initialWidth = 80
  const [fullView, setfullView] = useState<boolean>(false)
  const [width, setwidth] = useState<number>(initialWidth)
  const handleWidth = () => {
    if (width < 100) {
      setwidth(100)
      setfullView(true)
    } else {
      setwidth(initialWidth)
      setfullView(false)
    }
  }

  let cursos = [
    { nombre: 'Curso 1', detalle: 'Detalle 1' },
    { nombre: 'Curso 2', detalle: 'Detalle 2' },
    { nombre: 'Curso 3', detalle: 'Detalle 3' },
    { nombre: 'Curso 4', detalle: 'Detalle 4' },
  ]
  return (
    <div className="d-flex">
      <Sidebar width={initialWidth} fullView={fullView}></Sidebar>
      <div
        style={{ width: `${width}%`, transition: 'width .3s' }}
        className="bg-gray m-0 p-0"
      >
        <AdminNavbar handleWidth={handleWidth}></AdminNavbar>
        <div className="tableSection w-full px-5 py-2">
          <div
            className="bg-light border border-gray p-4 rounded"
            style={{ minHeight: '85vh' }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-secondary">Cursos</h2>
              <div>
                <span className="px-1">
                  <button className="btn btn-primary"><i className="fa-solid fa-plus"></i></button>
                </span>
              </div>
            </div>
            <hr />
            <table className="table table-hover ">
              <thead className="bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Curso</th>
                  <th scope="col">Detalles</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {cursos.map(({ nombre, detalle }, index) => (
                    <tr>
                      <th scope="row">{index}</th>
                      <td>{nombre}</td>
                      <td>{detalle}</td>
                      <td>
                        <div className="d-flex justify-content-around align-items-center">
                          <i className="fa-solid fa-pen-to-square cursor-pointer text-success"></i>
                          <i className="fa-solid fa-trash cursor-pointer text-danger"></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              </tbody>
            </table>
            <nav aria-label="..." className="w-full d-flex justify-content-end">
              <ul className="pagination">
                <li className="page-item ">
                  <a className="page-link" href="#">
                    &laquo;
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    &raquo;
                  </a>
                </li>
              </ul>
            </nav>
            <hr />
          </div>
        </div>
        <AdminFooter></AdminFooter>
      </div>
    </div>
  )
}
