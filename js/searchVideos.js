import { conexionAPI } from "./conexionAPI.js";
import createCard from "./showVideos.js";


async function searchVideos(evento){
    evento.preventDefault();

    const searchData = document.querySelector("[data-search]").value;
    const search = await conexionAPI.searchVideos(searchData);

    const list = document.querySelector("[data-lista]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(video => list.appendChild(createCard(video.titulo, video.url, video.descripcion, video.imagen)));

    if (search.length == 0) {}
        list.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos para ${searchData}.</h2>`
    }

const boton = document.querySelector("[data-search-botton]");

boton.addEventListener("click", evento => searchVideos(evento));