const EventEmitter = require('events');

// Sujeto (Notificador)
class Notificador extends EventEmitter {
    constructor() {
        super();
        this.numerosDisponibles = [];
    }

    // Método para agregar un nuevo número disponible
    agregarNumero(numero) {
        console.log(`Nuevo número disponible: ${numero}`);
        this.numerosDisponibles.push(numero);
        this.emit('nuevoNumero', numero);  // Emitir evento cuando un nuevo número esté disponible
    }
}

// Observador (Suscriptor)
class Suscriptor {
    constructor(nombre, revistaInteres) {
        this.nombre = nombre;
        this.revistaInteres = revistaInteres;
    }

    // Método que recibe la notificación cuando un nuevo número es publicado
    recibirNotificacion(numero) {
        if (numero === this.revistaInteres) {
            console.log(`${this.nombre} recibe el nuevo número de la revista: ${numero}`);
        }
    }
}

// Crear una instancia del Notificador
const notificador = new Notificador();

// Crear suscriptores interesados en diferentes revistas
const suscriptor1 = new Suscriptor("Carlos", "Revista Tech");
const suscriptor2 = new Suscriptor("Ana", "Revista Lifestyle");
const suscriptor3 = new Suscriptor("Pedro", "Revista Tech");

// Suscribirse al evento 'nuevoNumero' del notificador
notificador.on('nuevoNumero', (numero) => {
    // Cada suscriptor recibe la notificación
    suscriptor1.recibirNotificacion(numero);
    suscriptor2.recibirNotificacion(numero);
    suscriptor3.recibirNotificacion(numero);
});

// El notificador agrega un nuevo número de la "Revista Tech"
notificador.agregarNumero("Revista Tech - Julio 2025"); // Carlos y Pedro recibirán el número

// El notificador agrega un nuevo número de la "Revista Lifestyle"
notificador.agregarNumero("Revista Lifestyle - Julio 2025"); // Ana recibirá el número

// El notificador agrega un número de la "Revista Cocina"
notificador.agregarNumero("Revista Cocina - Julio 2025"); // Nadie recibe este número

// Eliminar un suscriptor (Ana deja de recibir notificaciones)
notificador.removeListener('nuevoNumero', suscriptor2.recibirNotificacion);

// El notificador agrega un nuevo número de la "Revista Lifestyle"
notificador.agregarNumero("Revista Lifestyle - Agosto 2025"); // Solo Carlos y Pedro recibirán el número
