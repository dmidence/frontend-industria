import React from 'react'
import useModal from '../Modal/useModal'

export default function AdminNavbar({
  handleWidth,
}: {
  handleWidth: () => void
}) {
  let {modal, openModal} = useModal({title:'Editar Perfil',body:''})

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pe-1">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className=" navbar-collapse justify-content-end"
        id="navbarTogglerDemo01"
      >
        <div className="d-flex w-100 justify-content-between align-items-center p-2">
          <i
            className="fa-solid fa-expand fa-xl cursor-pointer option_item"
            onClick={() => handleWidth()}
          ></i>
          <div className="d-flex flex-column flex-end">
          <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong className='text-dark'>Nombre de Usuario</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" onClick={()=>openModal()}>
            <i className="fa-solid fa-gear"></i> Editar Perfil
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
            <i className="fa-solid fa-right-from-bracket"></i> Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
          </div>
        </div>
      </div>
      {modal}
    </nav>
  )
}
