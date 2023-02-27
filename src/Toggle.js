import React, { useState } from 'react';
import "./modal.css";

function Toggle() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {modalOpen && (
        <div>
        <button onClick={handleOpenModal}>Open Modal</button>    
        <div className="modal">
            <div className="modal-content">
            <span onClick={handleCloseModal} className="close">&times;</span>
            <div className="modal1">
                <div>
                    <h3>Qué es </h3>
                    <h2>VIDAPP </h2>
                    <p>
                        Esta herramineta sirve al usuario como herramienta de comprobación de 
                        los parametros de accesibilidad de su vivienda. Es decir, ¿en qué medida 
                        se encuentra adaptado el hogar para que personas mayores o con discapacidad lo habiten de forma cómoda?
                    </p>
                    <div className="btn">
                        <button>Aceptar</button>
                    </div>
                </div>      
            </div>
            </div> 
        </div>    
        </div>
      )}
    </div>
  );
}

export default Toggle;
