import React, { useState } from 'react'

const Buscador = () => {

    const [fechaIn, setFechaIn] = useState ('');
    const [fechaOut, setFechaOut] = useState ('');
    const [cantidadAdultos, setCantidadAdultos] = useState ('');
    const [cantidadHabitaciones, setCantidadHabitaciones] = useState ('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const consulta = {
            fechaIn: fechaIn,
            fechaOut: fechaOut,
            cantidadAdultos: cantidadAdultos,
            cantidadHabitaciones: cantidadHabitaciones,
        }
    }

    const handleFechaIn = (e) => {
        setFechaIn(e.target.value);
    }
 
    const handleFechaOut = (e) => {
        setFechaOut(e.target.value);
    }

  return (
    <>
    <div className='contenedorBuscador'>
        <h3>Consulte disponibilidad</h3>
        <form action="" onSubmit={handleSubmit}>
            <input type="date" required name='fechaIn' value={fechaIn} placeholder = 'Fecha de ingreso' onChange={handleFechaIn}/>
            <input type="date" required name='fechaOut' value={fechaOut} placeholder = 'Fecha de egreso'onChange={{handleFechaOut}}/>
            <select name="cantidadAdultos" id="CantidadAdultos" placeholder='Cantidad de adultos'>
                <option value="1">1 adulto</option>
                <option value="3">2 adultos</option>
                <option value="2">3 adultos</option>
                <option value="4">4 adultos</option>
            </select>
        </form>
    </div>

    </>
  )
}

export default Buscador