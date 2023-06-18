import React from "react";
import { useParams } from 'react-router-dom';
import "./pages/home.css"
// import FontSizeButton from './FontSizeButton';
import { useNavigate } from "react-router-dom";
import iconF1 from "./img/footer/proyectov.png";
import iconF2 from "./img/footer/junta.png";
import iconF3 from "./img/footer/uma.png";
import iconF4 from "./img/footer/vida.png";
// import twitter from "./img/redes/twitter.png";
// import youtube from "./img/redes/youtube.png";
// import facebook from "./img/redes/facebook.png";
// import instagram from "./img/redes/instagram.png";



function Cookies() {
    const navigate = useNavigate();

    return (
    <div>   
        <div className="Cookies-container">
            <h2>Política de cookies</h2>
            <br></br>
            <div className="Cookies-main">
                <p className="Cookies-p">Esta política de cookies explica cómo [Nombre de la página web] ("nosotros", "nuestro" o "nos") utiliza cookies y tecnologías similares cuando visitas nuestro sitio web relacionado con la adaptación del hogar a personas con movilidad reducida (en adelante, "el Sitio").</p>
                <br></br>
                <h3>¿Qué son las cookies?</h3>
                <p className="Cookies-p">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estas cookies ayudan a mejorar tu experiencia de navegación al recordar tus preferencias y proporcionar información anónima sobre cómo interactúas con el Sitio.</p>
                <br></br>
                <h3>¿Qué tipos de cookies utilizamos?</h3>
                <p className="Cookies-p">
                Una vez que hayas completado la configuración, la aplicación te llevará a la pantalla principal, donde podrás comenzar a responder las preguntas del cuestionario. Para hacerlo, utiliza el carrusel de preguntas que aparece en pantalla.</p>
                <br></br>
                <h3>¿Cómo puedes controlar las cookies?</h3>
                <p className="Cookies-p">
                Puedes controlar y administrar las cookies en tu navegador web. La mayoría de los navegadores te permiten configurar tus preferencias de cookies a través de la configuración del navegador. Ten en cuenta que si optas por desactivar o eliminar ciertas cookies, es posible que algunas funciones del Sitio no estén disponibles o que tu experiencia de navegación se vea afectada.</p>
                <br></br>
                <h3>Cambios en nuestra política de cookies</h3>
                <p className="Cookies-p">
                Nos reservamos el derecho de actualizar esta política de cookies en cualquier momento. Cualquier cambio que realicemos se publicará en esta página con una fecha de actualización revisada. Te recomendamos que revises periódicamente esta política para estar informado sobre cómo utilizamos las cookies.</p>
                <br></br>
                <p className="Cookies-p">
                Además de las opciones de configuración del navegador, también puedes utilizar herramientas de terceros para controlar las cookies, como las opciones de privacidad disponibles en algunos navegadores o herramientas de bloqueo de cookies.</p>
    <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="img" /></a>
            </div>
            
        </div>
        <footer className="pie-pagina">
                <div className="grupo1">
                    <div className="box">
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("/manual-de-uso")}>Manual de uso del usuario</a>
                        </div>
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("/politica-de-privacidad")}>Política de privacidad</a>
                        </div>
                        <div className="links"> 
                            <a className="link" onClick={() => navigate("/politica-de-cookies")}>Política de cookies</a>
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
        </footer>
    </div>     
            
        )
    
}

export default Cookies;