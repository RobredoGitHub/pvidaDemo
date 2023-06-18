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


function Manual() {
    const navigate = useNavigate();

    return (
    <div>   
        <div className="manual-container">
            <h2>Manual de uso</h2>
            <br></br>
            <div className="manual-main">
                <p className="manual-p">¡Bienvenido a la aplicación de medidas para adaptar tu hogar! Esta aplicación ha sido diseñada para ayudarte a determinar el porcentaje de adaptabilidad de tu hogar a personas con movilidad reducida. A continuación, te ofrecemos una guía paso a paso para que puedas utilizar la aplicación de manera efectiva.</p>
                <br></br>
                <h3>Navegación</h3>
                <p className="manual-p">
                el formulario funciona como un carrusel que muestra preguntas relacionadas con diferentes del hogar, para moverte entre las preguntas dispondrá de dos flechas apuntando hacia la izquierda y derecha, solo debes hacer click sobre ellas. </p>
                <br></br>
                <h3>Comenzando el Cuestionario</h3>
                <p className="manual-p">Una vez que hayas completado la configuración, la aplicación te llevará a la pantalla principal, donde podrás comenzar a responder las preguntas del cuestionario. Para hacerlo, utiliza el carrusel de preguntas que aparece en pantalla.</p>
                <br></br>
                <h3>Responder las Preguntas</h3>
                <p className="manual-p">Cada pregunta del cuestionario se refiere a una zona diferente de tu hogar. Deberás responder cada una de ellas proporcionando medidas específicas. Es importante que las medidas sean precisas para que la aplicación pueda calcular con exactitud el porcentaje de adaptabilidad de tu hogar.</p>
                <br></br>
                <h3>Visualización de Resultados</h3>
                <p className="manual-p">Una vez que hayas respondido todas las preguntas, la aplicación te proporcionará el porcentaje de adaptabilidad de tu hogar. Además, podrás visualizar un gráfico que muestra en qué áreas de tu hogar debes mejorar la accesibilidad.</p>
                <br></br>
                <h3>Compartir Resultados</h3>
                <p className="manual-p">Si lo deseas, puedes compartir los resultados de la aplicación con familiares o amigos. Para hacerlo, utiliza la función de compartir que se encuentra en la pantalla de resultados.</p>
                <br></br>
                <h3>Actualizar Datos</h3>
                <p className="manual-p">Si necesitas actualizar los datos que has proporcionado en el cuestionario, podrás hacerlo desde la pantalla principal de la aplicación.</p>
                <br></br>
                <h3>Conclusión</h3>
                <p className="manual-p">La aplicación de medidas para adaptar tu hogar es una herramienta útil y fácil de usar que te ayudará a determinar el porcentaje de adaptabilidad de tu hogar a personas con movilidad reducida. Sigue estos simples pasos y podrás utilizar la aplicación de manera efectiva y obtener resultados precisos.</p>
    {/* <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="img" /></a> */}
            </div>
            
        </div>
        <footer className="footer2">
                <div className="grupo1">
                    <div className="box">
                        <div className="links"> 
                            <a className="link">Manual de uso del usuario</a>
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

export default Manual;