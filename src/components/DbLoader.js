import { addDoc, collection } from "firebase/firestore";
import React from 'react'
import { Habitaciones } from "../Habitaciones";
import { db } from "../firebaseConfig";

// COMPONENTE CREADO PARA CARGAR LAS HABITACIONES POR ÚNICA VEZ A FIREBASE
const DbLoader = () => {
    const habs = collection(db, 'habitaciones')

    const chequearArray = () => {
        Habitaciones.forEach(el =>{
            console.log(`Habitacion ${el.name}: 
                Dispo enero cargada: ${el.enero23.dispo.length} items
                Tarifas Flex enero cargadas: ${el.enero23.tarifasFlex.length} items
                Tarifas NRF enero cargadas: ${el.enero23.tarifasNRF.length} items
                ----
                Dispo febrero cargada: ${el.febrero23.dispo.length} items
                Tarifas Flex febrero cargadas: ${el.febrero23.tarifasFlex.length} items
                Tarifas NRF febrero cargadas: ${el.febrero23.tarifasNRF.length} items
                ---
                Dispo marzo cargada: ${el.marzo23.dispo.length} items
                Tarifas Flex marzo cargadas: ${el.marzo23.tarifasFlex.length} items
                Tarifas NRF marzo cargadas: ${el.marzo23.tarifasNRF.length} items`)
        })
    }

    const loadHabs = () => {
        Habitaciones.forEach((element) => {
            addDoc(habs, element)
            .then ((res) => {
                console.log(res.id + "cargado")
            })
        })
    }

    // chequearArray()
    // loadHabs()

  return (
    <div>dbLoader</div>
  )
}

export default DbLoader