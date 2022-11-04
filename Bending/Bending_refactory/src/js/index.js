import ColaGenerator from "./components/colaGenearator.js";
import Vendingmachine from "./components/vendingmachine.js";

const colaGenearator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// await

await colaGenearator.setup();
vendingmachine.setup();

