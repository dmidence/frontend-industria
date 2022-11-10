import React, { ReactElement, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminNavbar from "../../components/Navbar/AdminNavbar";
import AdminFooter from "../../components/Footer/AdminFooter";
import useModal from "../../components/Modal/useModal";
import Swal from "sweetalert2";

export default function AdminHome() {
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

  return (
    <>
      <div className="d-flex">
        <Sidebar width={initialWidth} fullView={fullView}></Sidebar>
        <div
          style={{ width: `${width}%`, transition: "width .3s" }}
          className="bg-gray m-0 p-0"
        >
          <AdminNavbar handleWidth={handleWidth}></AdminNavbar>
          <div
            className="tableSection w-full px-5 py-2 d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
          >
            Bienvenido Perrito
          </div>
          <AdminFooter></AdminFooter>
        </div>
      </div>
    </>
  );
}
