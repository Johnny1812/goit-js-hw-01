function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// makeTransaction(5, 3, 10, 3000, 1000, 5000);

// quantity(5, 3, 10);
// pricePerDroid(3000, 1000, 500);

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
