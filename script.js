// ---------------- CART FUNCTIONALITY ----------------
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

// Add to Cart buttons
document.querySelectorAll(".box button").forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        alert("Item added to cart!");
    });
});

// ---------------- BRAND FILTERING ----------------
// Men’s filter
document.getElementById("mens-brand").addEventListener("change", function() {
    let brand = this.value;
    document.querySelectorAll("#mens-products .box").forEach(item => {
        item.style.display = (brand === "all" || item.dataset.brand === brand) ? "inline-block" : "none";
    });
});

// Women’s filter
document.getElementById("womens-brand").addEventListener("change", function() {
    let brand = this.value;
    document.querySelectorAll("#womens-products .box").forEach(item => {
        item.style.display = (brand === "all" || item.dataset.brand === brand) ? "inline-block" : "none";
    });
});

// ---------------- SEARCH FUNCTIONALITY ----------------
const searchInput = document.querySelector(".searchbar input");
const searchButton = document.querySelector(".searchbar button");

searchButton.addEventListener("click", () => {
    const searchText = searchInput.value.toLowerCase();

    // Search through all products
    document.querySelectorAll(".box").forEach(item => {
        const productName = item.querySelector("h3").textContent.toLowerCase();
        const productDesc = item.querySelector("p").textContent.toLowerCase();
        
        if (productName.includes(searchText) || productDesc.includes(searchText)) {
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }
    });
});
