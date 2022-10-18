import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import { BuscadorContext } from './context/BuscadorContext';

const Buscador = () => {

  const {armarConsulta} = useContext (BuscadorContext);

    const [fechaIn, setFechaIn] = useState ('');
    const [fechaOut, setFechaOut] = useState ('');
    const [cantidadAdultos, setCantidadAdultos] = useState ('');
    const [cantidadHabitaciones, setCantidadHabitaciones] = useState ('');

    const [consultaHecha, setConsultaHecha] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        armarConsulta(fechaIn, fechaOut, cantidadAdultos, cantidadHabitaciones);
        setConsultaHecha(true);
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
    <ItemListContainer />
    :
    <div className='contenedorBuscador'>
        <h3 className='tituloConsulta'>Consulte disponibilidad</h3>
        <form action="">
            <input type="date" name='fechaIn' min="2023-01-01" max="2023-03-31" required className='rectangulo' value={fechaIn} placeholder = 'Fecha de ingreso' onChange={handleFechaIn}/>
            <input type="date" name='fechaOut' min="2023-01-01" max="2023-03-31" required className='rectangulo' value={fechaOut} placeholder = 'Fecha de egreso'onChange={handleFechaOut}/>
            <select name="cantidadAdultos" id="CantidadAdultos" className='rectangulo' required placeholder='Cantidad de adultos' onChange={handleCantidadAdultos}>
                <option value="0">Cantidad Adultos</option>
                <option value="1">1 adulto</option>
                <option value="2">2 adultos</option>
                <option value="3">3 adultos</option>
                <option value="4">4 adultos</option>
            </select>
            <select name="cantidadHabitaciones" id="CantidadHabitaciones" required className='rectangulo' placeholder='Cantidad de habitaciones' onChange={handleCantidadHabitaciones}>
                <option value="0">Cantidad Habitaciones</option>
                <option value="1">1 habitación</option>
                <option value="2">2 habitaciones</option>
                <option value="3">3 habitaciones</option>
                <option value="4">4 habitaciones</option>
            </select>
            <button onClick={handleSubmit} type="submit" className='botonConsultar'>Consultar</button>
            
        </form>
    </div>
    
    )
}

export default Buscador

// <button onClick={handleSubmit} className='botonConsultar'><Link to='/consulta'>Consultar</Link></button>

