const defaultNumber: number = 10;

function printValues( text: string, number: number = defaultNumber) {
    console.log(text, number);
} 

printValues("Hello, TypeScript!");