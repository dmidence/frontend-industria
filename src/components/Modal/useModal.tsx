import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    padding:0
  },
};
Modal.setAppElement("#root");
export default function useModal({
  title = "Modal de Ejemplo",
  body,
}: {
  title?: string;
  body?: any;
}) {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return {
    openModal,
    modal: (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <div className="d-flex justify-content-between align-items-center w-full">
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="text-white bg-back w-100 p-4 d-flex justify-content-between align-items-center"
            >
              {title}
              <span
              className="text-white cursor-pointer"
              onClick={() => closeModal()}
            >
              <i className="fa-solid fa-x "></i>
            </span>
            </h2>
            
          </div>
          <div className="modal-content">
            <div className="modal-body">{body}</div>
          </div>
        </Modal>
      </div>
    ),
  };
}
