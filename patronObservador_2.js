// Sujeto (Publisher)
class ConcreteSubject {
    constructor() {
        this.state = null; // Estado del sujeto
        this.observers = []; // Lista de observadores
    }

    // Método para añadir un observador
    attach(observer) {
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    // Método para eliminar un observador
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
            console.log('Subject: Detached an observer.');
        }
    }

    // Método para notificar a todos los observadores
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    // Lógica de negocio que cambia el estado del sujeto
    someBusinessLogic() {
        console.log("\nSubject: I'm doing something important.");
        this.state = Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify(); // Notifica a los observadores después de cambiar el estado
    }
}

// Observador (Subscriber)
class ConcreteObserverA {
    update(subject) {
        if (subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB {
    update(subject) {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

// Código de cliente
const subject = new ConcreteSubject(); // Crear el sujeto

const observer1 = new ConcreteObserverA(); // Crear un observador
subject.attach(observer1); // Añadir al sujeto

const observer2 = new ConcreteObserverB(); // Crear otro observador
subject.attach(observer2); // Añadir al sujeto

subject.someBusinessLogic(); // Cambia el estado y notifica
subject.someBusinessLogic(); // Cambia el estado y notifica

subject.detach(observer2); // Eliminar un observador
subject.someBusinessLogic(); // Cambia el estado y notifica nuevamente
