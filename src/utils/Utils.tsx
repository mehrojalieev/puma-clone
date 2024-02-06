import { createPortal } from "react-dom";
import "./Utils.scss";
import { FiX } from "react-icons/fi";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}) => {
  return (
    isModalOpen && (
      <>
        {createPortal(
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div
              className="modal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <FiX
                className="close-modal-btn"
                onClick={() => setIsModalOpen(false)}
              />
              {children}
            </div>
          </div>,
          document.getElementById("portal") as HTMLDivElement
        )}
      </>
    )
  );
};

export default Modal;
