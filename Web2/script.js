// ------------------ CAROUSEL FUNCTIONALITY ------------------
document.addEventListener("DOMContentLoaded", function () {
    let carouselImages = document.querySelectorAll(".slider img");
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add("active");
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

// ------------------ CART FUNCTIONALITY ------------------
let cart = [];

function addToCart(productName, price) {
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCartDisplay();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    
    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalPriceElement.innerText = `Total: $${total.toFixed(2)}`;
}

// ------------------ SIGN-IN & SIGN-UP FUNCTIONALITY ------------------
document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("sign-in-form");
    const signUpForm = document.getElementById("sign-up-form");

    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let email = document.getElementById("signin-email").value;
            let password = document.getElementById("signin-password").value;

            if (email === "test@example.com" && password === "password123") {
                alert("Sign-in successful!");
                window.location.href = "home.html";
            } else {
                alert("Invalid credentials. Try again.");
            }
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let newEmail = document.getElementById("signup-email").value;
            let newPassword = document.getElementById("signup-password").value;

            alert("Account created! Now sign in.");
            window.location.href = "signin.html";
        });
    }
});

// ------------------ FEATURED PRODUCTS (NEW ARRIVALS) ------------------
document.addEventListener("DOMContentLoaded", function () {
    let newArrivalsContainer = document.getElementById("new-arrivals");

    if (newArrivalsContainer) {
        let products = [
            { name: "Winter Jacket", price: 89.99, image: "images/winter-jacket.jpg" },
            { name: "Ski Boots", price: 120.00, image: "images/ski-boots.jpg" },
            { name: "Sunglasses", price: 25.00, image: "images/sunglasses.jpg" }
        ];

        products.forEach(product => {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            `;
            newArrivalsContainer.appendChild(productDiv);
        });
    }
});
