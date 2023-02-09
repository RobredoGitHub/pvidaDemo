import React from "react";
import "./home.css";
import logo from "../img/vidapp.png";
import vida from "../img/footer/Logo-Proyecto-Vida.png"
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    return (

    <div>
            <header className='Header'>
            <h1>Bienvenido a</h1>
            <img src={logo} alt="" />
   
    </header>
        <h3>Por favor indique su perfil para entrar en la aplicación</h3>
            <div className="flex-container">
                <button onClick={() => navigate("./intro")} className="btn1">Uso profesional</button>
                <button onClick={() => navigate("./intro")} className="btn2">Adaptabilidad de mi hogar</button>
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
                            <a href="https://es-es.facebook.com/" target="_blank" rel="noreferrer" className="fa fa-facebook">F</a>
                            <a href="https://www.instagram.com/"  target="_blank" rel="noreferrer" className="instagram">I</a>
                            <a href="https://twitter.com/?lang=es" className="twitter" target="_blank" rel="noreferrer" >T</a>
                            <a href="https://www.youtube.com/" className="youtube" target="_blank" rel="noreferrer" >Y</a>
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