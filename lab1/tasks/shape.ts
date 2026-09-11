interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Circle implements Shape {
    radius: number;
    pi: number = Math.PI;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.pi * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * this.pi * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    width: number
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    sideA: number
    sideB: number
    sideC: number

    constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea(): number {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

function calculateShapesAreaAndPerimeter(shapes: Shape[], totalArea: number, totalPerimeter: number): void {
    for (const shape of shapes) {
        totalArea += shape.getArea();
        totalPerimeter += shape.getPerimeter();
    }

    console.log(`Total Area: ${totalArea}`);
    console.log(`Total Perimeter: ${totalPerimeter}`);
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(4, 6);
const triangle: Triangle = new Triangle(3, 4, 5);
let totalArea: number = 0;
let totalPerimeter: number = 0;

triangle.scale(2);

const shapes: Shape[] = [circle, rectangle, triangle];
calculateShapesAreaAndPerimeter(shapes, totalArea, totalPerimeter);