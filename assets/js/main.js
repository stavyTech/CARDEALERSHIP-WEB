/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

// Responsive Navbar Toggle

document.addEventListener('DOMContentLoaded', function() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav_link');

  // Show menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Hide menu on link click (for mobile)
  navLinks.forEach(link =>
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  );
});

// ///////////SWIPPER////////////////////////////

// var homeSwiper = new Swper(".home-swiper",{
//   spaceBetween:30,
//   loop:'true',
//   pagination:{
//     el: ".swiper-pagination",
//   },
// });


// FILTER BUTTON/////////

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.querySelector(".filter-container");
    const filterToggle = document.querySelector(".filter-toggle"); // The icon/button

    // Initially hide the filter
    filterContainer.style.display = "none";

    // Toggle visibility when icon is clicked
    filterToggle.addEventListener("click", () => {
        if (filterContainer.style.display === "none") {
            filterContainer.style.display = "block";
            filterToggle.classList.add("active"); // Optional: to change icon style
        } else {
            filterContainer.style.display = "none";
            filterToggle.classList.remove("active");
        }
    });

    // Example: Handle "Save Filters" button
    const saveButton = document.getElementById("apply-filters");
    saveButton.addEventListener("click", () => {
        const minPrice = document.getElementById("min-price").value;
        const maxPrice = document.getElementById("max-price").value;
        const brand = document.getElementById("car-brand").value;

        console.log("Filters applied:");
        console.log("Min Price:", minPrice);
        console.log("Max Price:", maxPrice);
        console.log("Brand:", brand);

        // Hide filter after saving (optional)
        filterContainer.style.display = "none";
        filterToggle.classList.remove("active");
    });
});

//  (function(){
//       emailjs.init({
//         publicKey: "vgZYuF3Jig065QDAq",
//       });
//    })();

//     emailjs.init("vgZYuF3Jig065QDAq"); // Replace with your EmailJS public key

//  let cart = [];

//     function toggleCart() {
//     document.getElementById("cart-sidebar").classList.toggle("active");
// }

//     function addToCart(name, price) {
//       let item = cart.find(i => i.name === name);
//       if (item) {
//         item.quantity++;
//       } else {
//         cart.push({ name, price, quantity: 1 });
//       }
//       renderCart();
//     }

//     function removeItem(index) {
//       cart.splice(index, 1);
//       renderCart();
//     }

//     function updateQuantity(index, change) {
//       cart[index].quantity += change;
//       if (cart[index].quantity <= 0) {
//         cart.splice(index, 1);
//       }
//       renderCart();
//     }

//     function renderCart() {
//       let cartItems = document.getElementById("cart-items");
//       let cartTotal = document.getElementById("cart-total");
//       let orderSummary = document.getElementById("order-summary");
//       let cartCount = document.getElementById("cart-count");
//       let total = 0, count = 0;

//       cartItems.innerHTML = "";
//       orderSummary.innerHTML = "";

//       cart.forEach((item, index) => {
//         let itemTotal = item.price * item.quantity;
//         total += itemTotal;
//         count += item.quantity;
//         cartItems.innerHTML += `
//           <div class="d-flex justify-content-between align-items-center mb-2">
//             <span>${item.name}</span>
//             <div>
//               <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, -1)">-</button>
//               <span class="mx-2">${item.quantity}</span>
//               <button class="btn btn-sm btn-secondary" onclick="updateQuantity(${index}, 1)">+</button>
//             </div>
//             <span>$${itemTotal.toFixed(2)}</span>
//             <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">❌</button>
//           </div>
//         `;
//         orderSummary.innerHTML += `<li class="list-group-item">${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}</li>`;
//       });

