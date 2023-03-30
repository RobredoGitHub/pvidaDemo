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
    document.body.style.fontSize = isLarge ? '25px' : '35px';
    // inputElement.style.height = isLarge ? '25px' : '35px';

  }, [isLarge]);
  


  return (
    <button className='fontSizeButton' onClick={handleButtonClick}>
      Aumentar tamaño de fuente
    </button>
  );
}

export default FontSizeButton;
