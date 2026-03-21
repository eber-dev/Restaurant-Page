import fondo from "./images/fondohome.png";

export function loadHome() {
    const content = document.getElementById("content");
    const cuadro = document.createElement("div");
    const texto = document.createElement("div");
    cuadro.classList.add("cuadro");
    texto.classList.add("texto");
    const imagen = new Image();
    imagen.src = fondo;
    const titulo = document.createElement("h1");
    const subtitulo = document.createElement("h2");
    const frase1 = document.createElement("p");
    const frase2 = document.createElement("p");
    titulo.textContent = "Sabor y Sol";
    subtitulo.textContent = "La excelencia se sirve en cada plato";
    frase1.textContent = "Cocina Peruana y Latina Autentica en el Corazon";
    frase2.textContent = "de la Ciudad. Reserca tu mesa hoy";

    content.appendChild(cuadro);
    cuadro.appendChild(imagen);
    cuadro.appendChild(texto);
    texto.appendChild(titulo);
    texto.appendChild(subtitulo);
    texto.appendChild(frase1);
    texto.appendChild(frase2);
}
