async function listVideos() {
    const conexion = await fetch("http://localhost:3001/videos");
    let parseConexion = await conexion.json();
    //console.log(parseConexion);
    return parseConexion;
};

async function sendVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });
    const parseConexion = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video.");
    } else {
        
    }

    return parseConexion;
};

async function searchVideos(key_word) {
    const conexion = await fetch(`http://localhost:3001/videos?q=${key_word}`);
    const parseConexion = conexion.json();

    console.log(key_word);
    return parseConexion;
}

export const conexionAPI={
    listVideos, sendVideo, searchVideos
};