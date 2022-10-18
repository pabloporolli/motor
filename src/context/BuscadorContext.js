import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const BuscadorContext = createContext();

const BuscadorProvider = ( {children} ) => {

    let [consulta, setConsulta] = useState('');

    const armarConsulta = (fechaIn, fechaOut, cantidadAdultos, cantidadHabitaciones) => {
    setConsulta ({
        fechaIn: fechaIn,
        fechaOut: fechaOut,
        cantidadAdultos: cantidadAdultos,
        cantidadHabitaciones: cantidadHabitaciones,
    })
}
console.log(consulta);

  return (
    <BuscadorContext.Provider
        value = {{
            armarConsulta,
            consulta,
        }}
        >
        {children}
    </BuscadorContext.Provider>
  );
};

export default BuscadorProvider;