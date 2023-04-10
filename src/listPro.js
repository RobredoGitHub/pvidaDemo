import CustomInput from "./CustomInput";

const Vestibulos = (form, setForm) => {
    return (
        <div>
            <h1>Vestíbulos</h1>
            <p className="importante" >Importante: El espacio libre deberá ser igual</p>
            <div className="pregunta">
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
            </div>
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho del mismo. Este puede ser de dos formas: misma anchura(anchura libre) a largo de todo el pasillo, o por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (entrechamiento puntual). Por favor, según el caso, marque la casilla para habilitar el resto de campos.</p> 
                <p className="aviso"> En caso de que la anchura sea la misma a lo largo de todo el pasillo...</p>
            <div className="pregunta">
                <p className="pregunta"> 2. Ancho libre (cm)</p>
                <CustomInput id='input2' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 3. Ancho libre (cm)</p>
                <CustomInput id='input3' form={form} setForm={setForm} />
            </div>
            <p className="aviso"> En caso de que exista un estrechamiento puntual (como por ejemplo un pilar)</p>
            <div className="pregunta">
                <p className="pregunta"> 3. Ancho libre (cm)</p>
                <CustomInput id='input4' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 4. Anchura del estrechamiento (cm)</p>
                <CustomInput id='input5' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 5. Ancho libre en el punto del estrechamiento (cm)</p>
                <CustomInput id='input6' form={form} setForm={setForm} />
            </div>
            <p className="aviso"> En caso de que su pasillo tenga una longitud de 10 metros o más indique por favor su anchura (cm)</p>
            <div className="pregunta">
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
            <div className="pregunta">
                <p className="pregunta"> 7. Anchura libre de paso de la puerta de entrada (cm)</p>
                <CustomInput id='input8' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
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
            <p className="importante" >Importante: En este campo se hace refrencia a la altura a la que se encuentran en mecanismo de apertura de las puertas de su hogar. Esta medida se toma desde el suelo hasta la manivela/pomo de la puerta.</p>
            <div className="pregunta">
                <p className="pregunta"> 9. Altura del mecanismo de apertura</p>
                <CustomInput id='input10' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 10. Altura del mecanismo de apertura</p>
                <CustomInput id='input11' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 11. Altura del mecanismo de apertura</p>
                <CustomInput id='input12' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 12. Altura del mecanismo de apertura</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
        </div>
    )    
} 
const Ventanas = (form, setForm) => {
    return (
        <div>
            <h1>Ventanas</h1>
            <p className="importante" >Importante: En este campo se hace refrencia a la altura a la que se encuentran en mecanismo de apertura de las ventanas de su hogar. Esta medida se toma desde el suelo hasta la manivela/pomo de la ventana.</p>
            <div className="pregunta">
                <p className="pregunta"> 14. Altura del mecanismo de apertura</p>
                <CustomInput id='input14' form={form} setForm={setForm} />
            </div>
        </div>
    )
}

export const ListPro = [
    Vestibulos,
    Pasillos,
    Huecos,
    Puertas,
    Ventanas,
]