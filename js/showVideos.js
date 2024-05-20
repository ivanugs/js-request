import { conexionAPI } from "./conexionAPI.js";

const list = document.querySelector("[data-lista]");

export default function createCard(titulo, url, descripcion, imagen){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src=${imagen}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
        </li>
    `;
    return video;
};

async function listVideos(){
    try {
        const listAPI = await conexionAPI.listVideos();
        listAPI.forEach(video => list.appendChild(createCard(video.titulo, video.url, video.descripcion, video.imagen)));
    } catch (error) {
        list.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion.</h2>`;
        console.log(error);
    }
};

listVideos();