class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

const producto1 = new Producto("Laptop", 1000);
const producto2 = new Producto("Teléfono", 500);

producto1.mostrarDetalles(); // "Producto: Laptop, Precio: $1000"
producto2.mostrarDetalles(); // "Producto: Teléfono, Precio: $500"