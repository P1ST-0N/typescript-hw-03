//class Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); // Генеруємо випадковий підпис
  }

  getSignature(): number {
    return this.signature;
  }
}

//class Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false; // Замкнуті двері за замовчуванням
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void; // Абстрактний метод відкриття дверей

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} came into the house.`);
    } else {
      console.log("The door is closed. Cannot let anyone in.");
    }
  }
}

//class MyHouse
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Invalid key. Cannot open the door.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
