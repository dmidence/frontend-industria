
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function UploadWorkUser() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  let token = JSON.parse(sessionStorage.getItem('currentAsignment') || '').token
  const [file, setfile] = useState<any>()

  const uploadFile = (e: any) => {
    setValue('file', e.target.files[0])
  }

  const handleCreateCourse = (data: any) => {
    try {
      let auxDateS = data.startDate.split('-')
      let auxDateE = data.endDate.split('-')
      console.log(auxDateE)
      data.startDate = `${auxDateS[1].toString() +'-'+ auxDateS[2].toString() +'-'+ auxDateS[0].toString()}`
      data.endDate = `${auxDateE[1].toString() +'-'+ auxDateE[2].toString() +'-'+ auxDateE[0].toString()}`
      data.unit = parseInt(data.unit) 
    } catch (error) {
      console.log(error)
    }
    axios
      .post(
        import.meta.env.VITE_API_URL + "/homework",
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
      <div className="form-group">
        <label htmlFor="title">Titulo</label>
        <input
          className="form-control"
          type="text"
          {...register('title', { required: true })}
        />
        {errors.title && (
          <span className="text-danger">El Titulo es obligatorio</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="title">Descripcion</label>
        <input
          className="form-control"
          type="text"
          {...register('description', { required: true })}
        />
      </div>
      {errors.description && (
        <span className="text-danger">La descripcion es obligatoria</span>
      )}
      <div className="form-group">
        <label htmlFor="title">Fecha de Inicio</label>
        <input
          className="form-control"
          type="date"
          {...register('startDate', { required: true })}
        />
      </div>
      {errors.starDate && (
        <span className="text-danger">La Fecha de inicio es obligatoria</span>
      )}
      <div className="form-group">
        <label htmlFor="title">Fecha de Finalizacion</label>
        <input
          className="form-control"
          type="date"
          {...register('endDate', { required: true })}
        />
      </div>
      {errors.endDate && (
        <span className="text-danger">
          La fecha de finalizacion es obligatoria
        </span>
      )}
      <div className="form-group">
        <label htmlFor="title">Unidad</label>
        <select
          className="form-control"
          {...register('unit', { required: true })}
        >            <option value={``} selected disabled>Selecciona una opcion</option>

          {units.map((unit: any) => (
            <option value={`${unit.unit_id}`}>{unit.title}</option>
            
          ))}
        </select>
      </div>
      {errors.unit && (
        <span className="text-danger">
          Seleccionar la una unidad es obligatorio
        </span>
      )}
      {/* <div className="form-group">
        <label htmlFor="title">Selecciona un archivo PDF</label>
        <input
          className="form-control"
          type="file"
          accept="application/pdf"
          onChange={uploadFile}
        />
      </div> */}
      <br />
      <input type="submit" className="btn btn-success" />
    </form>
  )
}
