// Basic interface
interface Product {
  name: string;
  readonly price: number; // readonly is a modifier
  description?: string;
}

const product: Product = {
  name: "laptop",
  price: 1000,
  description: "good laptop",
};

// product.price = 2000; // error

// Interfaces with Functions
interface MathFunction {
  (a: number, b: number): number;
}

const add: MathFunction = (a, b) => a + b;
const subtract: MathFunction = (a, b) => a - b;
const multply: MathFunction = (a, b) => a * b;
const divide: MathFunction = (a, b) => a / b;

const mod: MathFunction = (a: number, b: number) => a % b;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multply(10, 20));
console.log(divide(10, 20));