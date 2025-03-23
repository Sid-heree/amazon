// Function 1: Search Functionality
function searchAmazon() {
    let searchTerm = document.querySelector(".search-input").value;
    if (searchTerm) {
        alert("Searching for: " + searchTerm);
    } else {
        alert("Please enter a search term.");
    }
}

// Function 2: Cart Counter
let cartCount = 0;
function addToCart() {
    cartCount++;
    alert("Items in Cart: " + cartCount);
}

// Function 3: Show Alert on Clicking "Sign In"
function signInAlert() {
    alert("Redirecting to Sign In Page...");
}

// Function 4: Show Message on Clicking "Returns & Orders"
function orderAlert() {
    alert("Redirecting to Your Orders...");
}

// Function 5: Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function 6: Display Date in Footer
function displayDate() {
    let footer = document.querySelector(".copyright");
    let today = new Date().getFullYear();
    footer.innerHTML = `© 1996-${today}, Amazon.com, Inc. or its affiliates`;
}

// Event Listeners
document.querySelector(".search-icon").addEventListener("click", searchAmazon);
document.querySelector(".nav-cart").addEventListener("click", addToCart);
document.querySelector(".nav-sigin").addEventListener("click", signInAlert);
document.querySelector(".nav-return").addEventListener("click", orderAlert);
document.querySelector(".back-to-top").addEventListener("click", scrollToTop);
window.onload = displayDate;
