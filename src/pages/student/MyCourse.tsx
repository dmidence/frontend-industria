import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminFooter from "../../components/Footer/AdminFooter";
import RecursosSection from "./RecursosSection";
import CalSection from "./CalSection";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyCourse() {
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

  const [showRes, setShowRes] = useState(true);

  const handelshowRes = () => {
    setShowRes(true);
  };

  const handelshowcals = () => {
    setShowRes(false);
  };

  let recursos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Dinamic
  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  let activeCourse = JSON.parse(localStorage.getItem("activecourse") || "");

  const [skip, setskip] = useState(0);
  const [search, setSearch] = useState<any>("");

  let { course_id } = useParams<any>();

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState<any>(0);
  const [courseSections, setCourseSections] = useState<any>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL + "/sections", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          course: course_id,
          skip: skip,
          search: search,
        },
      })
      .then((res) => {
        setCourseSections(res.data.sections);
        setCount(res.data.count);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [skip]);

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
                <h2 className="text-secondary">{activeCourse.title}</h2>
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
                  {!!courseSections && courseSections.length > 0 ? (
                    <div className="w-full">
                      <ul className="pagination w-full d-flex justify-content-around">
                        {courseSections.map((section: any) => (
                          <li className="page-item">
                            <a className="page-link" href="#">
                              {section.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {showRes && <RecursosSection recursos={recursos} />}
                      {!showRes && <CalSection calfications={recursos} />}
                      <hr />
                      <div className="text-left">
                        <h6 className="pt-2">Descripcion del Curso:</h6>
                        <p>{activeCourse.description}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3>No hay secciones a mostrar</h3>
                    </>
                  )}
                </nav>
              </div>
            </div>
          </div>
          <AdminFooter></AdminFooter>
        </div>
      </div>
    </>
  );
}
