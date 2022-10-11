import React from 'react'
import { Habitaciones } from '../Habitaciones'
import { DateTime, Duration} from "luxon";
// import { Button } from 'react-bootstrap';

// Este componente filtra las habitaciones segun la disponibilidad (fechas enviadas como props por el buscador)
const ItemListContainer = () => {

  // Esas fechas serán reemplazadas por las que lleguen por props
  const fechaIn = DateTime.fromISO("2023-01-28")
  const fechaOut = DateTime.fromISO("2023-02-02")
  const durationInterval = Duration.fromISOTime('24:00')

  let fechasEstadia = []
  let i = fechaIn
  while (i <= fechaOut) {
    fechasEstadia.push(i)
    i = i.plus(durationInterval)
  }

  let habDispo = [...Habitaciones]

  const chequearHabDisponibles = () => {
    fechasEstadia.forEach((fecha) => {
      let day = fecha.day;
      // formatea el mes en un string de dos números
      let month = fecha.month.toString()
      month.length === 1 && (month = "0"+month)
      // formatea el año en un string de dos números
      let year = fecha.year.toString().slice(-2)

      let periodo = month + year

      habDispo.forEach((hab) => {
        const habABuscar = Habitaciones.find((el) => el.name===hab.name)
        const inventario = habABuscar[periodo].dispo[day-1]
        if (inventario === 0) {
          habDispo = habDispo.filter((el) => el.name != habABuscar.name)
        } 
      })
    })
    return (habDispo)
  }

  chequearHabDisponibles()
  console.log(habDispo)




  return (
    <div>
         {/* <Button variant="primary">Item List Container</Button>{' '} */}

         <h4>Check In: {fechaIn.toLocaleString()}</h4>
         <h4>Check Out: {fechaOut.toLocaleString()}</h4>
         <h4>Habitaciones disponibles:</h4>
         <table>
            <tbody>
              {habDispo.map((hab)=>
              <tr key={hab.name}> 
                <td>{hab.name}</td>
                <td>{hab.description}</td>
              </tr>)}
            </tbody>
          </table>
    </div>
  )
}

export default ItemListContainer