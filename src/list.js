import CustomInput from "./CustomInput";
import { useState } from 'react';
import Modal from "./Modal";

const Vestibulos = (form, setForm) => {
    // const [modalOpen1, setmodalOpen1] = useState(false);
    // const handleOpenModal1 = () => {
    //     setmodalOpen1(true);
    //   };
    return (
        <div>
            <h1>Vestíbulos</h1>
            <div className="pregunta">
                <p>Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que
                    puede caber dentro del espacio de vestíbulo o entrada de la vivienda, estando todas las puertas
                    abiertas.</p>
                <CustomInput id='input1' form={form} setForm={setForm} /><br></br>
                <a >Click aquí para ver la imagen</a>
                {/* <Modal estado={modalOpen1} setEstado={setmodalOpen1}>
                <img className="modalImg" src={require('./img/alturaPomo.jpg')} alt="" />
            </Modal> */}
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
                <p className="importante" >Importante: En lo referente al pasillo nos interesa prestar atención al ancho libre del mismo, es decir, al
                espacio despejado para caminar a través de él. El pasillo puede ser de dos formas:.</p> 
                <p className="aviso"> Misma anchura (espacio despejado de paso) a largo de todo el pasillo, es decir, el ancho del pasillo no varía en ningún momento.</p>
                <p className="aviso"> O por el contrario, sufrir algún tipo estrechamiento en ciertos puntos (estrechamiento puntual), como puede ser un pilar, un elemento de la pared, un mueble, etc; en dicho punto el pasillo pasa a tener un espacio despejado de paso de menor tamaño.</p>
                <p className="aviso"> Por favor, según el caso, marque la casilla correspondiente:</p>           
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
                <p className="pregunta"> 7. Con la puerta de entrada a la vivienda totalmente abierta, mida en centímetros el ancho del hueco que queda para pasar a través de ella.</p>
                <CustomInput id='input8' form={form} setForm={setForm} /><br></br>
                <a>Click aquí para ver la imagen</a>
            </div>
            <div className="pregunta">
                <p className="pregunta"> 8. Introduzca en centímetros el diámetro de la circunferencia despejada de mayor tamaño que puede caber a ambos lados de la puerta de entrada de la vivienda.</p>
                <CustomInput id='input9' form={form} setForm={setForm} /><br></br>
                <a>Click aquí para ver la imagen</a>
            </div>
        </div>
    )
}

const Puertas = (form, setForm) => {
    return (
        <div>
            <h1>Puertas</h1>
            <p className="importante" >Importante: En esta sección deberá tomar medidas de los espacios cercanos a las puertas que acceden a las diferentes habitaciones de su hogar.</p>
            <div className="pregunta">
                <p className="pregunta"> 9. Si las puertas que dan acceso a las habitaciones de su hogar pueden abrirse 90º o más (hasta
formar una L o más), marque esta casilla.</p>
                <CustomInput id='input10' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 10. Indique en centímetros la distancia vertical entre el pomo de la puerta y el suelo, es decir, la
altura a la que se encuentra el pomo.</p>
                <CustomInput id='input11' form={form} setForm={setForm} />
            </div>
            <p className="importante" >En caso de que su hogar tenga puertas acristaladas o ventanales y sobre el vidrio exista algún vinilo o
pegatina de señalización, rellene estos apartados:</p>
            <div className="pregunta">
                <p className="pregunta"> 11. Anchura de la señalización</p>
                <CustomInput id='input12' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
            <p className="importante" >En caso de que en su hogar tenga puertas de apertura automática, rellene estos apartados:</p>
                <p className="pregunta"> 12. Mida en centímetros el ancho del hueco que queda para pasar a través de ella.</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
            <div className="pregunta">
                <p className="pregunta"> 13. Indique en segundos el tiempo estimado que transcurre entre que se abre y se vuelve a
cerrar.</p>
                <CustomInput id='input13' form={form} setForm={setForm} />
            </div>
        </div>
    )    
} 
const Ventanas = (form, setForm) => {
    return (
        <div>
            <h1>Ventanas</h1>
            <p className="importante" >Importante: En este campo se hace referencia a la altura a la que se encuentran en mecanismo de
apertura de las ventanas de su hogar. Esta medida se toma desde el suelo hasta el pomo, manivela o
hendidura que se use para abrir y cerrar la ventana.</p>
            <div className="pregunta">
                <p className="pregunta"> 14. Indique en centímetros la distancia vertical entre el suelo y el elemento de apertura de la
ventana, es decir, la altura a la que se encuentra.</p>
                <CustomInput id='input14' form={form} setForm={setForm} />
                <br></br>
                <a>Click aquí para ver la imagen</a>
            </div>
        </div>
    )
}

export const List = [
    Vestibulos,
    Pasillos,
    Huecos,
    Puertas,
    Ventanas,
]