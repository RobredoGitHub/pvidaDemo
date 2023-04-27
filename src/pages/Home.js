import React from "react";
import "./home.css";
import logo from "../img/vidapp.png";
import vida from "../img/footer/Logo-Proyecto-Vida.png";
import icon1 from "../img/iconos/personal.png";
import icon2 from "../img/iconos/profesional.png";
import iconF3 from "../img/footer/uma.png";
import iconF1 from "../img/footer/vidaEs.png";
import iconF2 from "../img/footer/junta.png";
import { useNavigate } from "react-router-dom";




function Home(){
    const navigate = useNavigate();
    
    return (
    <div>
        <header className='Header'>
            <h1>Bienvenido a</h1>
            <img src={logo} alt="" />
        </header>
        <div className="main">
            <h3>
                ¿en qué medida se encuentra adaptado el hogar para que personas mayores o con discapacidad lo habiten de forma cómoda?
            </h3>
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
        </div>
        <footer className="pie-pagina">
                <div className="grupo1">
                    <div className="box">
                        <h4> <a href="https://www.vidafp.uma.es/" target="_blank" rel="noreferrer">MEJORANDO LA CALIDAD DE VIDA DE LAS PERSONAS MAYORES EN SUS HOGARES</a></h4>
                    </div>
                    <div className="box">
                        <figure>
                            <a href="https://www.vidafp.uma.es/">
                                <img id="vidaes" src={iconF1} alt="vida"/>
                            </a>
                        </figure>
                    </div>
                    <div className="box">
                        <figure>
                        <a href="https://www.vidafp.uma.es/">
                                <img id="uma" src={iconF2} alt="vida"/>
                            </a>
                        </figure>
                   
                    </div>
                    <div className="box">
                        <figure>
                            <a href="https://www.vidafp.uma.es/">
                                <img id="uma" src={iconF3} alt="vida"/>
                            </a>
                        </figure>       
                    </div>
                    <div className="box">
                        <figure>
                            <a href="https://www.vidafp.uma.es/">
                                <img id="uma" src={vida} alt="vida"/>
                            </a>
                        </figure>       
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