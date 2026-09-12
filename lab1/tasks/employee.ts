abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    abstract getAnnualBonus(): number;
}

interface Payable {
    pay(): void;
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }
    public getAnnualBonus(): number {
        return this.salary * 0.2;
    }
    public pay(): void {
        console.log(`${this.name} has been paid. + Annual Bonus: ${this.getAnnualBonus()}`);
    }
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }
    public getAnnualBonus(): number {
        return this.salary * 0.1;
    }
    public pay(): void {
        console.log(`${this.name} has been paid. + Annual Bonus: ${this.getAnnualBonus()}`);
    }
}

let sum : number = 0;
const allEmployees: Employee[] = [
    new Manager("Alice", 35, 80000),
    new Developer("Bob", 28, 60000),
];

allEmployees.forEach(employee => {
    sum += employee.getAnnualBonus();
});
console.log(`Total Annual Bonuses: ${sum}`);