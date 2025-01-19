class Sensor {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(data) {
      this.observers.forEach((observer) => observer.update(data));
    }
  
    setTemperature(temp) {
      console.log(`Temperatura actual: ${temp}°C`);
      this.notify(temp);
    }
  }
  
  class AirConditioner {
    update(temp) {
      if (temp > 25) {
        console.log("Encendiendo aire acondicionado...");
      } else {
        console.log("Temperatura ideal, aire acondicionado apagado.");
      }
    }
  }
  
  // Uso
  const sensor = new Sensor();
  const ac = new AirConditioner();
  
  sensor.subscribe(ac);
  
  sensor.setTemperature(30); // Encendiendo aire acondicionado...
  sensor.setTemperature(22); // Temperatura ideal, aire acondicionado apagado.
  