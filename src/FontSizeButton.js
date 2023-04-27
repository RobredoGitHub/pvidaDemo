import React from 'react';
import { useState,useEffect } from 'react';

function FontSizeButton() {
 
    const [isLarge, setIsLarge] = useState(false);

    var inputElement = document.getElementById("myInput");

    const handleButtonClick = () => {
    setIsLarge(prevState => !prevState);
    document.body.style.fontSize = 'xx-large'   
  }

  useEffect(() => {
    const formElement = document.querySelector('.form');

    if (formElement) {
      formElement.style.fontSize = isLarge ? '35px' : '25px';
    }

  }, [isLarge]);
  


  return (
    <button className='fontSizeButton' onClick={handleButtonClick}>
      Aumentar tamaño de fuente
    </button>
  );
}

export default FontSizeButton;
