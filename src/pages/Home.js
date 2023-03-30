import React from "react";
import "./home.css";
import logo from "../img/vidapp.png";
import vida from "../img/footer/Logo-Proyecto-Vida.png";
import icon1 from "../img/iconos/personal.png";
import icon2 from "../img/iconos/profesional.png";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";



function Home(){
    const [modalOpen1, setmodalOpen1] = useState(false);
    const navigate = useNavigate();
    
    const handleOpenModal = () => {
        setmodalOpen1(true);
      };
    return (

    <div>
        <header className='Header'>
            <h1>Bienvenido a</h1>
            <img src={logo} alt="" />
   
        </header>
        <div className="h3">
            <h3>
                ¿en qué medida se encuentra adaptado el hogar para que personas mayores o con discapacidad lo habiten de forma cómoda?
            </h3>
        </div>
            
            <div className="flex-container">
                <button onClick={() => navigate("./carrusel-personal")} className="btn2">
                    <span>Uso personal</span>
                    <img className="icon" src={icon1} alt="" />
                </button>
                <button onClick={() => navigate("./carrusel-profesional")} className="btn1">
                    <span>Uso profesional </span>
                    <img className="icon" src={icon2} alt="" />
                </button>
            </div>
            <footer className="pie-pagina">
                <div className="grupo1">
                    <div className="box">
                        <figure>
                            <a href="https://www.vidafp.uma.es/">
                                <img id="vida" src={vida} alt="vida"/>
                            </a>
                        </figure>
                    </div>
                    <div className="box">
                        <h4> <a href="https://www.vidafp.uma.es/" target="_blank" rel="noreferrer">MEJORANDO LA CALIDAD DE VIDA DE LAS PERSONAS MAYORES EN SUS HOGARES</a></h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum unde magni .</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum .</p>
                    </div>
                    <div className="box">
                        <h4>SIGUENOS</h4>
                        <div className="red-social">
                        </div>
                   
                    </div>
                </div>
                <div className="grupo2">
                    <small>&copy; 2023<b> Proyecto vida</b> - Todos los derechos reservados.</small>
                </div>
            </footer>
    </div>


    )
}

export default Home;