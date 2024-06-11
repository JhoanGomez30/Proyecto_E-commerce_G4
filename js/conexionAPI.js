async function listarProductos(){
    const conexion= await fetch("http://localhost:3001/productos");

    const conexionConvertida= conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

// listarVideos()

export const conexionAPI={
    listarProductos
}