class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal {
  // Não tem nada aqui.
  makeNoise() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Belu");
console.log(dog.name);
dog.makeNoise();
// dog.run();

class Cat extends Animal {
  // Não tem nada aqui
  makeNoise() {
    console.log("Miau...Miau..");
  }

  run() {
    console.log("Correndo...");
  }
}

const cat = new Cat("Milu");
console.log(cat.name);
cat.makeNoise();
cat.run();
