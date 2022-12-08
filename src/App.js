import React from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Promocion from "./componentes/Promocion";
import Banner from "./componentes/Banner";
//import ItemsPromesas from "./componentes/PromesasItem/ItemsPromesas";
import Map from "./componentes/MapItems/Map";

function App(){

  return (
    <div>
      <Header />
      <Banner />
      <Map />
      <Promocion />
      <Footer />
    </div>
  )
}

export default App;

