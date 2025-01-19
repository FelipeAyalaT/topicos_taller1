// Sujeto que representa un sistema de ofertas
class OfferSystem {
    constructor() {
        this.offers = [];
        this.observers = [];
    }

    // Método para agregar un observador (en este caso, un usuario)
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Método para notificar a los observadores (enviar correos electrónicos)
    notify() {
        this.observers.forEach(observer => observer.sendEmail(this.offers));
    }

    // Método para agregar una nueva oferta
    addOffer(offer) {
        this.offers.push(offer);
        console.log(`Nueva oferta disponible: ${offer}`);
        this.notify(); // Notificar a todos los observadores
    }
}

// Observador que recibe la notificación (enviando un correo electrónico)
class User {
    sendEmail(offers) {
        console.log(`Enviando correo electrónico: Nuevas ofertas: ${offers.join(", ")}`);
    }
}

// Crear sujeto (OfferSystem) y observador (User)
const offerSystem = new OfferSystem();
const user1 = new User();

// Agregar el observador (usuario)
offerSystem.addObserver(user1);

// Agregar una nueva oferta
offerSystem.addOffer("Descuento 50% en tecnología");
offerSystem.addOffer("Oferta 2x1 en ropa");
