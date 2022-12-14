import React, { ReactElement, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminFooter from "../../components/Footer/AdminFooter";
import useModal from "../../components/Modal/useModal";
import Swal from "sweetalert2";
import axios from "axios";
import AppPagination from "../../hooks/AppPagination";
import UpdateUSerType from "../../forms/UpdateUSerType";

export default function MasterAdminAdmin() {
  let initialWidth = 80;
  const [fullView, setfullView] = useState<boolean>(false);
  const [width, setwidth] = useState<number>(initialWidth);
  const handleWidth = () => {
    if (width < 100) {
      setwidth(100);
      setfullView(true);
    } else {
      setwidth(initialWidth);
      setfullView(false);
    }
  };

  const [users, setUsers] = useState<any>([]);
  const [count, setCount] = useState<any>([]);
  const [loading, setLoading] = useState<any>([]);

  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  const [skip, setskip] = useState(0);
  const [search, setSearch] = useState<any>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip: skip,
          search: search,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
        setCount(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [skip]);
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  let wordSearch = () => {
    setskip(0);
    setpageNumber(1);
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip: 0,
          search: search,
        },
      })
      .then((res) => {
        setUsers(res.data.users);
        setCount(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const [pageNumber, setpageNumber] = useState(1);

  const goBack = () => {
    setpageNumber(pageNumber - 1);
    setskip(skip - 10);
  };

  const goNext = () => {
    setpageNumber(pageNumber + 1);
    setskip(skip + 10);
  };

  const goToSpecific = (currentPageNumber: number) => {
    setpageNumber(currentPageNumber);
    setskip(currentPageNumber * 10 - 10);
  };

  let { modal: updateModal, openModal: updateCreateModal } = useModal({
    title: "Editar Tipo de Usuario",
    body: <UpdateUSerType></UpdateUSerType>,
  });

  let handleUpdate = (user: any) => {
    localStorage.setItem("userToUpdate", JSON.stringify(user));
    updateCreateModal();
  };
  // Pagination\
  // On Parameter Change

  return (
    <>
      <div className="d-flex">
        <Sidebar width={initialWidth} fullView={fullView}></Sidebar>
        <div
          style={{ width: `${width}%`, transition: "width .3s" }}
          className="bg-gray m-0 p-0"
        >
          <AdminNavbar handleWidth={handleWidth}></AdminNavbar>
          <div className="tableSection w-full px-5 py-2">
            <div
              className="bg-light border border-gray p-4 rounded"
              style={{ minHeight: "85vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-secondary">Usuarios</h2>
                {/* <div>
                  <span className="px-1">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        openCreateModal()
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </span>
                </div> */}
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  <span className="px-1">
                    <button className="btn btn-primary" onClick={wordSearch}>
                      <i className="fa-solid fa-search"></i>
                    </button>
                  </span>
                </div>
              </div>
              <hr />
              {loading ? (
                <h3>Cargando...</h3>
              ) : (
                <>
                  {!!users && users.length > 0 ? (
                    <>
                      <table className="table table-hover ">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Fecha de Creacion</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Opciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            {users.map((user: any) => (
                              <tr>
                                <th scope="row">{user.name}</th>
                                <td>{user.email}</td>
                                <td>{user.create_at.substring(0, 10)}</td>
                                <td>{user.type}</td>
                                <td>
                                  <div className="d-flex justify-content-around align-items-center">
                                    <i
                                      className="fa-solid fa-pen-to-square cursor-pointer text-success"
                                      onClick={() => {
                                        handleUpdate(user);
                                      }}
                                    ></i>
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
                            {Math.ceil(count / 10) != 1 && (
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
                            {Math.ceil(count / 10) != 1 && (
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
      {updateModal}
    </>
  );
}
