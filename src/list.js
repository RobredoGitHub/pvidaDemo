import CustomInput from "./CustomInput";
// import { useState } from 'react';
// import Modal from "./Modal";

const Vestibulos = (form, setForm) => {
    // const [modalOpen1, setmodalOpen1] = useState(false);
    // const handleOpenModal1 = () => {
    //     setmodalOpen1(true);
    //   };
    // const [vestibulo, setVestibulo] = useState(0);
    return (
        <div>
            <h1>Vestíbulos</h1>
            <br></br>
            <div className="pregunta">
                <p>Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que
                    puede caber dentro del espacio de vestíbulo o entrada de la vivienda, estando todas las puertas
                    abiertas.</p>
                    <br></br>
                <div className="input-wrapper">
                    <p className="pregunta">2. Ancho libre (cm)</p>
                    <CustomInput id="input1" form={form} setForm={setForm} />
                </div>
                <br></br>
                {/* <a>Click aquí para ver la imagen</a>
                <Modal estado={modalOpen1} setEstado={setmodalOpen1}>
                <img className="modalImg" src={require('./img/alturaPomo.jpg')} alt="" />
            </Modal> */}
            </div>
        </div>
    )
} 

const Pasillos = (form, setForm) => {
    // const [aisle, setAisle] = useState(0);
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho libre del mismo, es decir, al
                espacio despejado para caminar a través de él. El pasillo puede ser de dos formas:</p>  <br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- Misma anchura (espacio despejado de paso) a largo de todo el pasillo, es decir, el ancho del pasillo no varía en ningún momento.</p><br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- O por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (estrechamiento puntual), como puede ser un pilar, un elemento de la pared, un mueble, etc; en dicho punto el pasillo pasa a tener un espacio despejado de paso de menor tamaño.</p><br></br>
                <p className="aviso"> En caso de su pasillo disponga de la misma anchura a lo largo del mismo indique la anchura a continuación</p>           
                <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 2. Ancho libre (cm)</p>
                <CustomInput id='input2' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Pasillos2 = (form, setForm) => {
    // const [aisle, setAisle] = useState(0);
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho libre del mismo, es decir, al
                espacio despejado para caminar a través de él. El pasillo puede ser de dos formas:</p>  <br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- Misma anchura (espacio despejado de paso) a largo de todo el pasillo, es decir, el ancho del pasillo no varía en ningún momento.</p><br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- O por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (estrechamiento puntual), como puede ser un pilar, un elemento de la pared, un mueble, etc; en dicho punto el pasillo pasa a tener un espacio despejado de paso de menor tamaño.</p><br></br>
            <p className="aviso"> En caso de que exista un estrechamiento puntual (como por ejemplo un pilar)</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 3. Indique por la anchura general del pasillo sin contar el pilar (cm)</p>
                <CustomInput id='input4' form={form} setForm={setForm} />
            </div>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta">4.  La anchura del pilar, en este caso (cm)</p>
                <CustomInput id='input5' form={form} setForm={setForm} />
            </div>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta">5. El ancho del pasillo en ese punto (cm)</p>
                <CustomInput id='input6' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Pasillos3 = (form, setForm) => {
    // const [aisle, setAisle] = useState(0);
    return (
        <div>
            <div className='container'>
            <h1>Pasillos</h1>
            <br></br>
            </div>
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho libre del mismo, es decir, al
                espacio despejado para caminar a través de él. El pasillo puede ser de dos formas:</p>  <br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- Misma anchura (espacio despejado de paso) a largo de todo el pasillo, es decir, el ancho del pasillo no varía en ningún momento.</p><br></br>
                <p className="aviso">    &nbsp;&nbsp;&nbsp;&nbsp;- O por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (estrechamiento puntual), como puede ser un pilar, un elemento de la pared, un mueble, etc; en dicho punto el pasillo pasa a tener un espacio despejado de paso de menor tamaño.</p><br></br>
            <p className="aviso"> En caso de que su pasillo tenga una longitud de 10 metros o más, indique por favor su anchura en centímetros</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 6. Anchura libre</p>
                <CustomInput id='input7' form={form} setForm={setForm} />
            </div>
        </div>
    )
}
const Huecos = (form, setForm) => {
    // const [huecos, setHuecos] = useState(0);

    return (
        <div>
            <h1>Huecos de paso</h1>
            <br></br>
            <p className="pregunta"> Con la puerta de entrada a la vivienda totalmente abierta, mida en centímetros el ancho del hueco que queda para pasar a través de ella.</p>
            <br></br>
            <div className="input-wrapper">
                <p>7. Ancho libre</p>
                <CustomInput id='input8' form={form} setForm={setForm} /><br></br>
                <a>Click aquí para ver la imagen</a>
            </div>
        </div>
    )
}
const Huecos2 = (form, setForm) => {
    // const [huecos, setHuecos] = useState(0);

    return (
        <div>
            <h1>Huecos de paso</h1>
            <br></br>
            <p className="pregunta">Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que puede caber a ambos lados de la puerta de entrada de la vivienda.</p>
            <br></br>
            <div className="input-wrapper">
                <p>8. Diametro</p>
                <CustomInput id='input9' form={form} setForm={setForm} /><br></br>
                <a>Click aquí para ver la imagen</a>
            </div>
        </div>
    )
}

const Puertas = (form, setForm) => {
    // const [puertas, setPuertas] = useState(0);
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <br></br>
            <p className="pregunta"> Si las puertas que dan acceso a las habitaciones de su hogar pueden abrirse 90º o más (hastaformar una L o más), marque esta casilla.</p>
            <br></br>
            <div className="input-wrapper">
                <p className="pregunta"> 9. </p>
                <input className="checkbox" type="checkbox"/>
            </div>
        </div>
    )    
} 
const Puertas2 = (form, setForm) => {
    // const [puertas, setPuertas] = useState(0);
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <br></br>
            <p className="pregunta"> Indique en centímetros la distancia vertical entre el pomo de la puerta y el suelo, es decir, la altura a la que se encuentra el pomo.</p>
            <br></br>
            <div className="input-wrapper">
                <p>10. Altura del pomo</p>
                <CustomInput id='input11' form={form} setForm={setForm} />
            </div>
        </div>
    )    
} 
const Puertas3 = (form, setForm) => {
    // const [puertas, setPuertas] = useState(0);
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
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
    // const [puertas, setPuertas] = useState(0);
    return (
        <div>
            <h1>Puertas</h1>
            <br></br>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <p className="importante" >En caso de que su hogar tenga puertas acristaladas o ventanales y sobre el vidrio exista algún vinilo o pegatina de señalización, rellene estos apartados:</p>
            <br></br>
            <p className="importante" >En caso de que en su hogar tenga puertas de apertura automática, rellene estos apartados:</p>
            <br></br>
            <p className="pregunta"> Mida en centímetros el ancho del hueco que queda para pasar a través de ella.</p>
            <br></br>
            <div className="input-wrapper">
            <br></br>
                <p>12. Ancho libre</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
            <br></br>
            <p className="pregunta">Indique en segundos el tiempo estimado que transcurre entre que se abre y se vuelve a cerrar.</p>
            <br></br>
            <div className="input-wrapper">
                <p>13. Segundos para cruzar</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
        </div>
    )    
} 

const Ventanas = (form, setForm) => {
    // const [ventana, setVentana] = useState(0);
    return (
        <div>
            <h1>Ventanas</h1>
            <br></br>
            <p className="importante" >Importante: En este campo se hace referencia a la altura a la que se encuentran en mecanismo de apertura de las ventanas de su hogar. Esta medida se toma desde el suelo hasta el pomo, manivela ohendidura que se use para abrir y cerrar la ventana.</p>
            <br></br>
            <p className="pregunta"> Indique en centímetros la distancia vertical entre el suelo y el elemento de apertura de la ventana, es decir, la altura a la que se encuentra.</p>
            <br></br>
            <div className="input-wrapper">
                <p>14. Altura de la manilla</p>
                <CustomInput id='input14' form={form} setForm={setForm} />
                <br></br>
                <a>Click aquí para ver la imagen</a>
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


export const List = [
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
    Final,
]