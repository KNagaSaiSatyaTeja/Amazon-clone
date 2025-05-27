products = [
  {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    price: 10.95,
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    rating: {
      stars: 4.5,
      reviews: 87,
    },
    discription:
      "These athletic cotton socks are designed for comfort and durability, perfect for everyday wear or sports activities. The pack includes six pairs in a stylish black and gray color scheme.",
  },
  {
    name: " Intermediate Size Basketball",
    price: 20.95,
    image: "images/products/intermediate-composite-basketball.jpg",
    rating: {
      stars: 4.0,
      reviews: 120,
    },
    discription:
      "This intermediate size basketball is made from high-quality composite leather, providing excellent grip and durability for both indoor and outdoor play. Perfect for players of all skill levels.",
  },
  {
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    price: 7.99,
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    rating: {
      stars: 4.0,
      reviews: 56,
    },
    discription:
      "This 2-pack of adults' plain cotton t-shirts offers comfort and style. Made from soft, breathable cotton, these tees are perfect for casual wear or layering. Available in a variety of colors.",
  },
];

products.forEach((product) => {
  document.querySelector(
    ".products-grid"
  ).innerHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" alt="${
    product.name
  }">
          </div>
        
          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
        
          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${
              product.rating.stars * 10
            }.png">
            <div class="product-rating-count link-primary">
              ${product.rating.reviews} reviews
            </div>
          </div>
        
          <div class="product-price">
            <span class="product-price-amount">$${product.price.toFixed(
              2
            )}</span>
          </div>
        
          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        
          <div class="product-spacer"></div>
        
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>
        
          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
});
