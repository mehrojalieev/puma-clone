import { createPortal } from "react-dom";
import "./Utils.scss";
import { FiX } from "react-icons/fi";
import { useSwiper } from "swiper/react";
import prevBtn from '../assets/images/preview.svg'
import nextBtn from '../assets/images/next.svg'
import { Children } from "../types";

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


const SmallContainer = ({children}: Children) => {
  return (
    <div className="small-container">
      {children}
    </div>
  )
}



const NavigationBnts = () => {
  const swiperInstance = useSwiper()
  return (
    <div className="navigation-carousel">
      <button onClick={() => swiperInstance.slidePrev()}>
        <img src={prevBtn} alt="" />
      </button>
      <button onClick={() => swiperInstance.slideNext()}>
        <img src={nextBtn} alt="" />
      </button>
    </div>
  )
}

export  {Modal, NavigationBnts, SmallContainer};
