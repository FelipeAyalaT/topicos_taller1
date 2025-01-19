class Blockchain {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  addBlock(data) {
    console.log(`Nuevo bloque añadido: ${data}`);
    this.notifyObservers(data);
  }

  notifyObservers(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Node {
  update(data) {
    console.log(`Nodo sincronizado con el bloque: ${data}`);
  }
}

// Uso
const blockchain = new Blockchain();
const node1 = new Node();
const node2 = new Node();

blockchain.subscribe(node1);
blockchain.subscribe(node2);

blockchain.addBlock("Transacción 12345");
