import './Form.css';
import { useState } from 'react';




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

function Form() {
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
                            como a la inclinaci??n del mismo, por favor, marque
                            la casilla para habilitar el resto de campos.
                        </strong>
                    </p>
                    <label>
                        <i>
                            En caso que quiera indicar la informaci??n en cuanto
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
                            S?? se trata del suelo que se encuentra en el exterior de la vivienda indique el material.
                        </i>
                    </label>
                    <br></br>
                    <label>Material</label>
                    <input type='text' name='material'  />
                    
                </div>
            </fieldset> */}
            <h2>Vest??bulos</h2>
            
                <div className='vestibulo'>
                    <div>
                        <p>
                            <strong>
                                Nota explicativa: El espacio libre deber?? ser igual 
                            </strong>
                        </p>
                        <label>
                            1. Diametro de circunferencia libre no barrida por las
                            puertas (cm)
                        </label>
                        <input
                            type='number'
                            name='vestibulo2'
                            value={form.input1}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input1: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <img className='img' src={require('./img/vestibulo.jpg')} alt="" />
                    
                </div>
            
            
            <h2>Pasillos</h2>
            
        
                <div className='pasillo'>
                    <p>
                        <strong>
                            Importante: En lo referente al pasillo nos interesa
                            prestar atenci??n al ancho del mismo. Este puede ser
                            de dos formas: misma anchura(anchura libre) a largo
                            de todo el pasillo, o por el contrario, sufrir
                            alg??n tipo estrechamiento en ciertos puntos
                            (entrechamiento puntual). Por favor, seg??n el caso,
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
                        <br></br>
                        <label>4. Anchura del estrechamiento (cm)</label>
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
                                10 metros o m??s indique por favor su anchura
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
                </div>
                <img className='img' src={require('./img/puertas.jpg')} alt="" />
                <div>
                    <label>
                        8. Di??metro libre a ambos lados de la puerta de entrada a la vivienda (cm)
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
                </div>
                <img className='img' src={require('./img/q1.jpg')} alt="" />
                
                <h2>Puertas de accesos interiores</h2>

            
                
 
                    <p>
                        <strong>
                            Importante : En esta secci??n deber?? tomar medidas de
                            los espacios cercanos a la puertas que acceden a las
                            diferentes habitaciones de su hogar
                        </strong>
                    </p>
                    <div className='preguntas'>
                        {/*                         <p>
                            <strong>
                                Importante: En este caso deber?? tomar medidas
                                del espacio libre del area que cubre la puerta
                                (al abrir y cerrar) de su hogar.
                            </strong>
                        </p>{' '} */}

                        <div>
                            <label>
                                9. Marque esta casilla en caso de que las puertas
                                interiores tengan un ??ngulo de 90?? o superior
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
                                        se??alizaci??n sobre las mismas
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
                                <label>11. Anchura de la se??alizaci??n</label>
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
                                        doble) con mecanismo autom??tico (puerta
                                        autom??tica)de apertura y cierre, marque
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
                </div>
                <img className='img' src={require('./img/mecanismo.jpg')} alt="" />
                
            
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
        </div>    
    </div>
    );
}
export default Form;
