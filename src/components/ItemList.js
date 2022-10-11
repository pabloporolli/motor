import React from 'react'
import Item from './Item'
import styles from './item.module.css'

const ItemList = ({habitaciones}) => {
  return (
    <table className={styles.tablaHabitaciones}>
        <thead>
            <tr>
                <th></th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Total Flexible</th>
                <th>Total No Reembolsable</th>
            </tr>
        </thead>
        <tbody>
            {habitaciones.map((hab)=>
            <Item hab={hab} key={hab.name}/>)}
        </tbody>
    </table>
  )
}

export default ItemList