//       cartTotal.textContent = "$" + total.toFixed(2);
//       cartCount.textContent = count;
//     }

    // document.getElementById("checkout-form").addEventListener("submit", function(e) {
    //   e.preventDefault();

    //   const templateParams = {
    //     customer_first_name: document.getElementById("cust-first-name").value,
    //     customer_last_name: document.getElementById("cust-last-name").value,
    //     customer_email: document.getElementById("cust-email").value,
    //     customer_address: document.getElementById("cust-address").value,
    //     customer_phone: document.getElementById("cust-phone").value,
    //     order: cart.map(i => `${i.name} x${i.quantity} = $${(i.price * i.quantity).toFixed(2)}`).join("\n"),
    //     total: document.getElementById("cart-total").textContent
    //   };

    //   emailjs.send( "service_xlc1q5r", "template_wqkkv16", templateParams)
    //     .then(() => {
    //       alert("✅ your Order have been sent successfully! We will get back to You Shortly");
    //       cart = [];
    //       renderCart();

    //       // Close modal
    //       const modal = javascrip.Modal.getInstance(document.getElementById("checkoutModal"));
    //       modal.hide();

    //       // Hide cart sidebar
    //       document.getElementById("cart-sidebar").classList.remove("active");
    //     }, (err) => {
    //       alert("❌ Failed to send order. Please try again.");
    //       console.error("EmailJS error:", err);
    //     });
    // });

  
  
    ////////////////TEMPLATE CHANGES/////////////////////
  //   document.getElementById("checkout-form").addEventListener("submit", function(event) {
  // event.preventDefault();

  // // Example cart (replace this with your cart logic)
  // let cart = [
  //   { name: "Product A", quantity: 2, price: 1500 },
  //   { name: "Product B", quantity: 1, price: 2500 }
  // ];

  // // Format cart items
  // let orderText = "Order Summary:\n\n";
  // cart.forEach(item => {
  //   orderText += `${item.name} x ${item.quantity} - ₦${item.price * item.quantity}\n`;
  // });

  // // Insert into hidden textarea
  // document.getElementById("order-details").value = orderText;

  //   });
/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
/* <script> */
/* <script> */
  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.swiper-slide');

    // Hide all slides
    slides.forEach(slide => slide.style.opacity = 0);

    // Show the target slide
    slides[index].style.opacity = 1;
  }

  function startAutoSlide(interval = 5000) {
    const slides = document.querySelectorAll('.swiper-slide');
    const totalSlides = slides.length;

    // Initial display
    showSlide(currentSlide);

    // Automatically change slide every 5 seconds
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, interval);
  }


    // Start when page loads (only once)
    window.addEventListener('DOMContentLoaded', () => {
      startAutoSlide(3000); // changes every 1 second
    });




  // ======= Navbar Toggle =======
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  // Show Menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Hide Menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close menu when clicking any nav link (optional)
  const navLinks = document.querySelectorAll('.nav_link');
  navLinks.forEach(link =>
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  );


/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/


// ***************responsive footer************************//
// window.addEventListener('DOMContentLoaded', function() {
//   function handleFooterResponsive() {
//     var container = document.querySelector('.footer_container');
//     if (window.innerWidth <= 768) {
//       container.style.flexDirection = 'column';
//       container.style.alignItems = 'center';
//       container.style.textAlign = 'center';
//     } else {
//       container.style.flexDirection = 'row';
//       container.style.alignItems = 'flex-start';
//       container.style.textAlign = 'left';
//     }
//   }
//   handleFooterResponsive();
//   window.addEventListener('resize', handleFooterResponsive);
// });

// ========== Add to Cart Functionality for Arrivals Cards ==========
document.addEventListener('DOMContentLoaded', function() {
  // Responsive interaction for arrivals cards
  function handleArrivalsCardResponsive() {
    const arrivalsCards = document.querySelectorAll('.arrivals-card');
    arrivalsCards.forEach(card => {
      if (window.innerWidth <= 768) {
        card.classList.add('show-info'); // Always show info on mobile
      } else {
        card.classList.remove('show-info');
      }
    });
  }
  handleArrivalsCardResponsive();
  window.addEventListener('resize', handleArrivalsCardResponsive);

  // Add to Cart button logic
  const cartContainer = document.querySelector('.cart_container');
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const info = btn.closest('.arrivals-info');
      const card = btn.closest('.arrivals-card');
      const img = card.querySelector('img').src;
      const title = info.querySelector('.arrivals-title').textContent;
      const subtitle = info.querySelector('.arrivals-subtitle').textContent;
      const year = info.querySelector('.arrivals-year').textContent;
      const desc = info.querySelector('.arrivals-desc').textContent;
      // Add to cart UI (simple demo)
      if (cartContainer) {
        const article = document.createElement('article');
        article.className = 'cart_card';
        article.innerHTML = `
          <div class='cart_box'><img src='${img}' alt='${title}'></div>
          <div class='cart_details'>
            <h3 class='cart_title'>${title} ${subtitle}</h3>
            <span class='cart_price'>${year}</span>
            <div class='cart_amount'>
              <div class='cart_amount-content'>
                <span class='cart_amount-box'><i class='fa-solid fa-minus'></i></span>
                <span class='cart_amount-number'>1</span>
                <span class='cart_amount-box'><i class='fa-solid fa-plus'></i></span>
              </div>
              <i class='fa-solid fa-trash-can'></i>
            </div>
            <div class='cart_desc'>${desc}</div>
          </div>
        `;
        cartContainer.appendChild(article);
      }
      btn.textContent = 'Added!';
      setTimeout(() => { btn.textContent = 'Add to Cart'; }, 1200);
    });
  });
});



    
