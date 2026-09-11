const promptSync = require('prompt-sync');
const prompt = promptSync();

const size: string = prompt("What is the size of the ice cream? ");
let price: number;

if (size === "small") {
    price = 10;
} else if (size === "large") {
    price = 25;
} else {
    console.log("Invalid size. Please enter 'small' or 'large'.");
    process.exit(1);
}

let fillingPrompt: string = prompt("What is the filling of the ice cream? ");
let countFilling: number = 0;
let isRunning: boolean = true;

while (isRunning) {
    switch (fillingPrompt) {
        case "chocolate":
            price += 5;
            countFilling++;
            fillingPrompt = prompt("What is the filling of the ice cream? ");
            break;
    case "caramel":
        price += 6;
        countFilling++;
        fillingPrompt = prompt("What is the filling of the ice cream? ");
        break;
    case "berries":
        price += 10;
        countFilling++;
        fillingPrompt = prompt("What is the filling of the ice cream? ");
        break;
    case "marshmallow":
        price += 5;
        countFilling++;
        fillingPrompt = prompt("What is the filling of the ice cream? ");
        break;
    case "exit":
        if (countFilling === 0) {
            console.log(`you need choose one or more fillings.`);
            fillingPrompt = prompt("What is the filling of the ice cream? ");
        }
        else {
            console.log(`The total price of the ice cream is: ${price}`);
            isRunning = false;
        }
        break;
    default:
        console.log("Invalid filling. Please enter 'chocolate', 'caramel', or 'berries'.");
        fillingPrompt = prompt("What is the filling of the ice cream? ");
    }
}