// Sujeto que representa la Tienda
class Tienda {
    constructor() {
        this.productosDisponibles = [];
        this.clientes = [];
    }

    // Método para agregar un cliente como observador
    addCliente(cliente) {
        this.clientes.push(cliente);
    }

    // Método para eliminar un cliente
    removeCliente(cliente) {
        this.clientes = this.clientes.filter(c => c !== cliente);
    }

    // Método para notificar a los clientes cuando un nuevo producto está disponible
    notify() {
        this.clientes.forEach(cliente => cliente.update(this.productosDisponibles));
    }

    // Método para agregar un nuevo producto disponible
    agregarProducto(producto) {
        console.log(`Producto disponible en la tienda: ${producto}`);
        this.productosDisponibles.push(producto);
        this.notify(); // Notificar a todos los clientes interesados
    }
}

// Observador que representa al Cliente
class Cliente {
    constructor(nombre, productoInteres) {
        this.nombre = nombre;
        this.productoInteres = productoInteres;
    }

    // Método que recibe la notificación de la Tienda
    update(productosDisponibles) {
        if (productosDisponibles.includes(this.productoInteres)) {
            console.log(`${this.nombre} recibe notificación: ¡El ${this.productoInteres} ya está disponible!`);
        }
    }
}

// Crear una instancia de Tienda
const tienda = new Tienda();

// Crear algunos clientes interesados en productos específicos
const cliente1 = new Cliente("Juan", "iPhone 15");
const cliente2 = new Cliente("Ana", "Samsung Galaxy S22");
const cliente3 = new Cliente("Carlos", "iPhone 15");

// Registrar los clientes interesados en ciertos productos
tienda.addCliente(cliente1);
tienda.addCliente(cliente2);
tienda.addCliente(cliente3);

// La tienda agrega un nuevo producto (notificar a los clientes interesados)
tienda.agregarProducto("iPhone 15"); // Solo Juan y Carlos recibirán notificación
tienda.agregarProducto("Samsung Galaxy S22"); // Solo Ana recibirá notificación

// La tienda agrega un producto que no interesa a ningún cliente registrado
tienda.agregarProducto("Sony Xperia 5");

// También podemos eliminar a un cliente que ya no esté interesado
tienda.removeCliente(cliente2);
tienda.agregarProducto("Samsung Galaxy Z Fold 5"); // Ahora solo Juan y Carlos recibirán notificación
