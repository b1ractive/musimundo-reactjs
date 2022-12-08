import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Promocion from "./componentes/Promocion";
import Banner from "./componentes/Banner";
//import ItemsPromesas from "./componentes/PromesasItem/ItemsPromesas";
//import Map from "./componentes/MapItems/Map";
//import ItemCount from "./componentes/ItemCount/CarritoDeCompra";
import { ItemListContainer } from "./componentes/ItemListContainer";
//import { ItemCount } from "./componentes/ItemCount"


function App(){

  return (
    <div>
      <ChakraProvider>
      <Header />
      <hr/>
      <Banner />
      <hr/>
      {/*<Map />*/}
      <br/>
      <ItemListContainer />
      {/*<ItemCount initial={1} stock={10} onAdd={() => {}}/>*/}
      <br/>
      <hr/>
      <Promocion />
      
      <Footer />
      </ChakraProvider>
    </div>
  )
}

export default App;

