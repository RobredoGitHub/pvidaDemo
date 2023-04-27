import React from "react";
import { useParams } from 'react-router-dom';


function Resultado() {
const { resultado } = useParams();


    return <div id="container" style={{padding: "2px"} }><h1 id="centered-text">Su casa se encuentra adaptada en un {resultado}%</h1></div>; 
        
    
}

export default Resultado