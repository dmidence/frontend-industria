import React, { ReactElement, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import AdminFooter from '../../components/Footer/AdminFooter'
import useModal from '../../components/Modal/useModal'
import Swal from 'sweetalert2'
import axios from 'axios'
import AppPagination from '../../hooks/AppPagination'
import CreateSecionForm from '../../forms/CreateSecionForm'
import CreateUserInSection from '../../forms/CreateUserInSection'
import UploadWork from '../../forms/UploadWork'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function MasterAdminWorks() {
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
  const [currentWork, setCurrentWork] = useState<any>() //Setear Tarea para desplegar en modal
  const [sections, setSections] = useState<any>([])
  const [count, setCount] = useState<any>([])
  const [loading, setLoading] = useState<any>([])

  let token = JSON.parse(sessionStorage.getItem('appNameLogIn') || '').token
  const [skip, setskip] = useState(0)
  let params = useParams<any>()
  useEffect(() => {
    setLoading(true)
    axios
      .get(import.meta.env.VITE_API_URL + '/homeworks?unit=' + params.idUnit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res)
        setSections(res.data.homeworks)
        setCount(res.data.count)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [skip])

  const [pageNumber, setpageNumber] = useState(1)

  const goBack = () => {
    setpageNumber(pageNumber - 1)
    setskip(skip - 10)
  }

  const goNext = () => {
    setpageNumber(pageNumber + 1)
    setskip(skip + 10)
  }

  const goToSpecific = (currentPageNumber: number) => {
    setpageNumber(currentPageNumber)
    setskip(currentPageNumber * 10 - 10)
  }

  let { modal: detailModal, openModal: opendetailModal } = useModal({
    title: 'Detalles de Tarea',
    body: <ModalData recurso={currentWork}></ModalData>,
  })

  const handleOpenDetail = (work: any) => {
    setCurrentWork(work)
    opendetailModal()
  }
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
                <h2 className="text-secondary">Asignaciones</h2>

                <div className="d-flex">
                  <div>
                    <span className="px-1"></span>
                  </div>
                </div>
              </div>
              <hr />
              {loading ? (
                <h3>Cargando...</h3>
              ) : (
                <>
                  {!!sections && sections.length > 0 ? (
                    <>
                      <table className="table table-hover ">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th scope="col">Nombre de la Asignacion</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {sections.map((course: any) => (
                              <tr>
                                <th scope="row">{course.title}</th>
                                <td>{course.create_at.substring(0, 10)}</td>
                                <td>
                                  {course.active
                                    ? 'Habilitado'
                                    : 'Desabilitado'}
                                </td>
                                <td>
                                  <div className="d-flex justify-content-around align-items-center">
                                    <i
                                      className="fa-solid fa-eye cursor-pointer text-success"
                                      onClick={() => {
                                        handleOpenDetail(course)
                                      }}
                                    ></i>
                                    {/* <Link
                                        to={"/assigment/" + course.assignments_id}
                                        className="fa-solid fa-book cursor-pointer text-danger"
                                        
                                        ></Link> */}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        </tbody>
                      </table>
                      <nav
                        aria-label="..."
                        className="w-full d-flex justify-content-end"
                      >
                        <ul className="pagination">
                          <>
                            {count - 10 > 0 && (
                              <li
                                className="page-item "
                                onClick={() => goBack()}
                              >
                                <a className="page-link">&laquo;</a>
                              </li>
                            )}
                          </>
                          {/* APPPAGINATION */}
                          <AppPagination
                            totalCount={count}
                            siblingCount={1}
                            currentPage={pageNumber}
                            goToSpecific={goToSpecific}
                            goBack={goBack}
                            goNext={goNext}
                          ></AppPagination>
                          <>
                            {count - 10 > 0 && (
                              <li
                                className="page-item "
                                onClick={() => goNext()}
                              >
                                <a className="page-link">&raquo;</a>
                              </li>
                            )}
                          </>
                        </ul>
                      </nav>
                    </>
                  ) : (
                    <h3>No hay datos a mostrar</h3>
                  )}
                </>
              )}

              <hr />
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </div>
      </div>
      {detailModal}
    </>
  )
}

export function ModalData(homeWork:any) {
  return (
  //  <div>{JSON.stringify(homeWork)}
    <div className='d-flex flex-column p-2'>
     
      <p> {homeWork.recurso.title}</p>
      <hr />
      <strong><p className=''>Descripcion de la Asignatura: </p></strong>
      <p className='p-3'>{homeWork.recurso.description}</p>
     <strong> <p className=''>Fecha de Inicio: </p></strong>
      <p className='p-3'>{homeWork.recurso.startDate.substring(0,10)}</p>
    <strong>  <p className=''>Fecha de Finalizacion: </p></strong>
      <p className='p-3'>{homeWork.recurso.endDate.substring(0,10)}</p>
     </div>
    //  </div>
  )
}