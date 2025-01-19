// Sujeto que representa un componente de la GUI
class Button {
    constructor() {
        this.state = 'default'; // Estado inicial del botón
        this.observers = [];
    }

    // Método para agregar un observador (el componente GUI)
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Método para notificar a los observadores cuando cambia el estado
    notify() {
        this.observers.forEach(observer => observer.update(this.state));
    }

    // Método para cambiar el estado (por ejemplo, cambiar el color del botón)
    click() {
        this.state = 'clicked';
        console.log('El botón fue clickeado');
        this.notify(); // Notificar a todos los observadores
    }
}

// Observador que actualiza la interfaz de usuario
class Display {
    update(state) {
        if (state === 'clicked') {
            console.log('El color del botón ha cambiado a verde');
        }
    }
}

// Crear el sujeto (Button) y el observador (Display)
const button = new Button();
const display = new Display();

// Agregar el observador (Display)
button.addObserver(display);

// Simular un clic en el botón
button.click();
