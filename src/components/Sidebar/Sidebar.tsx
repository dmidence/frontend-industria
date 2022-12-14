import React from "react";
import style from "./Sidebar.module.scss";
import logo from "../../assets/img/logo3.png";
import { Link } from "react-router-dom";
import useModal from "../Modal/useModal";

export default function Sidebar({
  width,
  fullView,
}: {
  width: number;
  fullView: boolean;
}) {
  let adminRoutesMaster = [
    {
      label: "Usuarios",
      icon: <i className="fa-solid fa-user-plus fa-xl"></i>,
      path: "/admin-admin",
    },
    {
      label: "Cursos",
      icon: <i className="fas fa-book-open fa-xl"></i>,
      path: "/admin-courses",
    },
  ];

  let adminRoutesTeacher = [
    {
      label: "Cursos",
      icon: <i className="fa-solid fa-chalkboard-user fa-xl"></i>,
      path: "/admin-courses",
    },
  ];

  let adminRoutesStudent = [
    {
      label: "Mis Cursos",
      icon: <i className="fa-solid fa-chalkboard-user fa-xl"></i>,
      path: "/home-student",
    },
  ];
  let data: any;
  let user: any;

  data = !!sessionStorage.getItem("appNameLogIn")
    ? sessionStorage.getItem("appNameLogIn")
    : "{}";

  user = JSON.parse(data).user;
  let userRoutes: any[] = [];
  if (user.type) {
    switch (user.type.toLocaleLowerCase()) {
      case "alumno":
        userRoutes = [...adminRoutesStudent];
        break;
      case "maestro":
        userRoutes = [...adminRoutesTeacher];
        break;
      case "administrador":
        userRoutes = [...adminRoutesMaster];
        break;
      default:
        break;
    }
  }

  let { modal, openModal } = useModal({ title: "Editar Perfil", body: "" });

  const handleLogout = () => {
    sessionStorage.clear();
    location.reload();
  };

  return (
    <aside
      className={`d-flex flex-column flex-shrink-0 p-3 text-white main-admin-sidebar  p-0 ${style.sidebar__bg} `}
      style={{
        width: `${100 - width}%`,
        minHeight: "100vh",
        marginLeft: `-${fullView ? `${100 - width}%` : 0}`,
        transition: "margin .3s",
      }}
    >
      <a
        href="/"
        className="d-flex w-100 justify-content-center align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src={logo} alt="Logo" className="img-fluid img-brand" />
        <span className="fs-4">Crescendus</span>
      </a>
      <hr />
      Rutas de Usuario Admin
      <ul className="nav nav-pills flex-column mb-auto">
        {adminRoutesMaster.map(({ label, icon, path }, index) => (
          <SidebarItems label={label} icon={icon} path={path} key={index} />
        ))}
      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {userRoutes.map(({ label, icon, path }, index) => (
          <SidebarItems label={label} icon={icon} path={path} key={index} />
        ))}
      </ul>
      {/* Rutas de Usuario Estudiante (Para Pruebas)
      <ul className="nav nav-pills flex-column mb-auto">
        {adminRoutesStudent.map(({ label, icon, path }, index) => (
          <SidebarItems label={label} icon={icon} path={path} key={index} />
        ))}
      </ul>
      Rutas de Usuario Profesor (Para Pruebas)
      <ul className="nav nav-pills flex-column mb-auto">
        {adminRoutesTeacher.map(({ label, icon, path }, index) => (
          <SidebarItems label={label} icon={icon} path={path} key={index} />
        ))}
      </ul> */}
      <hr />
      <div className="dropdown">
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-user rounded-circle me-2"></i>

            <strong>{user.name.split(" ")[0]}</strong>
          </a>
        </div>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          {/* <li>
            <a className="dropdown-item" onClick={() => openModal()}>
              <i className="fa-solid fa-gear"></i> Editar Perfil
            </a>
          </li> */}
          <li>
            <a className="dropdown-item" href="#">
              <i
                className="fa-solid fa-right-from-bracket"
                onClick={() => handleLogout()}
              ></i>{" "}
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
      {modal}
    </aside>
  );
}

function SidebarItems({
  label,
  icon,
  path,
}: {
  label: string;
  icon: any;
  path: string;
}) {
  return (
    <li>
      <Link
        to={`${path}`}
        className="nav-link text-white d-flex  align-items-center"
      >
        {icon} <span className="ms-2">{label}</span>
      </Link>
    </li>
  );
}
