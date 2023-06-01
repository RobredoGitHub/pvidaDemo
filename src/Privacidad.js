import React from "react";
import { useParams } from 'react-router-dom';
import "./pages/home.css"
// import FontSizeButton from './FontSizeButton';
import { useNavigate } from "react-router-dom";
import iconF1 from "./img/footer/PROYECTOV.png";
import iconF2 from "./img/footer/JUNTA.png";
import iconF3 from "./img/footer/UMA.png";
import iconF4 from "./img/footer/VIDA.png";
import twitter from "./img/redes/twitter.png";
import youtube from "./img/redes/youtube.png";
import facebook from "./img/redes/facebook.png";
import instagram from "./img/redes/instagram.png";



function Privacidad() {
    const navigate = useNavigate();

    return (
    <div>   
        <div className="Privacidad-container">
            <h2>Política de Privacidad</h2>
            <br></br>
            <div className="Privacidad-main">
                <p className="Privacidad-p">Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal que se obtiene a través de [nombre de tu sitio web] ("nosotros", "nuestro" o "el sitio web"). Al utilizar este sitio web, estás aceptando las prácticas descritas en esta Política de Privacidad.</p>
                <br></br>
                <h3>Recopilación de información</h3>
                <p className="Privacidad-p">
                Recopilamos información personal cuando los usuarios proporcionan voluntariamente dicha información a través de formularios de contacto, suscripciones al boletín informativo u otras interacciones con el sitio web. La información recopilada puede incluir, entre otros, el nombre, la dirección de correo electrónico y cualquier otra información que los usuarios decidan proporcionar.</p>
                <br></br>
                <h3>Uso de la información</h3>
                <p className="Privacidad-p">
                La información personal recopilada se utilizará únicamente con el propósito de proporcionar información, servicios y recursos relacionados con la adaptación del hogar a personas con movilidad reducida. Podemos utilizar la información para responder a consultas, enviar actualizaciones periódicas, procesar solicitudes de servicio y mejorar la experiencia del usuario en el sitio web.</p>
                <br></br>
                <h3>Protección de la información</h3>
                <p className="Privacidad-p">
                Nos comprometemos a proteger la información personal recopilada a través del sitio web. Hemos implementado medidas de seguridad razonables para salvaguardar y proteger la información contra el acceso no autorizado, la divulgación o la alteración.</p>
                <br></br>
                <h3>Divulgación a terceros</h3>
                <p className="Privacidad-p">
                No compartiremos, venderemos ni alquilaremos información personal a terceros sin el consentimiento expreso de los usuarios, excepto cuando sea necesario para cumplir con las leyes aplicables o en respuesta a una orden judicial u otra solicitud legal.</p>
                <br></br>
                <h3>Cambios en la Política de Privacidad</h3>
                <p className="Privacidad-p">
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio en esta política será publicado en esta página. Se recomienda a los usuarios que revisen periódicamente esta página para estar informados sobre las prácticas de privacidad más recientes.</p>
                <br></br>
    <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="img" /></a>
            </div>
            
        </div>
        <footer className="pie-pagina">
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
                    <div className="redes">
                        {/* <ul> 
                            <li>
                                <a id="youtube"><img src={youtube} alt=""/></a>
                            </li>
                            <li>
                                <a id="twitter"><img src={twitter} alt=""/></a>
                            </li>
                            <li>
                                <a id="instagram"><img src={instagram} alt=""/></a>
                            </li>
                            <li>
                                <a id="facebook"><img src={facebook} alt=""/></a>
                            </li>                            
                        </ul> */}
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

export default Privacidad;