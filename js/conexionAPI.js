async function listarVideos(){
    const conexion= await fetch("http://localhost:3000/productos");

    const conexionConvertida= conexion.json();

    // console.log(conexionConvertida);
    return conexionConvertida;
}

// listarVideos()

export const conexionAPI={
    listarVideos
}