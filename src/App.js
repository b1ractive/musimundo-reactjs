import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Promocion from "./componentes/Promocion";
import Banner from "./componentes/Banner";
//import ItemsPromesas from "./componentes/PromesasItem/ItemsPromesas";
import Map from "./componentes/MapItems/Map";
//import ItemCount from "./componentes/ItemCount/CarritoDeCompra";
import ItemListCount from "./componentes/ItemListCount/index";

function App(){

  return (
    <div>
      <Header />
      <hr/>
      <Banner />
      <hr/>
      <Map />
      <br/>
      {/*<ItemCount initial={1} stock={10} onAdd={() => {}} />*/}
      <ItemListCount />
      <hr/>
      <Promocion />
      
      <Footer />
    </div>
  )
}

export default App;

