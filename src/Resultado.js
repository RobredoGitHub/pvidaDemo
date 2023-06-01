import React from "react";
import { useParams } from 'react-router-dom';
import catalogo from './img/catalogo.pdf'


function Resultado() {
const { resultado } = useParams();


    return (
    <div id="container">
        <div className="resultado" style={{padding: "2px"} }>
            <h1 id="centered-text">Su casa se encuentra adaptada en un {resultado}%</h1>
        </div>
        <div className="catalogo">
                <p><strong>Encuentre aquí algunas recomendaciones para adaptar su hogar</strong></p>
                {/* <a href={catalogo} target="_blank">Catálogo aquí</a> */}
             </div>
        
    </div>
        
    )
    
            
        
    
}

export default Resultado