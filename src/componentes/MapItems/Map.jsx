import React from "react";

const Map = () => {

    const productos = [
        {id:1, name:"Lenovo", description:"", stock:10, price:226.999, image:"https://medias.musimundo.com/medias/00622010-178440-178440-01.png-178440-01.png-size515?context=bWFzdGVyfGltYWdlc3w0NTI2OTV8aW1hZ2UvcG5nfGg1OC9oZTkvMTA0MzQzNzMzMjA3MzQvMDA2MjIwMTAtMTc4NDQwLTE3ODQ0MF8wMS5wbmctMTc4NDQwXzAxLnBuZ19zaXplNTE1fDllZWFkYzRlZTI3NWMzY2NlZDNlZWQzODRiN2EwMmY5ZDc0Zjc3NDcxYzY0NDJhNDIwYzUxNDcyYzdkY2U2NTQ"},
        {id:2, name:"HP", description:"", stock:3, price:218.999, image:"https://medias.musimundo.com/medias/00542047-178441-178441-01.png-178441-01.png-size515?context=bWFzdGVyfGltYWdlc3w2MzE4MTN8aW1hZ2UvcG5nfGg2Mi9oZDgvMTA0MzQzNzM4MTIyNTQvMDA1NDIwNDctMTc4NDQxLTE3ODQ0MV8wMS5wbmctMTc4NDQxXzAxLnBuZ19zaXplNTE1fDNhNjI3ODRmN2UzYjY3OTcwOTE0NjU0ODU4NWEzODI3YjE4NTc5MTA5ZTAwOTY5OWY0MjI0MWE1MmQ0OTZhODQ"},
        {id:3, name:"Asus", description:"", stock:7, price:157.999, image:"https://medias.musimundo.com/medias/00560151-178059-178059-01.png-178059-01.png-size515?context=bWFzdGVyfGltYWdlc3w2OTAxOTJ8aW1hZ2UvcG5nfGhjNi9oZDMvMTA0MDEyNTc5Nzk5MzQvMDA1NjAxNTEtMTc4MDU5LTE3ODA1OV8wMS5wbmctMTc4MDU5XzAxLnBuZ19zaXplNTE1fDdmYWQ2YjNhYmNmZTA2ZDA4N2M3ODI0YmVjMmJiZThkMmFhMDBhNjFiMWMzOTAyMzhmM2M1OGExNTNjNTM2OTE"},
        {id:4, name:"Exo", description:"", stock:5, price:74.6999, image:"https://medias.musimundo.com/medias/00578016-178142-178142-01.png-178142-01.png-size515?context=bWFzdGVyfGltYWdlc3w2MzIzNzd8aW1hZ2UvcG5nfGg4MC9oYmEvMTA0MDg0NjExNzI3NjYvMDA1NzgwMTYtMTc4MTQyLTE3ODE0Ml8wMS5wbmctMTc4MTQyXzAxLnBuZ19zaXplNTE1fDZkNWMxNjhkMDI4NThmNDJlYTVjODA4ODI1MjE4NjZmY2JkOWNlMTkwZDBlMTY3ZWFhZWQ2MjNjY2YxOTk4MzA"}

    ];

    return (
        <div>
            <h1 className="text-center">Notebooks</h1>
            <div className="row">
                {productos.map(prod => (
                    <div className="col-md-3">
                        <div className="card">
                            <img src={prod.image} className="card-img-top" alt={prod.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <a href="#" className="btn btn-primary">${prod.price}</a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Map;