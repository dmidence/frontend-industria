import React, { useState, useEffect } from "react";
import axios from "axios";
import AppPagination from "../hooks/AppPagination";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CreateUserInSection() {
  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  let currentToUpdateSection = localStorage.getItem("currentToUpdateSection");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState<any>([]);
  const [count, setCount] = useState<any>([]);
  const [loading, setLoading] = useState<any>([]);

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
        console.log(res.data.users);
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
    setskip(skip * 10 - 10);
  };

  const handleAddUSers = (data: any) => {
    Promise.all(
      data.users.map((user: any) => {
        axios.post(
          import.meta.env.VITE_API_URL + "/sections/members",
          {
            data: {
              user: parseInt(user),
              section: currentToUpdateSection,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      })
    )
      .then((res) => {
        Swal.fire(
          "Usuarios Agregados",
          "Los usuarios han sido agregados",
          "success"
        ).then((res) => {
          location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(
          "Ocurrio un error",
          "Ha ocurrido un error al agregar los usuarios al curso",
          "error"
        );
      });
  };
  return (
    <form onSubmit={handleSubmit(handleAddUSers)} className="p-4">
      <div className="d-flex justify-content-between align-items-center p-3">
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
            <div className="p-2">
              <table className="table table-hover ">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Agregar</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {users.map((user: any) => (
                      <tr>
                        <th scope="row">{user.name}</th>
                        <td>{user.email}</td>
                        <td>
                          <input
                            type="checkbox"
                            id="users"
                            value={`${user.user_id}`}
                            {...register("users")}
                          />
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
                    {(count - 10) > 0&& (
                      <li className="page-item " onClick={() => goBack()}>
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
                    {(count - 10) > 0&& (
                      <li className="page-item " onClick={() => goNext()}>
                        <a className="page-link">&raquo;</a>
                      </li>
                    )}
                  </>
                </ul>
              </nav>
              <input type="submit" className="btn btn-success" />
            </div>
          ) : (
            <h3>No hay datos a mostrar</h3>
          )}
        </>
      )}

      <hr />
    </form>
  );
}
