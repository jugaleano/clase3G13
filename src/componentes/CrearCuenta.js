import React from 'react';
import {Link} from 'react-router-dom';

const CrearCuenta = () => {
    return(
        <div>
        <h1>Crear Cuenta</h1>
        <h1>Ingresar los datos del usuario</h1>
        <h2>Bienvenidos, ingrese sus credenciales</h2>
        <input placeholder="Nombre"/>
        <input placeholder="Email"/> 
        <input placeholder="Password"/>
        <input placeholder="Confirmar"/>
        <button>Crear Cuenta</button>
        <Link to={"/"}>Regresar</Link>
    </div>

    )
}

export default CrearCuenta;