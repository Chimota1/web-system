interface Animal {
  name: string;
  age: number;
  yearsInZoo?: number;
  makeSound(): string;
}

class Cat implements Animal {
  name: string;
  age: number;
  yearsInZoo?: number;

  constructor(name: string, age: number, yearsInZoo?: number) {
    this.name = name;
    this.age = age;
    if (yearsInZoo !== undefined) this.yearsInZoo = yearsInZoo;
  }

  makeSound(): string {
    return "Meow!";
  }
}

class Bird implements Animal {
  name: string;
  age: number;
  yearsInZoo?: number;

  constructor(name: string, age: number, yearsInZoo?: number) {
    this.name = name;
    this.age = age;
    if (yearsInZoo !== undefined) this.yearsInZoo = yearsInZoo;
  }
  makeSound(): string {
    return "Chirp!";
  }
}

class Fish implements Animal {
  name: string;
  age: number;
  yearsInZoo?: number;

  constructor(name: string, age: number, yearsInZoo?: number) {
    this.name = name;
    this.age = age;
    if (yearsInZoo !== undefined) this.yearsInZoo = yearsInZoo;
  }

  makeSound(): string {
    return "Blub!";
  }
}

const fish: Fish = new Fish("Nemo", 2);
const cat: Cat = new Cat("Whiskers", 3, 5);
const bird: Bird = new Bird("Tweety", 1);

console.log(`${fish.name} is ${fish.age} years old and says: ${fish.makeSound()}`);
console.log(`${cat.name} is ${cat.yearsInZoo} years in the zoo and says: ${cat.makeSound()}`);
console.log(`${bird.name} is ${bird.age} years old and says: ${bird.makeSound()}`);