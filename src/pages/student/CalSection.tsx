import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'
import useModal from '../../components/Modal/useModal'

export default function CalSection({
  recursos,
  section,
}: {
  recursos: any
  section: any
}) {
  let token = JSON.parse(sessionStorage.getItem('appNameLogIn') || '').token
  let activeCourse = JSON.parse(localStorage.getItem('activecourse') || '')

  let { modal, openModal } = useModal({ title: 'Subir Tarea', body: '' })
  const hendleopenModal = (recurso: any) => {
    let data ={section:section,assignment:recurso.assignments_id}
    Swal.fire({
      title: 'Entregar',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then((res) => {
      if(res.isConfirmed) {
      // if (false) {
        axios
          .post(
            import.meta.env.VITE_API_URL + '/homeworks/submission',
            {data},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then((res) => {
            Swal.fire(
              'Entregado correctamente',
              'Tarea Entregada',
              'success',
            ).then((res) => {
              location.reload()
            })
          })
          .catch((err) => {
            console.log(err)
            Swal.fire(
              'Ocurrio un error',
              'Error al entregar la tarea',
              'error',
            )
          })
      }
    })
  }
  return (
    <>
      <h6>Calificaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex p-4"
        style={{ minHeight: '50vh' }}
      >
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Asignacion</th>
              <th scope="col">Entrega</th>
              <th scope="col">Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {recursos.map((recurso: any, index: number) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{recurso.title}</td>
                <td className="text-left">
                  <p>{recurso.description}</p>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => hendleopenModal(recurso)}
                  >
                    {' '}
                    Entregar
                  </button>
                </td>
                <td>10</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <strong>Total:100/100</strong>

      {modal}
    </>
  )
}
