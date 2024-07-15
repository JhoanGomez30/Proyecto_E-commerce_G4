async function listarProductos(){
    const conexion= await fetch("http://localhost:8081/productos/obtener");

    const conexionConvertida= conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}


async function enviarProducto(nombre, valorUnitario, imagen, stock, category, description){
    const conexion= await fetch("http://localhost:8081/productos/agregar", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
            name:name,
            price:price,
            img:img,
            stock:stock,
            category:category,
            description:description

        })
    });

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}


async function eliminarProducto(id){
    const conexion= await fetch(`http://localhost:8081/productos/${id}`, {
        method: "DELETE"
    });


    const conexionConvertida = conexion.json();

    
    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al agregar el producto");
    }

    return conexionConvertida;
}

// listarVideos()

export const conexionAPI={
    listarProductos, enviarProducto, eliminarProducto
}









