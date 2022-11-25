import React from "react";

const Carrito = () => {
    return (
        <button type="button" className="btn btn-danger position-relative">
            <img src="cart2.svg" alt="Carrito" width="22" />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
  </span>
</button>
    )
}

export default Carrito;