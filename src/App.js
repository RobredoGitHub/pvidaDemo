import React from "react"
import Form from "./Form"
import Modal from "./Modal"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
import Home from "./pages/Home"

function App(){
    return(
    <Router>
        <Routes>
            <Route path="/intro" element={<Modal/>}/>
            <Route path="formulario" element={<Form/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>

    )
     
}

export default App