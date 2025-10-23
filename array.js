const carData = [
  { brand: "BMW", model: "X5", year: 2022, description: "Luxury SUV with advanced features and sporty design." },
  { brand: "Mercedes Benz", model: "C-Class", year: 2021, description: "Elegant sedan with premium comfort and safety features." },
  { brand: "Toyota", model: "Camry", year: 2023, description: "Reliable and fuel-efficient sedan for everyday driving." },
  { brand: "Ford", model: "Mustang", year: 2020, description: "Iconic sports coupe with powerful performance." },
];

// 

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.querySelector(".new-arrivals"); // where cars are displayed

  // Function to render cars to the page
  function displayCars(cars) {
    resultsContainer.innerHTML = ""; // clear previous results

    if (cars.length === 0) {
      resultsContainer.innerHTML = "<p>No cars found.</p>";
      return;
    }

    cars.forEach(car => {
      const card = document.createElement("div");
      card.classList.add("arrivals-card");
      card.innerHTML = `
        <div class="arrivals-info">
          <div class="arrivals-title">${car.brand}</div>
          <div class="arrivals-subtitle">${car.model}</div>
          <div class="arrivals-year">${car.year}</div>
          <div class="arrivals-desc">${car.description}</div>
          <button class="add-cart-btn">Add to cart <i class="fa-solid fa-basket-shopping"></i></button>
        </div>
      `;
      resultsContainer.appendChild(card);
    });
  }

  // Display all cars initially
  displayCars(carData);

  // Search logic
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredCars = carData.filter(car =>
      car.brand.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query) ||
      car.year.toString().includes(query)
    );

    displayCars(filteredCars);
  });
});
