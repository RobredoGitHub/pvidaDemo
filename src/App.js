import React from "react"
import Form from "./Form"
import Form2 from "./Form2"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Home from "./pages/Home"
import Paint from "./Paint"
import PaintPro from "./PaintPro"
import Resultado from "./Resultado"


function App(){
    return(
    <Router>
        <Routes>
            {/* <Route path="/resultado/:resultado" component={Resultado} /> */}
            <Route path="resultado/:resultado" element={<Resultado/>}/>
            <Route path="carrusel-profesional" element={<PaintPro/>}/>
            <Route path="carrusel-personal" element={<Paint/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>

    )
     
}

export default App