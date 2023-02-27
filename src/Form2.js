import './Form.css';
import { useState } from 'react';
import Refresh from './Refresh';



// function OpenModal(){
//     const [active, setActive] = useState(false);
    
//      const toggle = () => {
//         setActive(!active)
//      }
//      return (
//         <div className='img'>
//             <button onClick={toggle}>Imagen</button>
//             <Modal active={active} toggle={toggle}>
//                 {/* <img src="./img/q1.png" alt='diametro'></img> */}
//                 <h1>Hola</h1>
//             </Modal>
//         </div>
//      )
// }

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
    const [Form2, setForm2] = useState({
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
                            En caso que quiera indicar la inForm2ación en cuanto
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
                        <label>
                            1. Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que puede caber dentro del espacio de vestíbulo o entrada de la vivienda, estando todas las puertas abiertas.
                        </label>
                        <input
                            type='number'
                            name='vestibulo2'
                            value={Form2.input1}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
                                    ...lastValue,
                                    input1: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            
            
            <h2>Pasillos</h2>
            
        
                <div className='pasillo'>
                    <p>
                        <strong>
                            Importante: En lo referente al pasillo 
                            nos interesa prestar atención al ancho libre del mismo, 
                            es decir, al espacio despejado para caminar a través de
                            él. El pasillo puede ser de dos formas: 
                        </strong>
                    </p>
                    <div className='preguntas'>
                        <label>
                            <i>
                            Misma anchura (espacio despejado de paso) a largo de todo el pasillo, es decir, el ancho del pasillo no varía en ningún momento
                            </i>
                        </label>
                        <br></br>
                        <label>2. Ancho libre (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={Form2.input3}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
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
                            O por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (estrechamiento puntual),
                            como puede ser un pilar, un elemento de la pared, un mueble, etc; en dicho punto el pasillo pasa 
                            a tener un espacio despejado de paso de menor tamaño.

                            </i>
                        </label>
                        <br></br>
                        <label>3. Ancho libre (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={Form2.input3}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
                                    ...lastValue,
                                    input3: e.target.value,
                                }))
                            }
                        />
                        <br></br>
                        <label>4. Anchura del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={Form2.input4}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
                                    ...lastValue,
                                    input4: e.target.value,
                                }))
                            }
                        />
                        <br></br>
                          <label>5. Ancho libre en el punto del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={Form2.input4}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
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
                            value={Form2.input5}
                            onChange={(e) =>
                                setForm2((lastValue) => ({
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
                        7.  Con la puerta de entrada a la vivienda totalmente abierta, mida en centímetros el ancho del hueco que queda para pasar a través de ella.
                    </label>
                    <input
                        type='number'
                        name='hueco1'
                        value={Form2.input6}
                        onChange={(e) =>
                            setForm2((lastValue) => ({
                                ...lastValue,
                                input6: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label>
                        8. Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que puede caber a ambos lados de la puerta de entrada de la vivienda.
                    </label>
                    <input
                        type='number'
                        name='hueco2'
                        value={Form2.input7}
                        onChange={(e) =>
                            setForm2((lastValue) => ({
                                ...lastValue,
                                input7: e.target.value,
                            }))
                        }
                    />
                </div>
                
                <h2>Puertas de accesos interiores</h2>

            
                
 
                    <p>
                        <strong>
                        Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.
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
                            9. Si las puertas que dan acceso a las habitaciones de su hogar pueden abrirse 90º o más (hasta formar una L o más), marque esta casilla. 
                            </label>
                            <input
                                type='checkbox'
                                name='hueco2'
                                value={Form2.input14}
                                onChange={(e) =>
                                    setForm2((lastValue) => ({
                                        ...lastValue,
                                        input14: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className='preguntas'>
                            <div>
                                <label>
                                10. Indique en centímetros la distancia vertical entre el pomo de la puerta y el suelo, es decir, la altura a la que se encuentra el pomo. 
                                </label>
                                <input
                                    type='number'
                                    name='hueco4'
                                    value={Form2.input8}
                                    onChange={(e) =>
                                        setForm2((lastValue) => ({
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
                                    En caso de que su hogar tenga puertas acristaladas o ventanales y sobre el vidrio exista algún vinilo o pegatina de señalización, rellene estos apartados:
                                    </i>
                                </label>

                                {/* <input
                                    type='checkbox'
                                    name='hueco6'
                                   value={Form2.input10}
                                    onChange={(e) =>
                                        setForm2((lastValue) => ({
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
                                    value={Form2.input10}
                                    onChange={(e) =>
                                        setForm2((lastValue) => ({
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
                                    En caso de que en su hogar tenga puertas de apertura automática, rellene estos apartados: 
                                    </i>
                                </label>
                                <br></br>
                                <label>
                                12. Mida en centímetros el ancho del hueco que queda para pasar a través de ella.

                                </label>
                                <input
                                    type='number'
                                    name='hueco6'
                                    value={Form2.input11}
                                    onChange={(e) =>
                                        setForm2((lastValue) => ({
                                            ...lastValue,
                                            input11: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                            13. Indique en segundos el tiempo estimado que transcurre entre que se abre y se vuelve a cerrar. 
                            </label>
                            <input
                                type='number'
                                name='hueco6'
                                value={Form2.input12}
                                onChange={(e) =>
                                    setForm2((lastValue) => ({
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
                    Importante: En este campo se hace referencia a la altura a la que se encuentran 
                    en mecanismo de apertura de las ventanas de su hogar. Esta medida se toma desde 
                    el suelo hasta el pomo, manivela o hendidura que se use para abrir y cerrar la ventana.
                    </strong>
                </p>
                <div>
                    <label>14. Indique en centímetros la distancia vertical entre el suelo y el elemento de apertura de la ventana, es decir, la altura a la que se encuentra.</label>
                    <input
                        type='number'
                        name='alturaV'
                        value={Form2.input13}
                        onChange={(e) =>
                            setForm2((lastValue) => ({
                                ...lastValue,
                                input13: e.target.value,
                            }))
                        }
                    />
                </div>
            <div className='submitDiv'>
                <button
                    type='submit'
                    className='submit'
                    onClick={async () => {
                        const data = await request(Form2);
                        setForm2(data);
                    }}
                >
                    Calcular
                </button>
            </div>
        </div>    
    </div>
    );
}
export default Form2;
