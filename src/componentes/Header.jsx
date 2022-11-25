import React from "react";
import Carrito from "./Carrito";
import Barradenavegacion from "./Barradenavegacion"; 

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Barradenavegacion />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Carrito />
                </div>
            </div>
        </div>
    )
}

export default Header;