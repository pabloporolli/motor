import React from 'react'
import Item from './Item'

const ItemList = ({habitaciones}) => {
  return (
    <table>
            <tbody>
              {habitaciones.map((hab)=>
              <Item hab={hab} key={hab.name}/>)}
            </tbody>
          </table>
  )
}

export default ItemList