import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function createVideo(evento){

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random() * 10).toString();

    try {
        await conexionAPI.sendVideo(titulo, descripcion, url, imagen);
        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener("submit", evento => createVideo(evento));