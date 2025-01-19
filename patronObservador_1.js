class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        console.log("¡Estado actualizado!");
    }
}

// Ejemplo de uso
const subject = new Subject();
const observer1 = new Observer();
subject.addObserver(observer1);
const observer2 = new Observer();
subject.addObserver(observer2);
subject.notify(); // Llamará al método update del observer1
