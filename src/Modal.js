import React from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Toggle from "./Toggle";


function Modal({children, estado, setEstado}) {

  const handleCloseModal = () => {
    setEstado(false);
};

    return  (
        <div className="m">  
        {estado &&(
            <div className="modal">
                <div className="modal-content">
                    <span onClick={handleCloseModal} className="close">&times;</span>
                    <div className="modal1">
                        <div>
                            {children}
                            
                        </div>      
                    </div>
                </div> 
            </div>   
            )} 
        </div>  
          )



}

export default Modal;