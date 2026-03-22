import ceviche from "./images/ceviche.jpg";
import anticuchos from "./images/anticuchos.jpg";
import papashuancaina from "./images/papashuancaina.jpg";
import roomservice from "./images/roomservice.svg";
import lomo from "./images/lomosaltado.jpg";
import tallarin from "./images/tallarinesverdes.jpg";
import pato from "./images/arrozpato.jpg";
import carapulcra from "./images/carapulcra.jpg";
import pollo from "./images/polloalabrasa.jpg";
import marisco from "./images/arrozmariscos.jpg";
import chicha from "./images/chicha.jpeg";
import limonada from "./images/limonada.jpg";
import emoliente from "./images/emoliente.jpg";

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
    postres.textContent = "BEBIDAS";
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
    const lomoimagen = new Image();
    lomoimagen.src = lomo;
    const lomotexto = document.createElement("p");
    lomotexto.textContent =
        "Un clásico irresistible que fusiona la tradición peruana con influencias chinas. Tiernos trozos de carne de res salteados al wok con cebolla roja, tomate y un toque de sillao, acompañados de papas fritas crujientes y arroz blanco. Un plato jugoso, intenso y lleno de sabor que conquista desde el primer bocado.";

    const pedirfondo1 = document.createElement("div");
    const precio1 = document.createElement("p");
    precio1.textContent = "S/20";
    const boton1 = document.createElement("button");

    const fondos2 = document.createElement("div");
    const tallarinimage = new Image();
    tallarinimage.src = tallarin;
    const tallarintexto = document.createElement("p");
    tallarintexto.textContent =
        "Una deliciosa fusión de pasta al estilo peruano con una cremosa salsa de albahaca, espinaca y queso, acompañada de un jugoso bistec a la plancha. Un plato vibrante, aromático y lleno de frescura que encanta a todos.";

    const pedirfondo2 = document.createElement("div");
    const precio2 = document.createElement("p");
    precio2.textContent = "S/17";
    const boton2 = document.createElement("button");

    const fondos3 = document.createElement("div");
    const patoimagen = new Image();
    patoimagen.src = pato;
    const patotexto = document.createElement("p");
    patotexto.textContent =
        "Un plato emblemático del norte peruano, donde el arroz se impregna de culantro fresco, cerveza negra y especias, logrando un sabor profundo e inolvidable. Acompañado de jugoso pato cocido lentamente, cada porción es una experiencia intensa, aromática y llena de tradición.";

    const pedirfondo3 = document.createElement("div");
    const precio3 = document.createElement("p");
    precio3.textContent = "S/19";
    const boton3 = document.createElement("button");

    const fondos4 = document.createElement("div");
    const carapulcraimagen = new Image();
    carapulcraimagen.src = carapulcra;
    const carapulcratexto = document.createElement("p");
    carapulcratexto.textContent =
        "Uno de los platos más antiguos del Perú, preparado con papa seca, carne de cerdo o pollo, maní y ají panca. Su textura espesa y su sabor ahumado lo convierten en una joya de la cocina tradicional, ideal para paladares exigentes.";

    const pedirfondo4 = document.createElement("div");
    const precio4 = document.createElement("p");
    precio4.textContent = "S/15";
    const boton4 = document.createElement("button");

    const fondos5 = document.createElement("div");
    const polloimagen = new Image();
    polloimagen.src = pollo;
    const pollotexto = document.createElement("p");
    pollotexto.textContent =
        "El orgullo de la gastronomía peruana: pollo jugoso marinado con especias secretas y cocido lentamente al carbón. Su piel dorada y crocante contrasta con su interior tierno, acompañado de papas fritas y cremas que elevan cada bocado.";

    const pedirfondo5 = document.createElement("div");
    const precio5 = document.createElement("p");
    precio5.textContent = "S/40";
    const boton5 = document.createElement("button");

    const fondos6 = document.createElement("div");
    const mariscoimagen = new Image();
    mariscoimagen.src = marisco;
    const mariscotexto = document.createElement("p");
    mariscotexto.textContent =
        "Un festín marino lleno de color y sabor, preparado con arroz graneado mezclado con una selección de mariscos frescos, ajíes y especias. Cada cucharada transporta al comensal a la costa peruana, con un equilibrio perfecto entre frescura y sazón.";

    const pedirfondo6 = document.createElement("div");
    const precio6 = document.createElement("p");
    precio6.textContent = "S/18";
    const boton6 = document.createElement("button");

    const totalpedir = [pedirfondo1, pedirfondo2, pedirfondo3, pedirfondo4, pedirfondo5, pedirfondo6];
    totalpedir.forEach((elemento) => elemento.classList.add("pedidosfondo"));
    const totalfondos = [fondos1, fondos2, fondos3, fondos4, fondos5, fondos6];
    totalfondos.forEach((elemento) => elemento.classList.add("fondos"));
    const totalbotones = [boton1, boton2, boton3, boton4, boton5, boton6];
    totalbotones.forEach((elemento) => {
        const img = document.createElement("img");
        img.classList.add("iconopedir");
        img.src = roomservice;
        elemento.appendChild(img);
    });
    carta_fondos.appendChild(fondos1);
    fondos1.appendChild(lomoimagen);
    fondos1.appendChild(lomotexto);
    fondos1.appendChild(pedirfondo1);
    pedirfondo1.appendChild(precio1);
    pedirfondo1.appendChild(boton1);
    carta_fondos.appendChild(fondos2);
    fondos2.appendChild(tallarinimage);
    fondos2.appendChild(tallarintexto);
    fondos2.appendChild(pedirfondo2);
    pedirfondo2.appendChild(precio2);
    pedirfondo2.appendChild(boton2);
    carta_fondos.appendChild(fondos3);
    fondos3.appendChild(patoimagen);
    fondos3.appendChild(patotexto);
    fondos3.appendChild(pedirfondo3);
    pedirfondo3.appendChild(precio3);
    pedirfondo3.appendChild(boton3);
    carta_fondos.appendChild(fondos4);
    fondos4.appendChild(carapulcraimagen);
    fondos4.appendChild(carapulcratexto);
    fondos4.appendChild(pedirfondo4);
    pedirfondo4.appendChild(precio4);
    pedirfondo4.appendChild(boton4);
    carta_fondos.appendChild(fondos5);
    fondos5.appendChild(polloimagen);
    fondos5.appendChild(pollotexto);
    fondos5.appendChild(pedirfondo5);
    pedirfondo5.appendChild(precio5);
    pedirfondo5.appendChild(boton5);
    carta_fondos.appendChild(fondos6);
    fondos6.appendChild(mariscoimagen);
    fondos6.appendChild(mariscotexto);
    fondos6.appendChild(pedirfondo6);
    pedirfondo6.appendChild(precio6);
    pedirfondo6.appendChild(boton6);
    return carta_fondos;
}

