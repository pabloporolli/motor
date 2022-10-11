import React from 'react'

const Item = ({hab}) => {
  return (
    <tr> 
        <td>{hab.name}</td>
        <td>{hab.description}</td>
        <td>Total Flex: {hab.totalFlex}</td>
        <td>Total No Reembolsable: {hab.totalNRF}</td>
    </tr>
  )
}

export default Item