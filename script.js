const products = [
      { name: "Classic Leather Jacket", price: 199.99, category: "Men", rating: 4.5, image: "img/Jacket.webp" },
      { name: "Summer Dress", price: 79.99, category: "Women", rating: 4.2, image: "img/Summer.jpg" },
      { name: "Urban Explorer Backpack", price: 129.99, category: "Accessories", rating: 4.6, image: "img/bag.jpg" },
      { name: "Trailblazer Hiking Boots", price: 149.99, category: "Men", rating: 4.7, image: "img/boots.jpg" },
      { name: "Cozy Knit Sweater", price: 89.99, category: "Women", rating: 4.3, image: "img/cozySweater.png" },
      { name: "City Chic Sunglasses", price: 49.99, category: "Accessories", rating: 4.1, image: "img/sunGlasses.jpg" },
      { name: "Minimalist Wristwatch", price: 99.99, category: "Accessories", rating: 4.4, image: "img/watch.jpg" },
      { name: "Athletic Performance Leggings", price: 69.99, category: "Women", rating: 4.0, image: "img/leggings.webp" }
    ];

    const productGrid = document.getElementById("product-grid");
    const categoryFilter = document.getElementById("filter-category");
    const priceSort = document.getElementById("sort-price");
    const ratingSort = document.getElementById("sort-rating");
    const searchInput = document.getElementById("search");

    function renderProducts(list) {
      productGrid.innerHTML = "";
      list.forEach(p => {
        productGrid.innerHTML += `
          <div class="product-card">
            <img src="${p.image}" alt="${p.name}" />
            <h3>${p.name}</h3>
            <p>$${p.price.toFixed(2)}</p>
          </div>`;
      });
    }

    function filterAndSortProducts() {
      let filtered = [...products];

      const selectedCategory = categoryFilter.value;
      if (selectedCategory !== "all") {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }

      const search = searchInput.value.toLowerCase();
      if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
      }

      const priceOrder = priceSort.value;
      if (priceOrder === "asc") filtered.sort((a, b) => a.price - b.price);
      if (priceOrder === "desc") filtered.sort((a, b) => b.price - a.price);

      const ratingOrder = ratingSort.value;
      if (ratingOrder === "high") filtered.sort((a, b) => b.rating - a.rating);
      if (ratingOrder === "low") filtered.sort((a, b) => a.rating - b.rating);

      renderProducts(filtered);
    }

    categoryFilter.addEventListener("change", filterAndSortProducts);
    priceSort.addEventListener("change", filterAndSortProducts);
    ratingSort.addEventListener("change", filterAndSortProducts);
    searchInput.addEventListener("input", filterAndSortProducts);

    // Initial render
    renderProducts(products);