function cargarpostre() {
    const carta_postres = document.createElement("div");
    carta_postres.classList.add("carta_postres");
    const postre1 = document.createElement("div");
    const chichaimagen = new Image();
    chichaimagen.src = chicha;
    const chichatexto = document.createElement("p");
    chichatexto.textContent =
        "Bebida tradicional peruana elaborada con maíz morado hervido con piña, canela y clavo de olor. Refrescante, ligeramente dulce y con un toque especiado que la hace única y muy representativa del Perú.";

    const pedirbebida1 = document.createElement("div");
    const precio1 = document.createElement("p");
    precio1.textContent = "S/12";
    const boton1 = document.createElement("button");

    const postre2 = document.createElement("div");
    const limonadaimagen = new Image();
    limonadaimagen.src = limonada;
    const limonadatexto = document.createElement("p");
    limonadatexto.textContent =
        "Refrescante bebida preparada con limón peruano, conocido por su intensidad y aroma. Servida bien fría, es ideal para acompañar cualquier plato por su frescura y acidez equilibrada.";
    const pedirbebida2 = document.createElement("div");
    const precio2 = document.createElement("p");
    precio2.textContent = "S/12";
    const boton2 = document.createElement("button");

    const postre3 = document.createElement("div");
    const emolienteimagen = new Image();
    emolienteimagen.src = emoliente;
    const emolientetexto = document.createElement("p");
    emolientetexto.textContent =
        "Bebida caliente tradicional preparada con hierbas, cebada y linaza. Reconocida por sus propiedades digestivas y su sabor reconfortante, perfecta para cualquier momento del día.";
    const pedirbebida3 = document.createElement("div");
    const precio3 = document.createElement("p");
    precio3.textContent = "S/12";
    const boton3 = document.createElement("button");

    const totalbeber = [pedirbebida1, pedirbebida2, pedirbebida3];
    totalbeber.forEach((elemento) => elemento.classList.add("pedidosbebida"));
    const totalpostres = [postre1, postre2, postre3];
    totalpostres.forEach((elemento) => elemento.classList.add("postres"));
    const totalbotones = [boton1, boton2, boton3];
    totalbotones.forEach((elemento) => {
        const img = document.createElement("img");
        img.classList.add("iconopedir");
        img.src = roomservice;
        elemento.appendChild(img);
    });
    carta_postres.appendChild(postre1);
    postre1.appendChild(chichaimagen);
    postre1.appendChild(chichatexto);
    postre1.appendChild(pedirbebida1);
    pedirbebida1.appendChild(precio1);
    pedirbebida1.appendChild(boton1);
    carta_postres.appendChild(postre2);
    postre2.appendChild(limonadaimagen);
    postre2.appendChild(limonadatexto);
    postre2.appendChild(pedirbebida2);
    pedirbebida2.appendChild(precio2);
    pedirbebida2.appendChild(boton2);
    carta_postres.appendChild(postre3);
    postre3.appendChild(emolienteimagen);
    postre3.appendChild(emolientetexto);
    postre3.appendChild(pedirbebida3);
    pedirbebida3.appendChild(precio3);
    pedirbebida3.appendChild(boton3);
    return carta_postres;
}
