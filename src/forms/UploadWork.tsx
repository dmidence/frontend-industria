import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function UploadWork() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  const [file, setfile] = useState<any>();

  const uploadFile = (e: any) => {
    setValue("file", e.target.files[0]);
  };

  const handleCreateCourse = (data: any) => {
    console.log(data);
    var formData = new FormData();

    for (var key in data) {
      formData.append(key, data[key]);
    }

    // axios
    //   .post(import.meta.env.VITE_API_URL + "/courses", formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     Swal.fire(
    //       "Tarea creada correctamente",
    //       "La tarea se ha creado correctamente",
    //       "success"
    //     ).then((res) => {
    //       location.reload();
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Swal.fire(
    //       "Ocurrio un error",
    //       "Ha ocurrido un error al crear la tarea",
    //       "error"
    //     );
    //   });
  };

  return (
    <form onSubmit={handleSubmit(handleCreateCourse)} className="p-4">
      <div className="">
        <label htmlFor="title">Selecciona un archivo PDF</label>
        <input
          className="form-control"
          type="file"
          accept="application/pdf"
          onChange={uploadFile}
        />
        <br />
        <input type="submit" className="btn btn-success" />
      </div>
    </form>
  );
}
