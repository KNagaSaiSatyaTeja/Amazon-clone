export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
  {
    productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    quantity: 1,
  },
];

export function deleteFormCart(productId) {
  console.log(cart);
  const index = cart.filter((item) => item.productId !== productId);
  if (index !== -1) {
    cart.splice(index, 1);
  } else {
    console.error(`Product with ID ${productId} not found in cart.`);
  }
  console.log(`Product with ID ${productId} removed from cart.`, cart);
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
}
