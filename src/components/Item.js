import React, {useState} from 'react'
import styles from './item.module.css'


const Item = ({hab}) => {
  const [readMore, setReadMore] = useState(false)


  return (
    <tr className={styles.fichaHab}> 
        <td><img src={`${hab.img}`}/></td>
        <td>{hab.name}</td>
        <td>  {hab.description} 
              <a onClick={()=>setReadMore(!readMore)}> -- más info</a>
              {!readMore && 
              <>
              <p>Amenities</p>
              <ul>
                {hab.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
              </ul>
              </>}
        </td>
        <td>{hab.totalFlex}</td>
        <td>{hab.totalNRF}</td>
    </tr>
  )
}

export default Item