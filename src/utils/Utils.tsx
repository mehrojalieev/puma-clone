import React from 'react'
import "./Utils.scss"

const Modal = ({isOpenModal, setIsOpenModal}) => {

    return (
        <div onClick={() => setIsOpenModal(false)} style={isOpenModal ? {display: "block"} : {display: "none"}} className="modal-overlay">
                <div className="modal">
                    
                </div>
        </div>
    )
}

export  {Modal}