import ceviche from "./images/ceviche.jpg";
import anticuchos from "./images/anticuchos.jpg";
import papashuancaina from "./images/papashuancaina.jpg";
import roomservice from "./images/roomservice.svg";

export function loadMenu() {
    const container = document.getElementById("content");
    const menu = document.createElement("div");
    menu.classList.add("menutablero");
    const tituloprincipal = document.createElement("h1");
    tituloprincipal.textContent = "MENU";
    const entrada = document.createElement("h2");
    entrada.textContent = "ENTRADA";
    let funcionentrada = cargarentrada();
    const fondos = document.createElement("h2");
    fondos.textContent = "FONDOS";
    let funcionfondos = cargarfondos();
    const postres = document.createElement("h2");
    postres.textContent = "POSTRES";
    let funcionpostres = cargarpostre();
    container.appendChild(menu);
    menu.appendChild(tituloprincipal);
    menu.appendChild(entrada);
    menu.appendChild(funcionentrada);
    menu.appendChild(fondos);
    menu.appendChild(funcionfondos);
    menu.appendChild(postres);
    menu.appendChild(funcionpostres);
}

function cargarentrada() {
    const carta_entrada = document.createElement("div");
    carta_entrada.classList.add("carta_entrada");
    const entrada1 = document.createElement("div");
    const cevicheimagen = new Image();
    cevicheimagen.src = ceviche;
    const cevichetexto = document.createElement("p");
    cevichetexto.textContent =
        "El ceviche es uno de los platos más emblemáticos del Perú, preparado con pescado fresco marinado en jugo de limón, acompañado de cebolla roja, ají y cilantro. Su sabor es fresco, cítrico y ligeramente picante, ofreciendo una experiencia única que refleja la riqueza de la gastronomía peruana.";

    const pedirentrada1 = document.createElement("div");
    const precio1 = document.createElement("p");
    precio1.textContent = "S/12";
    const boton1 = document.createElement("button");

    const entrada2 = document.createElement("div");
    const anticuchoimagen = new Image();
    anticuchoimagen.src = anticuchos;
    const anticuchotexto = document.createElement("p");
    anticuchotexto.textContent =
        "El anticucho es uno de los platos más emblemáticos de la gastronomía peruana. Consiste en trozos de carne tradicionalmente corazón de res marinados en una mezcla de ají panca, ajo, vinagre y especias, luego ensartados en brochetas y cocinados a la parrilla. Es una receta con raíces históricas que combina tradición y sabor en cada bocado.";

    const pedirentrada2 = document.createElement("div");
    const precio2 = document.createElement("p");
    precio2.textContent = "S/18";
    const boton2 = document.createElement("button");

    const entrada3 = document.createElement("div");
    const huancainaimagen = new Image();
    huancainaimagen.src = papashuancaina;
    const huancainatexto = document.createElement("p");
    huancainatexto.textContent =
        "La papa a la huancaína es un clásico de la cocina peruana. Consiste en papas cocidas servidas con una cremosa salsa hecha de queso fresco, ají amarillo, leche y galleta, que le da un sabor suave y ligeramente picante. Se suele acompañar con huevo duro, aceitunas y lechuga, combinando tradición y frescura en cada bocado.";

    const pedirentrada3 = document.createElement("div");
    const precio3 = document.createElement("p");
    precio3.textContent = "S/10";
    const boton3 = document.createElement("button");

    const totalpedir = [pedirentrada1, pedirentrada2, pedirentrada3];
    totalpedir.forEach((elemento) => elemento.classList.add("pedidosentrada"));
    const totalentradas = [entrada1, entrada2, entrada3];
    totalentradas.forEach((elemento) => elemento.classList.add("entradas"));
    const totalbotones = [boton1, boton2, boton3];
    totalbotones.forEach((elemento) => {
        const img = document.createElement("img");
        img.classList.add("iconopedir");
        img.src = roomservice;
        elemento.appendChild(img);
    });
    carta_entrada.appendChild(entrada1);
    entrada1.appendChild(cevicheimagen);
    entrada1.appendChild(cevichetexto);
    entrada1.appendChild(pedirentrada1);
    pedirentrada1.appendChild(precio1);
    pedirentrada1.appendChild(boton1);
    carta_entrada.appendChild(entrada2);
    entrada2.appendChild(anticuchoimagen);
    entrada2.appendChild(anticuchotexto);
    entrada2.appendChild(pedirentrada2);
    pedirentrada2.appendChild(precio2);
    pedirentrada2.appendChild(boton2);
    carta_entrada.appendChild(entrada3);
    entrada3.appendChild(huancainaimagen);
    entrada3.appendChild(huancainatexto);
    entrada3.appendChild(pedirentrada3);
    pedirentrada3.appendChild(precio3);
    pedirentrada3.appendChild(boton3);
    return carta_entrada;
}

function cargarfondos() {
    const carta_fondos = document.createElement("div");
    carta_fondos.classList.add("cartas_fondos");
    const fondos1 = document.createElement("div");
    const fondos2 = document.createElement("div");
    const fondos3 = document.createElement("div");
    const fondos4 = document.createElement("div");
    const fondos5 = document.createElement("div");
    const fondos6 = document.createElement("div");
    const totalfondos = [fondos1, fondos2, fondos3, fondos4, fondos5, fondos6];
    totalfondos.forEach((elemento) => elemento.classList.add("fondos"));
    carta_fondos.appendChild(fondos1);
    carta_fondos.appendChild(fondos2);
    carta_fondos.appendChild(fondos3);
    carta_fondos.appendChild(fondos4);
    carta_fondos.appendChild(fondos5);
    carta_fondos.appendChild(fondos6);
    return carta_fondos;
}

function cargarpostre() {
    const carta_postres = document.createElement("div");
    carta_postres.classList.add("carta_postres");
    const postre1 = document.createElement("div");
    const postre2 = document.createElement("div");
    const postre3 = document.createElement("div");
    const totalpostres = [postre1, postre2, postre3];
    totalpostres.forEach((elemento) => elemento.classList.add("postres"));
    carta_postres.appendChild(postre1);
    carta_postres.appendChild(postre2);
    carta_postres.appendChild(postre3);
    return carta_postres;
}
