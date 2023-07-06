
import React, { useState } from 'react';
import './carousel.css'
import FontSizeButton from './FontSizeButton';
import { useNavigate } from "react-router-dom";
import { List } from './list'
import Modal from './Modal';
import logo from "./img/logo.png";



function FieldsetCarousel({ estado, setEstado}) {
  const [modalOpen1, setmodalOpen1] = useState(false);
  const [modalOpen2, setmodalOpen2] = useState(false);
  const [modalOpen3, setmodalOpen3] = useState(false);
  const [modalOpen4, setmodalOpen4] = useState(false);
  const [modalOpen5, setmodalOpen5] = useState(false);
  const [modalOpen6, setmodalOpen6] = useState(false);
  const [modalOpen7, setmodalOpen7] = useState(false);

  const handleOpenModal1 = () => {
    setmodalOpen1(true);
  };
  const handleOpenModal2 = () => {
    setmodalOpen2(true);
  };  const handleOpenModal3 = () => {
    setmodalOpen3(true);
  };  const handleOpenModal4 = () => {
    setmodalOpen4(true);
  };  const handleOpenModal5 = () => {
    setmodalOpen5(true);
  };  const handleOpenModal6 = () => {
    setmodalOpen6(true);
  };const handleOpenModal7 = () => {
    setmodalOpen7 (true);
  };
 
  const navigate = useNavigate();
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
const calculate = (data) => {
  const rules = {
    input1: { min: 150},
    input2: { min: 150},
    input3: { min: 120},
    input4: { min: 100},
    input5: { min: 150},
    input6: { min: 80},
    input7: { min: 120},
    input8: { min: 120},
    input9: { min: 120},
    input10: { min: 5},
    input11: { min: 80},
    input12: { min: 15},
    input13: { min: 80, max: 110},
    input14: { min: 15},
  }
  
  
    const adapted =  Object.keys(data).reduce((acc, key) => {
    const { min, max } = rules[key]
    const value = data[key]
    if (value < min || value > max) {
        acc[key] = 'unadapted'
    } else {
        acc[key] = 'adapted'
    }
    return acc
  }, {})
  
  console.log("Adapted: " ,adapted);
  const rate = Object.values(adapted).filter((value) => value === 'adapted');
  console.log("Rate: ", rate);
  const resultado = Math.round((rate.length * 100)/14);
  navigate(`/resultado/${resultado}`)
  
}
const handlePrev = () => {
  setEstado(estado === 0 ? List.length - 1 : estado - 1);
};

const handleNext = () => {
  setEstado(estado === List.length - 1 ? 0 : estado + 1);
};

  return (

    <div className="fieldset-carousel">
      <header className='header'>
        <a onClick={() => navigate("/") }><img  src={logo} className="logoVida" alt="logoVida" /></a>
      </header>
      <form className='form'>
        <fieldset>
        { List[estado](form, setForm, { onOpenModal1: handleOpenModal1, onOpenModal2: handleOpenModal2, onOpenModal3: handleOpenModal3,  onOpenModal4: handleOpenModal4,  onOpenModal5: handleOpenModal5,  onOpenModal6: handleOpenModal6,  onOpenModal7: handleOpenModal7  } )}
          
        </fieldset>
      </form>
      <div className="arrows">
        <img alt='img' className='arrow' src={require('./img/formulario/prev.png')} onClick={handlePrev}/>
        <img alt='img' className='arrow' src={require('./img/formulario/next.png')} onClick={handleNext}/>
      </div>
      <div className='submitDiv'>
        <button onClick={() => calculate(form)} className='button'>Calcular</button>
      </div>
      {/* <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="img" /></a> */}
      <FontSizeButton/>
      <Modal estado={modalOpen1} setEstado={setmodalOpen1}>
        <a><img className="modalImg" src={require('./img/diametroLibre.jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen2} setEstado={setmodalOpen2}>
        <a><img className="modalImg" src={require('./img/pasilloEstrechamiento.jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen3} setEstado={setmodalOpen3}>
        <a><img className="modalImg" src={require('./img/anchoPaso.jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen4} setEstado={setmodalOpen4}>
        <a><img className="modalImg" src={require('./img/diametroLibre(ambos).jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen5} setEstado={setmodalOpen5}>
        <a><img className="modalImg" src={require('./img/alturaPomo.jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen6} setEstado={setmodalOpen6}>
        <a><img className="modalImg" src={require('./img/anchura.jpg')} alt="" /></a>
      </Modal>
      <Modal estado={modalOpen7} setEstado={setmodalOpen7}>
        <a><img className="modalImg" src={require('./img/alturaVentana.jpg')} alt="" /></a>
      </Modal>
    </div>
                
  );
};


export default FieldsetCarousel;

