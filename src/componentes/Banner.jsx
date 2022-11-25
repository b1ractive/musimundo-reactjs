import React from "react";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="banner1.jpg" alt="loMasVendido" className="img-fluid" /></p>
                    <h4>¡Lo más vendido de esta categoría!</h4>
                    <p><a href="https://www.musimundo.com/informatica/notebook/c/98" targer="_blank" className="btn btn-danger">" Ir "</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="banner2.jpg" alt="parteDeTuMundo" className="img-fluid" /></p>
                    <h4>Encontra lo que tanto buscas</h4>
                    <p><a href="https://www.musimundo.com/electrohogar/c/7" targer="_blank" className="btn btn-danger">" Ir "</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banner;