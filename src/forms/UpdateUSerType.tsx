import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdateUSerType() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let token = JSON.parse(sessionStorage.getItem("appNameLogIn") || "").token;
  let userToUpdate = JSON.parse(localStorage.getItem("userToUpdate") || "");

  const handleCreateCourse = (data: any) => {
    axios
      .put(
        import.meta.env.VITE_API_URL + "/types/user",
        {
          data: {
            user: userToUpdate.user_id,
            type: data.type,
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
          "Usuario Actualizado",
          "Usuario Actualizado Correctamente",
          "success"
        ).then((res) => {
          location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire(
          "Ocurrio un error",
          "Ha ocurrido un error al actualizar el usuario",
          "error"
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(handleCreateCourse)} className="p-4">
      <div className="">
        <strong>{userToUpdate.name}</strong>

        <br />
        <label htmlFor="title">Titulo</label>
        <select
          className="form-control"
          defaultValue={userToUpdate.utype_id}
          {...register("type", { required: true })}
        >
          <option value="3">Administrador</option>
          <option value="2">Profesor</option>
          <option value="1">Estudiante</option>
        </select>
        {errors.title && (
          <span className="text-danger">This field is required</span>
        )}
      </div>

      <input type="submit" className="btn btn-success" />
    </form>
  );
}
