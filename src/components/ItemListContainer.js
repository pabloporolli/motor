import React from 'react'
import { Habitaciones } from '../Habitaciones'
import { DateTime, Duration} from "luxon";
import ItemList from './ItemList';
import styles from './item.module.css'
// import { Button } from 'react-bootstrap';

// Este componente filtra las habitaciones segun la disponibilidad (fechas enviadas como props por el buscador)
const ItemListContainer = () => {

  // Esas fechas serán reemplazadas por las que lleguen por props
  const fechaIn = DateTime.fromISO("2023-01-11")
  const fechaOut = DateTime.fromISO("2023-01-13")
  const durationInterval = Duration.fromISOTime('24:00')

  let fechasEstadia = []
  let i = fechaIn
  while (i < fechaOut) {
    fechasEstadia.push(i)
    i = i.plus(durationInterval)
  }

  let habDispo = [...Habitaciones]
  habDispo.forEach((hab) =>{
    hab['totalFlex'] = 0
    hab['totalNRF'] = 0
  })

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
      
        hab['totalFlex'] += habABuscar[periodo].tarifasFlex[day-1]
        hab['totalNRF'] += habABuscar[periodo].tarifasNRF[day-1]
        
        // Elimina la habitación del array si no está disponible
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
    <div className={styles.itemListContainer}>
         {/* <Button variant="primary">Item List Container</Button>{' '} */}
         {habDispo.length == 0 ?
          <p>No hay habitaciones disponibles</p>
        :
        <>
         <h3>Check In: {fechaIn.toLocaleString()} - Check Out: {fechaOut.toLocaleString()}</h3>
         <h4>Habitaciones disponibles:</h4>
         <ItemList habitaciones={habDispo} />
         </>
         }
    </div>
  )
}

export default ItemListContainer