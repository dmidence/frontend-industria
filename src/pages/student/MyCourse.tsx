import React, { ReactElement, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminFooter from '../../components/Footer/AdminFooter'
import RecursosSection from './RecursosSection'
import CalSection from './CalSection'

export default function MyCourse() {
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

  const [showRes, setShowRes] = useState(true)

  const handelshowRes = () => {
    setShowRes(true)
  }

  const handelshowcals = () => {
    setShowRes(false)
  }

  let recursos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
                <h2 className="text-secondary">Nombre Curso</h2>
                <div>
                  <span className="px-1">
                    <button className="btn btn-success" onClick={handelshowRes}>
                      Recursos
                    </button>
                  </span>
                  <span className="px-1">
                    <button
                      className="btn btn-primary"
                      onClick={handelshowcals}
                    >
                      Calificaciones
                    </button>
                  </span>
                </div>
              </div>
              <hr />
              <div className="d-flex flex-wrap justify-content-around">
                {/* Body */}
                <nav
                  aria-label="..."
                  className="w-full d-flex justify-content-center p-4"
                >
                  <ul className="pagination w-full d-flex justify-content-around">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Unidad 1 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item ">
                    {/* <li className="page-item active"> */}
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
                {showRes && <RecursosSection recursos={recursos} />}
                {!showRes && <CalSection calfications={recursos} />}
              </div>
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </div>
      </div>
    </>
  )
}
