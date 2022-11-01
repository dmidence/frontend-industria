import React, { ReactElement, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminFooter from '../../components/Footer/AdminFooter'
import { Link } from 'react-router-dom'

export default function MasterAdmin() {
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
    { nombre: 'Curso 5', detalle: 'Detalle 5' },
    { nombre: 'Curso 6', detalle: 'Detalle 6' },
    { nombre: 'Curso 7', detalle: 'Detalle 7' },
    { nombre: 'Curso 8', detalle: 'Detalle 8' },
  ]

  return (
    <>
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
                <h2 className="text-secondary">Mis Cursos</h2>
              </div>
              <hr />
              <div className="d-flex flex-wrap justify-content-around">

              {cursos.map((curso, index) => (
                <Link to={`/home-student-course/course/${index}`}style={{ width: '30%' }}>
                  <div className="card mt-4 cursor-pointer text-dark" >
                  <img
                    className="card-img-top"
                    src="https://th.bing.com/th/id/R.4ff4501d43e60358523ff251a0d35ae9?rik=lbKTUlrf6TNMjg&pid=ImgRaw&r=0"
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                </Link>
              ))}
              </div>
              <nav
                aria-label="..."
                className="w-full d-flex justify-content-center"
              >
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
    </>
  )
}
