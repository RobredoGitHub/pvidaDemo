import './Slider.css';

function Slider() {

    return (
<div> 
    <header className='Header'>
        <h1>
    Herramienta para la medición y adaptación de la vivienda en
    interiores
        </h1>
    </header>
    <div className="fakeBody">
        <ul className="slider">
            <li>
                <input type="radio" id="sbutton4" name="sradio"/>
                <label for="sbutton4"></label>
    
                <fieldset className="fieldset">
     
                    <h2>Puertas interiores</h2>
                    <div className='puertas'>
                        <p>
                            <strong>
                                Importante: En este caso deberá tomar medidas
                                del espacio libre del area que cubre la puerta
                                (al abrir y cerrar) de su hogar.
                            </strong>
                        </p>
    
                        <div>
                            <label>
                                Marque esta casilla en caso de que las puertas
                                interiores tengan un ángulo de 90º o superior
                            </label>
                            
                        </div>
                        <div className='apertura'>
                            <div>
                                <label>
                                    Distancia entre el suelo y el pomo (cm)
                                </label>
                                <br></br>
                                <input
                                    type='number'
                                    name='hueco4'
                                    
                                />
                            </div>
                            <div>
                                <label>
                                    Separación del picaporte al plano de la
                                    puerta (cm)
                                </label>
                                <br></br>
                                <input
                                    type='number'
                                    name='hueco5'
                                   
                                />
                            </div>
                            <div>
                                <label>
                                    <i>
                                        En caso de puertas
                                        acristaladas/transaparentes, existe
                                        señalización sobre las mismas
                                    </i>
                                </label>
                                <label>Anchura de la señalización</label>
                                <br></br>
                                <input
                                    type='number'
                                    name='hueco6'
                                   
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>
                                    <i>
                                        En caso de puertas de doble filo(puerta
                                        doble) con mecanismo automático (puerta
                                        automática)de apertura y cierre, marque
                                        esta casilla
                                    </i>
                                </label>
                                <label>
                                    Anchura máxima de paso entre ellas
                                </label>
                                <br></br>
                                <input
                                    type='number'
                                    name='hueco6'
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                Tiempo estimado para apertura/cierra (segundos)
                            </label>
                            <br></br>
                            <input
                                type='number'
                                name='hueco6'
                               
                            />
                        </div>
                    </div>
                </fieldset>
            </li>
            <li>
                <input type="radio" id="sbutton1" name="sradio" checked/>
                <label for="sbutton1"></label>
                <fieldset classNamename="fieldset">
                    <div className='vestibulo'>
                        <h2>Vestíbulo</h2>
                        <div>    
                            <p>
                                <strong>
                                    Importante: En lo referente al pasillo nos interesa
                                    prestar atención al ancho del mismo. Este puede ser
                                    de dos formas misma anchura(anchura libre) a largo
                                    de todo el corredor, o por el contrario, sufrir
                                    algún tipo estrechamiento en ciertos puntos
                                    (entrechamiento puntual). Por favor, según el caso,
                                    marque la casilla para habilitar el resto de campos.
                                </strong>
                            </p>
                            <label>
                                Diametro de circunferencia libre no barrida por las
                                puertas (cm)
                            </label>
                            <br></br>
                            <input
                                type='number'
                                name='vestibulo2'
                              
                            />
                        </div>
                        <div>
                            <label>
                                <i>
                                    En caso de ascensor marque aquí la misma medida
                                    que en el caso anterior ( Diametro de
                                    circunferencia libre no barrida por las puertas
                                    del mismo) (cm)
                                </i>
                            </label>
                            <br></br>
                            <input
                                type='number'
                                name='vestibulo2'
                                
                            />
                        </div>
                    </div>
                </fieldset>
    
            </li>
            <li>
                <input type="radio" id="sbutton2" name="sradio"/>
                <label for="sbutton2"></label>
                <fieldset classNamename="fieldset">
                    <h2>Pasillo</h2>
                    <div className='pasillo'>
                        <p>
                            <strong>
                                Importante: En lo referente al pasillo nos interesa
                                prestar atención al ancho del mismo. Este puede ser
                                de dos formas misma anchura(anchura libre) a largo
                                de todo el corredor, o por el contrario, sufrir
                                algún tipo estrechamiento en ciertos puntos
                                (entrechamiento puntual). Por favor, según el caso,
                                marque la casilla para habilitar el resto de campos.
                            </strong>
                        </p>
                        <div className='ancho'>
                            <label>
                                
                                <i>
                                    En caso de que la anchura sea la misma a largo
                                    del corredor marque esta casilla...
                                </i>
                            </label>
                            <label>Ancho libre (cm)</label>
                            <br></br>
                            <input
                                type='number'
                                name='estrechamiento'
                               
                            />
                        </div>
                        <div className='estrecho'>
                            <label>
                                <i>
                                    En caso de que exista un estrechamiento puntual
                                    marque esta casilla...
                                </i>
                            </label>
                            <label>Anchura mínima del estrechamiento (cm)</label>
                            <br></br>
                            <input
                                type='number'
                                name='estrechamiento'
                                
                            />
                        </div>
                        <div className='largo'>
                            <label>
                                <i>
                                    En caso de que su pasillo tenga una longitud de
                                    10 metros o más indique por favor su anchura
                                    (cm)
                                </i>
                            </label>
                            <br></br>
                            <input
                                type='number'
                                name='estrechamiento'
                                
                            />
                        </div>
                    </div>
                </fieldset>
            </li>
            <li>
                <input type="radio" id="sbutton3" name="sradio"/>
                <label for="sbutton3"></label>
                <fieldset classNamename="fieldset">
                    <h2>Huecos de paso</h2>
                    <div className='hueco'>
                        <p>
                            <strong>
                                Importante: En este caso deberá tomar medidas
                                del espacio libre del area que cubre la puerta
                                (al abrir y cerrar) de su hogar.
                            </strong>
                        </p>
                        <label>
                            <i>
                                En caso de que su pasillo tenga una longitud de
                                10 metros o más indique por favor su anchura
                                (cm)
                            </i>
                        </label>
                        <label>
                            Anchura libre de paso de las puertas de entrada (cm)
                        </label>
                        <br></br>
                        <input
                            type='number'
                            name='hueco1'
                            
                        />
                    </div>
                    <div>
                        <label>
                            Espacio libre a ambas caras de las puertas (cm)
                        </label>
                        <br></br>
                        <input
                            type='number'
                            name='hueco2'
                            
                        />
                    </div>
                    </fieldset>
            </li>
            <li>
                <input type="radio" id="sbutton5" name="sradio"/>
                <label for="sbutton5"></label>
                <fieldset classNamename="fieldset">
                    <h2>Ventanas</h2>
                    <div>
                        <p>
                            <strong>
                                Importante: En este campo se hace refrencia a la altura
                                a la que se encuentran en mecanismo de apertura de las
                                ventanas de su hogar. Esta medida se toma desde el suelo
                                hasta la manivela/pomo de la ventana.
                            </strong>
                        </p>
                        <label>
                            <i>
                                En caso de que su pasillo tenga una longitud de
                                10 metros o más indique por favor su anchura
                                (cm)
                            </i>
                        </label>
                        <label> Altura de ventanas</label>
                        <br></br>
                        <input
                            type='number'
                            name='alturaV'
                            
                        />
                    </div>
                </fieldset>
            </li>
        </ul>  
    </div> 
    <div className="btn">
        <button>submit</button>
    </div>
    
</div>
    );
}
export default Slider;
