import CustomInput from "./CustomInput";

const Vestibulos = (form, setForm) => {
    return (
        <div>
            <h1>Vestíbulos</h1>
            <br></br>
            <p className="importante" >Importante: El espacio libre deberá ser igual</p>
            <br></br>
            <div className="input-wrapper">
                <p>1. Diametro de circunferencia libre no barrida por las puertas (cm)</p>
                <CustomInput id='input1' form={form} setForm={setForm} />
            </div>
        </div>
    )
} 

const Pasillos = (form, setForm) => {
    
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho del mismo. Este puede ser de dos formas: misma anchura(anchura libre) a largo de todo el pasillo, o por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (entrechamiento puntual). Por favor, según el caso, marque la casilla para habilitar el resto de campos.</p> 
                <br></br>
                <p className="aviso"> En caso de que la anchura sea la misma a lo largo de todo el pasillo indique por favor:</p>
                <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 2. Ancho libre (cm)</p>
                <CustomInput id='input2' form={form} setForm={setForm} />
            </div>
        </div>
    )
}

const Pasillos2 = (form, setForm) => {
    
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
            <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho del mismo. Este puede ser de dos formas: misma anchura(anchura libre) a largo de todo el pasillo, o por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (entrechamiento puntual). Por favor, según el caso, marque la casilla para habilitar el resto de campos.</p>
            <br></br>
            <p className="aviso"> En caso de que exista un estrechamiento puntual (como por ejemplo un pilar)</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 3. Ancho libre (cm)</p>
                <CustomInput id='input4' form={form} setForm={setForm} />
            </div>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 4. Anchura del estrechamiento (cm)</p>
                <CustomInput id='input5' form={form} setForm={setForm} />
            </div>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 5. Ancho libre en el punto del estrechamiento (cm)</p>
                <CustomInput id='input6' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Pasillos3 = (form, setForm) => {
    
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
            <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho del mismo. Este puede ser de dos formas: misma anchura(anchura libre) a largo de todo el pasillo, o por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (entrechamiento puntual). Por favor, según el caso, marque la casilla para habilitar el resto de campos.</p>
            <br></br>
            <p className="aviso"> En caso de que su pasillo tenga una longitud de 10 metros o más indique por favor su anchura (cm)</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 6. Anchura libre</p>
                <CustomInput id='input7' form={form} setForm={setForm} />
            </div>
        </div>
    )
}

const Huecos = (form, setForm) => {
    return (
        <div>
            <h1>Huecos de paso</h1>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 7. Anchura libre de paso de la puerta de entrada (cm)</p>
                <CustomInput id='input8' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Huecos2 = (form, setForm) => {
    return (
        <div>
            <h1>Huecos de paso</h1>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta">  8. Diámetro libre a ambos lados de la puerta de entrada a la vivienda (cm)</p>
                <CustomInput id='input9' form={form} setForm={setForm} />
            </div>
        </div>
    )
}

const Puertas = (form, setForm) => {
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
                <br></br>
            <p>Si las puertas que dan acceso a las habitaciones de su hogar pueden abrirse 90º o más marque la siguiente casilla</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 9. </p>
                <input className="checkbox" type="checkbox"/>
            </div>

        </div>
    )    
}

const Puertas2 = (form, setForm) => {
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 10. Indique en centímetros la distancia vertical entre el pomo de la puerta y el suelo.</p>
                <CustomInput id='input11' form={form} setForm={setForm} />
            </div>

        </div>
    )    
}
 
const Puertas3 = (form, setForm) => {
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <br></br>
            <p className="importante" >En caso de que su hogar tenga puertas acristaladas o ventanales y sobre el vidrio exista algún vinilo o pegatina de señalización, rellene estos apartados:</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 11. Anchura de la señalización</p>
                <CustomInput id='input12' form={form} setForm={setForm} />
            </div>
        </div>
    )    
}

const Puertas4 = (form, setForm) => {
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <p className="importante" >En caso de que su hogar tenga puertas acristaladas o ventanales y sobre el vidrio exista algún vinilo o pegatina de señalización, rellene estos apartados:</p>
            <br></br>
            <p className="importante" >En caso de que en su hogar tenga puertas de apertura automática, rellene estos apartados:</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 12. Mida en centímetros el ancho del hueco que queda para pasar a través de ella.</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 13. Indique en segundos el tiempo estimado que transcurre entre que se abre y se vuelve a cerrar.</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
        </div>
    )    
}

const Ventanas = (form, setForm) => {
    return (
        <div>
            <h1>Ventanas</h1>
            <br></br>
            <p className="importante" >Importante: En este campo se hace refrencia a la altura a la que se encuentran en mecanismo de apertura de las ventanas de su hogar. Esta medida se toma desde el suelo hasta la manivela/pomo de la ventana.</p>
                <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 14. Altura del mecanismo de apertura</p>
                <CustomInput id='input14' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Final = (form, setForm) => {
    // const [ventana, setVentana] = useState(0);
    return (
        <div>
            <h1>Enhorabuena</h1>
            <br></br>
           <p> ha terminado el formulario con éxito, para ver el resultado haga click en el botón Calcular que aparece más abajo.</p>
           <br></br>
           <p>En caso de que quiera revisar o cambiar algunas de sus respuestas, siempre puede volver a las secciones anteriores pulsando los botones de navegación</p>
        </div>
    )
}
export const ListPro = [
    Vestibulos,
    Pasillos,
    Pasillos2,
    Pasillos3,    
    Huecos,
    Huecos2,
    Puertas,
    Puertas2,
    Puertas3,
    Puertas4,            
    Ventanas,
    Final
]