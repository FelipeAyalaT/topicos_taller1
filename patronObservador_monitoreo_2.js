// Sujeto que representa una Bolsa
class StockPrice {
  constructor() {
      this.price = 100;
      this.observers = [];
  }

  // Método para agregar un observador
  addObserver(observer) {
      this.observers.push(observer);
  }

  // Método para notificar a los observadores cuando el precio cambia
  notify() {
      this.observers.forEach(observer => observer.update(this.price));
  }

  // Método para cambiar el precio y notificar a los observadores
  setPrice(newPrice) {
      console.log(`Nuevo precio de la acción: ${newPrice}`);
      this.price = newPrice;
      this.notify(); // Notificar a todos los observadores
  }
}

// Observador que recibe la notificación
class Investor {
  update(price) {
      console.log(`Notificación de precio: El precio de la acción ha cambiado a ${price}`);
  }
}

// Crear sujeto (StockPrice) y observador (Investor)
const stock = new StockPrice();
const investor = new Investor();

// Agregar el observador
stock.addObserver(investor);

// Cambiar el precio de la acción
stock.setPrice(120); // Notificará al observador
stock.setPrice(130); // Notificará nuevamente
