import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import Buscador from '../Buscador';

const Main = () => {
  return (
    <main >
    <Routes>
      <Route
        path = "/"
        element = {<Buscador />}
      />
{/*        <Route
        path = "/consulta"
        element = {<ItemListContainer />}
       /> */}
{/*        <Route
        path = "/detail/:idProd"
        element = {}
      />
      <Route
        path = "/cart"
        element = {}
      />
      <Route
        path = '/compra'
        element = {}
      /> */}
    </Routes>
    </main>
  )
}

export default Main