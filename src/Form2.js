
import { useState } from 'react';
import Modal from "./Modal";
import FontSizeButton from './FontSizeButton';
import { useNavigate } from "react-router-dom";
import CustomInput from './CustomInput';

const request = async (data) => { 
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
    
    console.log(adapted);
    const rate = Object.values(adapted).filter((value) => value === 'adapted')
    const result = Math.round((rate.length * 100)/13)
    
    if(alert(`Su vivienda se encuentra adaptado en un ${result}%`)){}
else    window.location.reload(); 
  };

function Form2() {
    console.log('FORM2');
    const navigate = useNavigate();
    const [modalOpen1, setmodalOpen1] = useState(false);
    const [modalOpen2, setmodalOpen2] = useState(false);
    const [modalOpen3, setmodalOpen3] = useState(false);
    const [modalOpen4, setmodalOpen4] = useState(false);
    const [modalOpen5, setmodalOpen5] = useState(false);
    const [modalOpen6, setmodalOpen6] = useState(false);
    const [modalOpen7, setmodalOpen7] = useState(false);
    
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
    });

    const handleReset = () => {
        setForm ({input1: '',
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
        input13: '',})
    }

    const handleOpenModal1 = () => {
        setmodalOpen1(true);
      };
      const handleOpenModal2 = () => {
        setmodalOpen2(true);
      };const handleOpenModal3 = () => {
        setmodalOpen3(true);
      };const handleOpenModal4 = () => {
        setmodalOpen4(true);
      };const handleOpenModal5 = () => {
        setmodalOpen5(true);
      };const handleOpenModal6 = () => {
        setmodalOpen6(true);
      };const handleOpenModal7 = () => {
        setmodalOpen7(true);
      };
      
      
      
    return (
        <div id='root'>
        <div className='document'>
                <header className='Header'>
                <img src={require('./img/vidapp.png')} alt="" />
                </header>
            
            {/* <h2>Suelos</h2>
            <fieldset>
                <div className='interior'>
                    <p>
                        <strong>
                            Importante : Echemos un vistazo tanto al material
                            como a la inclinación del mismo, por favor, marque
                            la casilla para habilitar el resto de campos.
                        </strong>
                    </p>
                    <label>
                        <i>
                            En caso que quiera indicar la información en cuanto
                            al suelo interior de su hogar indique el material.
                        </i>
                    </label>{' '}
                    <br></br>
                    <label>Material</label>
                    <input type='text' name='material'  />
                    
                </div>
                <div className='exterior'>
                    <label>
                        <i>
                            Sí se trata del suelo que se encuentra en el exterior de la vivienda indique el material.
                        </i>
                    </label>
                    <br></br>
                    <label>Material</label>
                    <input type='text' name='material'  />
                    
                </div>
            </fieldset> */}
            <h2>Vestíbulos</h2>
            
                <div className='vestibulo'>
                    <div>
                        <p>
                            <strong>
                                Nota explicativa: El espacio libre deberá ser igual 
                            </strong>
                        </p>
                        <label>
                            1. Diametro de circunferencia libre no barrida por las
                            puertas (cm)
                        </label>
                        <CustomInput value={form.input1} onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input1: e.target.value,
                                }))
                            }/>
                        <br></br>
                        <a onClick={handleOpenModal5}>Click aquí para ver la imagen</a>
                    </div>
                </div>
            
            
            <h2>Pasillos</h2>
            
        
                <div className='pasillo'>
                    <p>
                        <strong>
                            Importante: En lo referente al pasillo nos interesa
                            prestar atención al ancho del mismo. Este puede ser
                            de dos formas: misma anchura(anchura libre) a largo
                            de todo el pasillo, o por el contrario, sufrir
                            algún tipo estrechamiento en ciertos puntos
                            (entrechamiento puntual). Por favor, según el caso,
                            marque la casilla para habilitar el resto de campos.
                        </strong>
                    </p>
                    <div className='preguntas'>
                        <label>
                            <i>
                                En caso de que la anchura sea la misma a lo largo de todo el pasillo...
                            </i>
                        </label>
                        <br></br>
                        <label>2. Ancho libre (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input3}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input3: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className='preguntas'>
                        <br></br>
                        <label>
                            <i>
                                En caso de que exista un estrechamiento puntual
                                (como por ejemplo un pilar)
                            </i>
                        </label>
                        <br></br>
                        <label>3. Ancho libre (cm)</label>
                       <CustomInput value={form.input3}/>
                        <br></br>
                        <label>4. Anchura del estrechamiento (cm)</label>
                        <CustomInput value={form.input4}/>
                        <br></br>
                          <label>5. Ancho libre en el punto del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input4}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input4: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className='preguntas'>
                        <label>
                            <i>
                                En caso de que su pasillo tenga una longitud de
                                10 metros o más indique por favor su anchura
                                (cm)
                            </i>
                        </label>
                        <br></br>
                        <label>6. Anchura libre</label>    
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input5}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input5: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            
            <h2>Huecos de paso</h2>
            
         
                

                <div>
                    <label>
                        7. Anchura libre de paso de la puerta de entrada (cm)
                    </label>
                    <input
                        type='number'
                        name='hueco1'
                        value={form.input6}
                        onChange={(e) =>
                            setForm((lastValue) => ({
                                ...lastValue,
                                input6: e.target.value,
                            }))
                        }
                    />
                    <br></br>
                    <a onClick={handleOpenModal4}>Click aquí para ver la imagen</a>

                </div>
                <div>
                    <label>
                        8. Diámetro libre a ambos lados de la puerta de entrada a la vivienda (cm)
                    </label>
                    <input
                        type='number'
                        name='hueco2'
                        value={form.input7}
                        onChange={(e) =>
                            setForm((lastValue) => ({
                                ...lastValue,
                                input7: e.target.value,
                            }))
                        }
                    />
                     <br></br>
                    <a onClick={handleOpenModal6}>Click aquí para ver la imagen</a>
                </div>
                
                <h2>Puertas de accesos interiores</h2>

            
                
 
                    <p>
                        <strong>
                            Importante : En esta sección deberá tomar medidas de
                            los espacios cercanos a la puertas que acceden a las
                            diferentes habitaciones de su hogar
                        </strong>
                    </p>
                    <div className='preguntas'>
                        {/*                         <p>
                            <strong>
                                Importante: En este caso deberá tomar medidas
                                del espacio libre del area que cubre la puerta
                                (al abrir y cerrar) de su hogar.
                            </strong>
                        </p>{' '} */}

                        <div>
                            <label>
                                9. Marque esta casilla en caso de que las puertas
                                interiores tengan un ángulo de 90º o superior
                            </label>
                            <input
                                type='checkbox'
                                name='hueco2'
                                value={form.input14}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input14: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className='preguntas'>
                            <div>
                                <label>
                                    10. Distancia entre el suelo y el pomo (cm)
                                </label>
                                <input
                                    type='number'
                                    name='hueco4'
                                    value={form.input8}
                                    onChange={(e) =>
                                        setForm((lastValue) => ({
                                            ...lastValue,
                                            input8: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            
                            <div className='preguntas'>
                                <br></br>
                                <label>
                                    <i>
                                        En caso de puertas
                                        acristaladas/transaparentes, exista
                                        señalización sobre las mismas
                                    </i>
                                </label>

                                {/* <input
                                    type='checkbox'
                                    name='hueco6'
                                   value={form.input10}
                                    onChange={(e) =>
                                        setForm((lastValue) => ({
                                            ...lastValue,
                                            input10: e.target.value,
                                        }))
                                    }
                                ></input> */}
                                <br></br>
                                <label>11. Anchura de la señalización</label>
                                <input
                                    type='number'
                                    name='hueco6'
                                    value={form.input10}
                                    onChange={(e) =>
                                        setForm((lastValue) => ({
                                            ...lastValue,
                                            input10: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className='preguntas'>
                            <div>
                                <label>
                                    <i>
                                        En caso de puertas de doble filo(puerta
                                        doble) con mecanismo automático (puerta
                                        automática)de apertura y cierre, marque
                                        esta casilla
                                    </i>
                                </label>
                                <br></br>
                                <label>
                                   12. Anchura libre de paso 
                                </label>
                                <input
                                    type='number'
                                    name='hueco6'
                                    value={form.input11}
                                    onChange={(e) =>
                                        setForm((lastValue) => ({
                                            ...lastValue,
                                            input11: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                13. Tiempo estimado para apertura/cierra (segundos)
                            </label>
                            <input
                                type='number'
                                name='hueco6'
                                value={form.input12}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input12: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>
                
            
            <h2>Ventanas</h2>
            
                <p>
                    <strong>
                        Importante: En este campo se hace refrencia a la altura
                        a la que se encuentran en mecanismo de apertura de las
                        ventanas de su hogar. Esta medida se toma desde el suelo
                        hasta la manivela/pomo de la ventana.
                    </strong>
                </p>
                <div>
                    <label>14. Altura del mecanismo de apertura</label>
                    <input
                        type='number'
                        name='alturaV'
                        value={form.input13}
                        onChange={(e) =>
                            setForm((lastValue) => ({
                                ...lastValue,
                                input13: e.target.value,
                            }))
                        }
                    />
                     <br></br>
                    <a onClick={handleOpenModal2}>Click aquí para ver la imagen</a>                    
                </div>
            
            <div className='submitDiv'>
                <button
                    type='submit'
                    className='submit'
                    onClick={async () => {
                        const data = await request(form);
                        setForm(data);
                    }}
                >
                    Calcular
                </button>
            </div>
            <div className='resettDiv'>
                <button
                    type='submit'
                    className='submit'
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <div>
            <a><img onClick={() => navigate("/") } className="home" src={require('./img/iconos/hogar.png')} alt="" /></a>
            </div>

            <FontSizeButton/>

        </div>
        <Modal estado={modalOpen1} setEstado={setmodalOpen1}>
            <img className="modalImg" src={require('./img/alturaPomo.jpg')} alt="" />
        </Modal>
        <Modal estado={modalOpen2} setEstado={setmodalOpen2}>
            <img className="modalImg" src={require('./img/formulario/personal/alturaVentana.jpg')} alt="" />
        </Modal>   
        <Modal estado={modalOpen3} setEstado={setmodalOpen3}>
            <img className="modalImg" src={require('./img/formulario/personal/anchoPaso.jpg')} alt="" />
        </Modal>   
        <Modal estado={modalOpen4} setEstado={setmodalOpen4}>
            <img className="modalImg" src={require('./img/formulario/personal/anchura.jpg')} alt="" />
        </Modal>   
        <Modal estado={modalOpen5} setEstado={setmodalOpen5}>
            <img className="modalImg" src={require('./img/formulario/personal/diametroLibre.jpg')} alt="" />
        </Modal>
        <Modal estado={modalOpen6} setEstado={setmodalOpen6}>
            <img className="modalImg" src={require('./img/formulario/personal/diametroLibre(ambos).jpg')} alt="" />
        </Modal>
        <Modal estado={modalOpen7} setEstado={setmodalOpen7}>
            <img className="modalImg" src={require('./img/formulario/personal/pasilloEstrechamiento.jpg')} alt="" />
        </Modal>
                      
    </div>
    );
}
export default Form2;
