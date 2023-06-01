import React from "react"
// import Form from "./Form"
// import Form2 from "./Form2"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Home from "./pages/Home"
import Paint from "./Paint"
import PaintPro from "./PaintPro"
import Resultado from "./Resultado"
import Manual from "./Manual"
import Cookies from "./Cookies"
import Privacidad from "./Privacidad"


function App(){
    return(
    <Router>
        <Routes>
            <Route path="resultado/:resultado" element={<Resultado/>}/>
            <Route path="carrusel-profesional" element={<PaintPro/>}/>
            <Route path="carrusel-personal" element={<Paint/>}/>
            <Route path="manual-de-uso" element={<Manual/>} />
            <Route path="politica-de-cookies" element={<Cookies/>} />
            <Route path="politica-de-privacidad" element={<Privacidad/>} />
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>

    )
     
}

export default App