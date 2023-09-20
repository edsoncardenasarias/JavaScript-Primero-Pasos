function crearPersona(nombre, edad) {
    return {
        nombre,
        edad,
        saludar() {
            console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
        }
    };
}

const persona1 = crearPersona("Juan", 30);
const persona2 = crearPersona("Ana", 25);

persona1.saludar(); // "Hola, soy Juan y tengo 30 años."
persona2.saludar(); // "Hola, soy Ana y tengo 25 años."