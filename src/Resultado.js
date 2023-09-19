import React from 'react';
import { useParams } from 'react-router-dom';
//import catalogo from './img/catalogo.pdf';
import { useNavigate } from 'react-router-dom';

function Resultado() {
    const { resultado } = useParams();
    const navigate = useNavigate();

    return (
        <div id='container'>
            <div className='resultado' style={{ padding: '2px' }}>
                <h1 id='centered-text'>
                    Su casa se encuentra adaptada en un {resultado}%
                </h1>
                <a>
                    <img
                        onClick={() => navigate('/')}
                        className='home'
                        src={require('./img/iconos/hogar.png')}
                        alt='img'
                    />
                </a>
            </div>
        </div>
    );
}

export default Resultado;
