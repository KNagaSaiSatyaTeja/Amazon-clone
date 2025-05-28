import { cart, addToCart, deleteFormCart } from "../data/cart.js";
import { products } from "../data/products.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const cartMoneyRaw = cart.reduce((total, item) => {
  let product = products.find((p) => p.id === item.productId);
  return total + (product.priceCents / 100) * item.quantity;
}, 0);

document.querySelector(
  ".checkout-header-middle-section"
).innerHTML = ` Checkout (<a class="return-to-home-link"
            href="amazon.html">${cart.length}</a>)`;

const cartMoney = cartMoneyRaw.toFixed(2);

cart.forEach((item) => {
  // let tax = 0;
  // document.querySelector(".payment-summary-tax").textContent = `$${() => {
  //   tax = (cartMoneyRaw + 4.99) * 0.1;
  //   return tax.toFixed(2);
  // }}`;

  const today = dayjs();
  const FreedeliveryDate = today.add(4, "day").format("dddd, MMMM D");
  const FastdeliveryDate = today.add(2, "day").format("dddd, MMMM D");
  const superdeliveryDate = today.add(1, "day").format("dddd, MMMM D");
  let product = products.find((p) => p.id === item.productId); // Changed from filter to find
  document.querySelector(
    ".order-summary"
  ).innerHTML += `<div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${product.image}" alt=${product.name}>

              <div class="cart-item-details">
                <div class="product-name">
                ${product.name}
                </div>
                <div class="product-price">
                  $${(product.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      item.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary" data-product-id="${
                    product.id
                  }">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary" data-product-id="${
                    product.id
                  }">

                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      ${FreedeliveryDate}
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                     ${FastdeliveryDate}
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-2">
                  <div>
                    <div class="delivery-option-date">
                      ${superdeliveryDate}
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});
document.querySelectorAll(".delete-quantity-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const productId = link.dataset.productId;
    deleteFormCart(productId);
  });
});


document.querySelector(
  ".payment-summary"
).innerHTML = ` <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items ${cart.length}:</div>
            <div class="payment-summary-money">$${cartMoney}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money payment-summary-tax">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money payment-summary-money-before-tax">$${(
              cartMoneyRaw + 4.99
            ).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(
              (cartMoneyRaw + 4.99) *
              0.1
            ).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(
              (cartMoneyRaw + 4.99) *
              1.1
            ).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;

// Add event listeners after creating the elements
document.querySelectorAll(".update-quantity-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    addToCart(event.target.dataset.productId);
  });
});
{
  /*  */
}
