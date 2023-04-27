
import React, { useState } from 'react';
import './carousel.css'
import FontSizeButton from './FontSizeButton';
import { useNavigate } from "react-router-dom";
import { List } from './list'



function FieldsetCarousel({ estado, setEstado}) {
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
// const history = useHistory();
// const [result, setResult] = useState(40)
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
      <header className='Header'>
                <img  src={require('./img/vidapp.png')} alt="img" />
                </header>
      <form className='form'>
        <fieldset>
        { List[estado](form, setForm)}
        </fieldset>
      </form>
      <div className="arrows">
        <img alt='img' className='arrow' src={require('./img/formulario/prev.png')} onClick={handlePrev}/>
        <img alt='img' className='arrow' src={require('./img/formulario/next.png')} onClick={handleNext}/>
      </div>
      <div className='submitDiv'>
        <button onClick={() => calculate(form)} className='button'>Calcular</button>
      </div>
      <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="img" /></a>
      <FontSizeButton/>
    </div>
                
  );
};



export default FieldsetCarousel;

