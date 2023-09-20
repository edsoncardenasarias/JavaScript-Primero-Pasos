function crearElemento(tag, contenido) {
    const elemento = document.createElement(tag);
    elemento.textContent = contenido;
    return elemento;
}

const parrafo = crearElemento("p", "Este es un párrafo generado dinámicamente.");
const encabezado = crearElemento("h1", "Bienevenidos");

document.body.appendChild(encabezado);
document.body.appendChild(parrafo);