/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  public name: string;
  protected department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000); // Викликаємо конструктор суперкласу та збільшуємо salary на 10000
  }
}

// Приклад використання:
const employee1 = new Employee("John", "Engineering", 50000);
console.log(employee1.getEmployeeDetails()); // Output: Name: John, Department: Engineering, Salary: 50000

const manager1 = new Manager("Alice", "Management", 60000);
console.log(manager1.getEmployeeDetails()); // Output: Name: Alice, Department: Management, Salary: 70000
