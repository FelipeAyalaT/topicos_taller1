// Sujeto que representa un evento de entrada de texto
class InputField {
    constructor() {
        this.text = '';
        this.observers = [];
    }

    // Método para agregar un observador (el componente que se actualizará)
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Método para notificar a los observadores cuando el texto cambia
    notify() {
        this.observers.forEach(observer => observer.update(this.text));
    }

    // Método para simular un cambio de texto
    changeText(newText) {
        this.text = newText;
        console.log(`El texto del campo de entrada ha cambiado a: ${newText}`);
        this.notify(); // Notificar a todos los observadores
    }
}

// Observador que actualiza la interfaz con el nuevo texto
class TextDisplay {
    update(text) {
        console.log(`Actualizando la interfaz con el texto: ${text}`);
    }
}

// Crear sujeto (InputField) y observador (TextDisplay)
const inputField = new InputField();
const textDisplay = new TextDisplay();

// Agregar el observador
inputField.addObserver(textDisplay);

// Simular un cambio de texto (evento de usuario)
inputField.changeText("Hola, mundo!");
inputField.changeText("Nuevo texto!");
