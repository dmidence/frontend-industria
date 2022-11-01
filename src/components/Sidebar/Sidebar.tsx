import React from 'react';
import style from './Sidebar.module.scss';
import logo from '../../assets/img/logo3.png';
import { Link } from 'react-router-dom';

export default function Sidebar({
  width,
  fullView,
}: {
  width: number
  fullView: boolean
}) {
  let adminRoutesMaster = [
    {
      label: 'Administradores',
      icon: <i className="fa-solid fa-user-plus fa-xl"></i>,
      path: '/admin-admin',
    },
    {
      label: 'Profesores',
      icon: <i className="fa-solid fa-chalkboard-user fa-xl"></i>,
      path: '/',
    },
    {
      label: 'Cursos',
      icon: <i className="fas fa-book-open fa-xl"></i>,
      path: '/admin-courses',
    },
    {
      label: 'Estudiantes',
      icon: <i className="fa-solid fa-users fa-xl"></i>,
      path: '/admin-students',
    },
  ]

  let adminRoutesTeacher = [
    {
      label: 'Cursos',
      icon: <i className="fa-solid fa-chalkboard-user fa-xl"></i>,
      path: '/admin-courses',
    },
    {
      label: 'Perfil',
      icon: <i className="fas fa-book-open fa-xl"></i>,
      path: '/teacher-profile',
    },
  ]

  let adminRoutesStudent = [
    {
      label: 'Mis Cursos',
      icon: <i className="fa-solid fa-chalkboard-user fa-xl"></i>,
      path: '/admin-courses',
    },
    {
      label: 'Perfil',
      icon: <i className="fas fa-book-open fa-xl"></i>,
      path: '/teacher-profile',
    },
  ]
  let userRoutes = [...adminRoutesMaster];
  return (
    <aside
      className={`d-flex flex-column flex-shrink-0 p-3 text-white main-admin-sidebar  p-0 ${style.sidebar__bg} `}
      style={{
        width: `${100 - width}%`,
        minHeight: '100vh',
        marginLeft: `-${fullView ? `${100 - width}%` : 0}`,
        transition: 'margin .3s',
      }}
    >
      <a
        href="/"
        className="d-flex w-100 justify-content-center align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src={logo} alt="Logo" className="img-fluid img-brand" />
        <span className="fs-4">NomApp</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {userRoutes.map(({ label, icon,path }, index) => (
          <SidebarItems label={label} icon={icon} path={path} key={index}/>
        ))}
      </ul>
      <hr />
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
          <strong>Nombre de Usuario</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

function SidebarItems({ label, icon, path }: { label: string; icon: any ,path:string}) {
  return (
    <li>
      <Link to={`${path}`} className="nav-link text-white d-flex  align-items-center">
        {icon} <span className="ms-2">{label}</span>
      </Link>
    </li>
  )
}
