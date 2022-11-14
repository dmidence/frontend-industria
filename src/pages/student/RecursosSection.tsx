import React from "react";

export default function RecursosSection({ recursos }: { recursos: any }) {
  return (
    <>
      <h6>Asignaciones:</h6>
      <section
        className="asignaciones w-full bg-white d-flex justify-content-around p-4"
        style={{ minHeight: "50vh" }}
      >
        {recursos.map((recurso: any) => (
          <strong>
            <a href="">{`Recurso ${recurso}`}</a>
          </strong>
        ))}
      </section>
    </>
  );
}
