import React from "react";
import "./home.css";
import logo from "../img/logo.png";
// import vida from "../img/footer/Logo-Proyecto-Vida.png";
// import iconF1 from "../img/footer/proyectov.png";
// import iconF2 from "../img/footer/junta.png";
// import iconF3 from "../img/footer/uma.png";
// import iconF4 from "../img/footer/vida.png";
import  { useState } from 'react';
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";




function Home(){
    const [modalOpen, setmodalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
       setmodalOpen(true);
    };
    
    return (
    <div>
        <header className='Header'>
            <h1>BIENVENIDO A</h1>
            <a onClick={() => handleOpenModal()}><img className="logo" src={logo} alt="" /></a>
        </header>

        {/* <footer className="pie-pagina">
                <div className="grupo1">
                    <div className="box">
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("./manual-de-uso")}>Manual de uso del usuario</a>
                        </div>
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("./politica-de-privacidad")}>Política de privacidad</a>
                        </div>
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("./politica-de-cookies")}>Política de cookies</a>
                        </div>
                        <div className="links"> 
                            <a className="link">Aviso legal</a>
                        </div>
                    </div>
                    <div className="box" id="logos">
                        <div>
                            <a href="https://www.vidafp.uma.es/">
                                <img id="proyecto" src={iconF1} alt="vida"/>
                            </a>
                        </div>
                        <div>
                        <a href="https://www.vidafp.uma.es/">
                                <img id="junta" src={iconF2} alt="vida"/>
                            </a>
                        </div>
                        <div>
                        <a href="https://www.vidafp.uma.es/">
                                <img id="uma" src={iconF3} alt="vida"/>
                            </a>
                        </div>   
                        <div>
                        <a href="https://www.vidafp.uma.es/">
                                <img id="vidaes" src={iconF4} alt="vida"/>
                            </a>
                        </div>
                    </div>   
                </div>
                <div className="grupo2">
                    <small>&copy; 2023<b> Proyecto vida</b> - Todos los derechos reservados.</small>
                </div>
        </footer> */}
        <Modal estado={modalOpen} setEstado={setmodalOpen}>
        <div className="main">
            <h3>
                ¿En qué medida se encuentra adaptado el hogar para que personas mayores o con discapacidad lo habiten de forma cómoda?
            </h3>
            <div className="flex-container">
                <button onClick={() => navigate("./carrusel-personal")} className="btn2">
                    <span>USO PERSONAL</span>
                    {/* <img className="icon" src={icon1} alt="" /> */}
                </button>
                <button onClick={() => navigate("./carrusel-profesional")} className="btn1">
                    <span>USO PROFESIONAL</span>
                    {/* <img className="icon" src={icon2} alt="" /> */}
                </button>
            </div>
        </div>
        </Modal>
    </div>


    )
}

export default Home;