import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateSecionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  let courseToUpdate = JSON.parse(localStorage.getItem("CourseToUpdate") || "");
  console.log(courseToUpdate);
  const handleCreateCourse = (data: any) => {
    axios
      .post(
        import.meta.env.VITE_API_URL + "/sections",
        {
          data: {
            course_id: courseToUpdate.course_id,
            name: data.name,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire(
          "Seccion Creada Correctamente",
          "La Seccion ha sido creada",
          "success"
        ).then((res) => {
          location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(
          "Ocurrio un error",
          "Ha ocurrido un error al crear el curso",
          "error"
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(handleCreateCourse)} className="p-4">
      <div className="">
        <strong>Curso: </strong>
        <span>{courseToUpdate.title}</span>
        <br />
        <label htmlFor="name">Nombre de la seccion</label>
        <input
          className="form-control"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-danger">Este campo es requerido</span>
        )}
      </div>
      <br />

      <input type="submit" className="btn btn-success" />
    </form>
  );
}
