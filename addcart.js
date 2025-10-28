 // Cart data structure
        let cart = [];
        
        // DOM elements
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const cartCountElement = document.getElementById('cart-count');
        const checkoutModal = document.getElementById('checkout-modal');
        const orderSummary = document.getElementById('order-summary');
        const checkoutForm = document.getElementById('checkout-form');
        
        // Toggle cart sidebar
        function toggleCart() {
            cartSidebar.classList.toggle('active');
            cartOverlay.classList.toggle('active');
            updateCartDisplay();
        }
        
        // Add item to cart
        function addToCart(title, year, type, description, price) {
            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(item => 
                item.title === title && item.year === year
            );
            
            if (existingItemIndex !== -1) {
                // Item exists, increase quantity
                cart[existingItemIndex].quantity += 1;
            } else {
                // Add new item
                cart.push({
                    title,
                    year,
                    type,
                    description,
                    price,
                    quantity: 1
                });
            }
            
            // Update cart display
            updateCartDisplay();
            
            // Show success message
            alert(`${title} (${year}) added to cart!`);
        }
        
        // Remove item from cart
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }
        
        // Update cart display
        function updateCartDisplay() {
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = totalItems;
            
            // Update cart items
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            } else {
                cartItemsContainer.innerHTML = '';
                cart.forEach((item, index) => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-img">
                            <i class="fas fa-car"></i>
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-model">Type: ${item.type}</div>
                            <div class="cart-item-year">Year: ${item.year}</div>
                            <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    cartItemsContainer.appendChild(cartItem);
                });
            }
            
            // Update total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `$${total.toLocaleString()}`;
        }
        
        // Open checkout modal
        function openCheckoutModal() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Update order summary
            orderSummary.innerHTML = '';
            cart.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.innerHTML = `
                    <div><strong>${item.title}</strong> (${item.year})</div>
                    <div>Quantity: ${item.quantity}</div>
                    <div>Price: $${item.price.toLocaleString()} each</div>
                    <div>Subtotal: $${(item.price * item.quantity).toLocaleString()}</div>
                `;
                orderSummary.appendChild(orderItem);
            });
            
            // Show modal
            checkoutModal.classList.add('active');
        }
        
        // Close checkout modal
        function closeCheckoutModal() {
            checkoutModal.classList.remove('active');
        }
        
        // Handle checkout form submission
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            emailjs.init("vMPoS5H-LDiU0uqxn"); // Replace with your EmailJS public key
            
           const contactParams = {
         customername:document.getElementById('cust-name').value,
             customeremail: document.getElementById('cust-email').value,
             customeraddress : document.getElementById('cust-address').value,
             customerphone : document.getElementById('cust-phone').value,
             customerorder : cart.map(i => `${i.title} x${i.quantity} = $${(i.price * i.quantity).toFixed(2)}`).join("\n"),
      };

      emailjs.send( "service_xlc1q5r", "template_wqkkv16", contactParams)
        .then(() => {
          alert("✅ your Order has been sent successfully! We will get back to You Shortly");
         
        }, (err) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS error:", err);
        });
            
            // Reset cart and close modals
            cart = [];
            updateCartDisplay();
            closeCheckoutModal();
            toggleCart();
            
            // Reset form
            checkoutForm.reset();
        });
        
        // Close cart when clicking overlay
        cartOverlay.addEventListener('click', toggleCart);
        
        // Initialize cart display
        updateCartDisplay();







// document.addEventListener("DOMContentLoaded", () => {
//   const cartButtons = document.querySelectorAll(".add-cart-btn");

//   // Retrieve cart from localStorage or initialize empty
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cartButtons.forEach(button => {
//     button.addEventListener("click", (event) => {
//       const card = event.target.closest(".arrivals-info");

//       // Extract car details from the DOM
//       const car = {
//         brand: card.querySelector(".arrivals-title").textContent.trim(),
//         model: card.querySelector(".arrivals-subtitle").textContent.trim(),
//         year: card.querySelector(".arrivals-year").textContent.trim(),
//         description: card.querySelector(".arrivals-desc").textContent.trim(),
//         quantity: 1
//       };

//       // Check if item already exists in the cart
//       const existingItem = cart.find(item => 
//         item.brand === car.brand && item.model === car.model && item.year === car.year
//       );

//       if (existingItem) {
//         existingItem.quantity += 1; // increase quantity if already in cart
//       } else {
//         cart.push(car);
//       }

//       // Save updated cart to localStorage
//       localStorage.setItem("cart", JSON.stringify(cart));

//       alert(`${car.brand} ${car.model} (${car.year}) added to cart!`);
//     });
//   });
// });

