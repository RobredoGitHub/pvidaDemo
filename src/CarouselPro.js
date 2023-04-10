
import React, { useState } from 'react';
import './carousel.css'
import Modal from "./Modal";
import FontSizeButton from './FontSizeButton';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import { ListPro } from './listPro'


function FieldsetCarouselPro({ estado, setEstado }) {

  const [form, setForm] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: ''
});


const navigate = useNavigate();

  const handlePrev = () => {
    setEstado(estado === 0 ? ListPro.length - 1 : estado - 1);
  };

  const handleNext = () => {
    setEstado(estado === ListPro.length - 1 ? 0 : estado + 1);
  };


  return (

    <div className="fieldset-carousel">
      <header className='Header'>
                <img src={require('./img/vidapp.png')} alt="" />
                </header>
      <form>
        <fieldset>
        { ListPro[estado](form, setForm)}
        </fieldset>
      </form>
      <div className="arrows">
        <img className='arrow' src={require('./img/formulario/prev.png')} onClick={handlePrev}/>
        <img className='arrow' src={require('./img/formulario/next.png')} onClick={handleNext}/>
      </div>
      <div className='submitDiv'>
        <button className='button'>Calcular</button>
      </div>
      <a><img onClick={() => navigate("/")} className="home" src={require('./img/iconos/hogar.png')} alt="" /></a>
      <FontSizeButton/>   
    </div>
                
  );
};

export default FieldsetCarouselPro;
