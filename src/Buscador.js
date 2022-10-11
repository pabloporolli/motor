import React, { useState } from 'react'
import ItemListContainer from './components/ItemListContainer';

const Buscador = () => {

    const [fechaIn, setFechaIn] = useState ('');
    const [fechaOut, setFechaOut] = useState ('');
    const [cantidadAdultos, setCantidadAdultos] = useState ('');
    const [cantidadHabitaciones, setCantidadHabitaciones] = useState ('');

    const [consultaHecha, setConsultaHecha] = useState(false);

    let [consulta, setConsulta] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setConsulta ({
            fechaIn: fechaIn,
            fechaOut: fechaOut,
            cantidadAdultos: cantidadAdultos,
            cantidadHabitaciones: cantidadHabitaciones,
        })
        setConsultaHecha(true);
        return consulta;
    }

    const handleFechaIn = (e) => {
        setFechaIn(e.target.value);
    }
 
    const handleFechaOut = (e) => {
        setFechaOut(e.target.value);
    }

    const handleCantidadAdultos = (e) => {
        setCantidadAdultos(e.target.value);
    }

    const handleCantidadHabitaciones = (e) => {
        setCantidadHabitaciones(e.target.value);
    }

  return (
    consultaHecha ?
        <ItemListContainer consulta={consulta} />
    : 
    <div className='contenedorBuscador'>
        <h3 className='tituloConsulta'>Consulte disponibilidad</h3>
        <form action="" >
            <input type="date" required name='fechaIn' min="2023-01-01" max="2023-03-31" className='rectangulo' value={fechaIn} placeholder = 'Fecha de ingreso' onChange={handleFechaIn}/>
            <input type="date" required name='fechaOut' min="2023-01-01" max="2023-03-31" className='rectangulo' value={fechaOut} placeholder = 'Fecha de egreso'onChange={handleFechaOut}/>
            <select name="cantidadAdultos" id="CantidadAdultos" className='rectangulo' placeholder='Cantidad de adultos' onChange={handleCantidadAdultos}>
                <option value="0">Cantidad Adultos</option>
                <option value="1">1 adulto</option>
                <option value="2">2 adultos</option>
                <option value="3">3 adultos</option>
                <option value="4">4 adultos</option>
            </select>
            <select name="cantidadHabitaciones" id="CantidadHabitaciones" className='rectangulo' placeholder='Cantidad de habitaciones' onChange={handleCantidadHabitaciones}>
                <option value="0">Cantidad Habitaciones</option>
                <option value="1">1 habitación</option>
                <option value="2">2 habitaciones</option>
                <option value="3">3 habitaciones</option>
                <option value="4">4 habitaciones</option>
            </select>
                <button onClick={handleSubmit} className='botonConsultar'>Consultar</button>
        </form>
    </div>
    )
}

export default Buscador