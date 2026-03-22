import mapas from "./images/mapa.jpg";

export function loadContact() {
    const container = document.getElementById("content");
    const cuadrocontacto = document.createElement("div");
    cuadrocontacto.classList.add("cuadrocontacto");
    const cuadromapa = document.createElement("div");
    cuadromapa.classList.add("cuadromapa");
    const horario = document.createElement("div");
    horario.classList.add("horario");
    const atencion1 = document.createElement("h2");
    atencion1.textContent = "HORARIO";
    const atencion2 = document.createElement("p");
    atencion2.textContent = "Lun - Dom: 8am - 8pm";
    const mapaimagen = new Image();
    mapaimagen.src = mapas;

    const cuadroform = document.createElement("div");
    cuadroform.classList.add("cuadroform");
    const contacto = document.createElement("div");
    contacto.classList.add("contacto");
    const numero = document.createElement("h3");
    numero.textContent = "📞 Teléfono: +51 1456 7890";
    const correo = document.createElement("h3");
    correo.textContent = "📧 Correo: reservas@saborysol.com";
    const formulario = document.createElement("form");
    formulario.classList.add("formulario");

    const campo1 = document.createElement("div");
    campo1.classList.add("campo1");
    const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre: ";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Tu nombre";

    const campo2 = document.createElement("div");
    campo2.classList.add("campo2");
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Correo:";
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "Tu correo";

    const campo3 = document.createElement("div");
    campo3.classList.add("campo3");
    const labelMensaje = document.createElement("label");
    labelMensaje.textContent = "Mensaje:";
    const textarea = document.createElement("textarea");
    textarea.placeholder = "Tu mensaje";

    const boton = document.createElement("button");
    boton.textContent = "Enviar";

    boton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Se envio el formulario de contacto");
    });

    container.appendChild(cuadrocontacto);
    cuadrocontacto.appendChild(cuadromapa);
    cuadromapa.appendChild(horario);
    horario.appendChild(atencion1);
    horario.appendChild(atencion2);
    cuadromapa.appendChild(mapaimagen);
    cuadrocontacto.appendChild(cuadroform);
    cuadroform.appendChild(contacto);
    contacto.appendChild(numero);
    contacto.appendChild(correo);
    cuadroform.appendChild(formulario);
    formulario.appendChild(campo1);
    campo1.appendChild(labelNombre);
    campo1.appendChild(inputNombre);
    formulario.appendChild(campo2);
    campo2.appendChild(labelEmail);
    campo2.appendChild(inputEmail);
    formulario.appendChild(campo3);
    campo3.appendChild(labelMensaje);
    campo3.appendChild(textarea);
    formulario.append(boton);
}
