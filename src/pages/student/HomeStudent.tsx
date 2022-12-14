import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminFooter from "../../components/Footer/AdminFooter";
import { Link } from "react-router-dom";
import AppPagination from "../../hooks/AppPagination";
import axios from "axios";

export default function MasterAdmin() {
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

  const [courses, setCourses] = useState<any>([]);
  const [count, setCount] = useState<any>(0);
  const [loading, setLoading] = useState<any>([]);

  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  const [skip, setskip] = useState(0);
  const [search, setSearch] = useState<any>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip: skip,
          search: search,
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
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
      .get(import.meta.env.VITE_API_URL + "/courses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          skip: 0,
          search: search,
        },
      })
      .then((res) => {
        setCourses(res.data.courses);
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

  const setActiveCourse = (course: any) => {
    localStorage.setItem("activecourse", JSON.stringify(course));
  };
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
                <h2 className="text-secondary">Cursos</h2>
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
                  {!!courses && courses.length > 0 ? (
                    <>
                      <div className="d-flex flex-wrap justify-content-around">
                        {courses.map((course: any, index: number) => (
                          <Link
                            onClick={() => setActiveCourse(course)}
                            to={`/home-student-course/course/${course.course_id}`}
                            style={{ width: "30%" }}
                            key={course.course_id}
                            className="decoration-none mt-2"
                          >
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title text-dark">
                                  {course.title}
                                </h5>
                                <p className="card-text text-dark">
                                  {course.description}
                                </p>
                                <a href="#" className="btn btn-app w-full">
                                  Ir al curso
                                </a>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <nav
                        aria-label="..."
                        className="w-full d-flex justify-content-end"
                      >
                        <ul className="pagination">
                          <>
                            {!!count && (count - 10) > 0&& (
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
                            {!!count && (count - 10) > 0&& (
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
                    <>
                      <h3>No hay datos a mostrar</h3>
                    </>
                  )}
                </>
              )}

              <hr />
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </div>
      </div>
    </>
  );
}
