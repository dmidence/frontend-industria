import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function CreateCourseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;

  const handleCreateCourse = (data: any) => {
    axios
      .post(
        import.meta.env.VITE_API_URL + "/courses",
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire(
          "Curso creado correctamente",
          "El curso ha sido creado",
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
        <label htmlFor="title">Titulo</label>
        <input
          className="form-control"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-danger">This field is required</span>
        )}
      </div>
      <div className="">
        <label htmlFor="description">Descripcion</label>
        <input
          className="form-control"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}
      </div>

      <input type="submit" className="btn btn-success" />
    </form>
  );
}
