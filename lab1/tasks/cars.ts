abstract class Car 
{
    protected price: number;
    protected name: string;
    protected speed: number;
    constructor(price: number, name: string, speed: number) {
        this.price = price;
        this.name = name;
        this.speed = speed;
    }
}

class Toyota extends Car {
    constructor(price: number, name: string, speed: number) {
        super(price, name, speed);
    }   
    public showDetails(): void {
        console.log(`Car Name: ${this.name}, Price: ${this.price}, Speed: ${this.speed}`);
    }
}

class BMW extends Car {
    constructor(price: number, name: string, speed: number) {
        super(price, name, speed);
    }
    public showDetails(): void {
        console.log(`Car Name: ${this.name}, Price: ${this.price}, Speed: ${this.speed}`);
    }
}

class Mercedes extends Car {
    constructor(price: number, name: string, speed: number) {
        super(price, name, speed);
    }
    public showDetails(): void {
        console.log(`Car Name: ${this.name}, Price: ${this.price}, Speed: ${this.speed}`);
    }
}

const toyota: Toyota = new Toyota(30000, "Toyota Camry", 120);
const bmw: BMW = new BMW(50000, "BMW 3 Series", 150);
const mercedes: Mercedes = new Mercedes(60000, "Mercedes-Benz C-Class", 160);

toyota.showDetails();
bmw.showDetails();
mercedes.showDetails();