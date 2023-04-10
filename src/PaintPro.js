import FieldsetCarousel from "./Carousel";
import  { useState } from 'react';
import Modal from "./Modal";
import React from "react";
import FieldsetCarouselPro from "./CarouselPro";

const PaintPro = () => {
    const [modalOpen1, setmodalOpen1] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);


          return (
        <div>
          <FieldsetCarouselPro estado={activeIndex} setEstado={setActiveIndex} />
          <Modal estado={modalOpen1} setEstado={setmodalOpen1}>
                <h3>Aviso </h3>
                <p>
                Para el mejor uso de esta herramienta le aconsejamos tenga a mano una cinta de medir con la que pueda tomar medidas de diferentes espacios con los que cuenta su vivienda. 
                </p>
        </Modal>    
        </div>
      );
    
    }

    export default PaintPro; 