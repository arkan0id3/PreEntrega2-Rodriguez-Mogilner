
import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { generatePath } from 'react-router-dom';

//Componentes
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


// class => className
// <input type="text"></input>  =>  <input type="text" />
// style ="nombrePropiedad: valor" => style={{"nombrePropiedad" : "valor"}}
// `${}`  =>   {}     para pasar código js al html ahora solo hacen falta {}
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar nombre={"3dshop"}/>
        <Routes>
          <Route path='/'element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>    
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
