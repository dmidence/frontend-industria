import React, { useState } from "react";
import useModal from "../../components/Modal/useModal";

export default function RecursosSection({ recursos }: { recursos: any }) {

  const [homework, sethomework] = useState()
  let { modal: detailModal, openModal: opendetailModal } = useModal({
    title: 'Detalles de Tarea',
    body: <ModalData recurso={homework}></ModalData>,
  })
const handleModalView =(recurso:any)=>{
  sethomework(recurso)
  opendetailModal()
}
  return (
    <>
      <h6>Asignaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex justify-content-around p-4"
        style={{ minHeight: "50vh" }}
      >
        {recursos.map((recurso: any) => (
          <strong onClick={()=> handleModalView(recurso)}>
            <a >{`Recurso ${recurso.title}`}</a>
          </strong>
        ))}
      </section>
      {detailModal}
    </>
  );
}


export function ModalData(homeWork:any) {
  return (
    <div>{JSON.stringify(homeWork)}</div>
  )
}


