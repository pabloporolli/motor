import React, {useState} from 'react'
import styles from './item.module.css'
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';


const Item = ({hab}) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <Card className='tarjeta'>
      <Card.Img variant="top" src={`${hab.img}`} />
      <Card.Body>
        <Card.Title className='tituloHab'>{hab.name}</Card.Title>
        <Card.Text>
          {hab.description}
          <div className='seccionTarifas'>
            Precio total en USD {hab.totalNRF} - No reembolsable
            <button className='botonReservar'>Reservar</button>
          </div>
          <div className='seccionTarifas'>
            Precio total en USD {hab.totalFlex} - Flexible
            <button className='botonReservar'>Reservar</button>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className='footerTarjeta'>
        <button className={styles.btnReadMore} onClick={()=>setReadMore(!readMore)}>{readMore? <p>- menos info</p> : <p>+ más info</p>}</button>
        {readMore && 
        <div className='masInfo'>
        <p>Amenities</p>
        <ul>
          {hab.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
        </ul>
        </div>}
      </Card.Footer>
    </Card>
  )
}

export default Item

{/* <tr className={styles.fichaHab}> 
<td><img src={`${hab.img}`} alt={hab.name}/></td>
<td>{hab.name}</td>
<td>  {hab.description} 
      <button className={styles.btnReadMore} onClick={()=>setReadMore(!readMore)}>{readMore? <p>-- menos info</p> : <p>-- más info</p>}</button>
      {readMore && 
      <>
      <p>Amenities</p>
      <ul>
        {hab.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}
      </ul>
      </>}
</td>
<td>{hab.totalFlex}</td>
<td>{hab.totalNRF}</td>
</tr> */}