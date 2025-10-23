
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".add-cart-btn");

  // Retrieve cart from localStorage or initialize empty
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".arrivals-info");

      // Extract car details from the DOM
      const car = {
        brand: card.querySelector(".arrivals-title").textContent.trim(),
        model: card.querySelector(".arrivals-subtitle").textContent.trim(),
        year: card.querySelector(".arrivals-year").textContent.trim(),
        description: card.querySelector(".arrivals-desc").textContent.trim(),
        quantity: 1
      };

      // Check if item already exists in the cart
      const existingItem = cart.find(item => 
        item.brand === car.brand && item.model === car.model && item.year === car.year
      );

      if (existingItem) {
        existingItem.quantity += 1; // increase quantity if already in cart
      } else {
        cart.push(car);
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${car.brand} ${car.model} (${car.year}) added to cart!`);
    });
  });
});

