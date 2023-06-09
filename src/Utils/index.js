/*
  * This functio calculates total price of a new order
  * @param {array} products cartProduct: Array Of Objects
  * @return {number} Total Price
*/ 
export function TotalPrice(products) {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
}
