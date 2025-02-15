class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do  animal");
  }
}

// Extendes - herança
class Dog extends Animal {
  // Não tem nada aqui
}

class Cat extends Animal {
  // Não tem nada aqui
}

const dog = new Dog("Belu");
console.log(dog.name);
dog.makeNoise;

const cat = new Cat("Mel");
console.log(cat.name);
cat.makeNoise;
