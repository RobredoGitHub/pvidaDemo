import React from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";

function Modal() {
    const navigate = useNavigate();
    return  <div className="modal1">
    <div>
        <h3>Qué es </h3>
        <h2>VIDAPP </h2>
        <p>
            Esta herramineta sirve al usuario como herramienta de comprobación de 
            los parametros de accesibilidad de su vivienda. Es decir, ¿en qué medida 
            se encuentra adaptado el hogar para que personas mayores o con discapacidad lo habiten de forma cómoda?
        </p>
        <div onClick={() => navigate("../formulario")} className="btn"><button>Aceptar</button></div>
    </div>
</div>
}

export default Modal;