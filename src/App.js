import React from "react"
import Form from "./Form"
import Form2 from "./Form2"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Home from "./pages/Home"


function App(){
    return(
    <Router>
        <Routes>
            <Route path="formulario-personal" element={<Form2/>}/>
            <Route path="formulario-profesional" element={<Form/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>

    )
     
}

export default App