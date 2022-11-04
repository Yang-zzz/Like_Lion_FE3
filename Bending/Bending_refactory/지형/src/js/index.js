import ColaGenerator from './colaGenerator.js';
import Vendingmachine from './vendingmachine.js';

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// Top-level await
await colaGenerator.setup(); // method에 async가 있으면 됨
vendingmachine.setup();
// (async () => {
//   await colaGenerator.setup();
//   vendingmachine.setup();
// })();
