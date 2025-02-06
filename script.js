// Auto-scroll functionality
const slideTrack = document.querySelector('.slide-track');
const images = document.querySelectorAll('.slide-track img');

function duplicateImages() {
    images.forEach(img => {
        let clone = img.cloneNode(true);
        slideTrack.appendChild(clone);
    });
}

duplicateImages();
// Function to shuffle products randomly
function shuffleProducts() {
    let container = document.getElementById("productContainer");
    let products = Array.from(container.children);

    // Fisher-Yates Shuffle Algorithm
    for (let i = products.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [products[i], products[j]] = [products[j], products[i]];
    }

    // Clear existing products and append shuffled ones
    container.innerHTML = "";
    products.forEach(product => container.appendChild(product));
}

// Call shuffle function on page load
window.onload = shuffleProducts;

// Product Data
const products = {
    1: {
        name: "Quinoa Super Bowl",
        image: "images/Quinoa Super Bowl.jfif",
        category: "Salad",
        description: "A quinoa super bowl is a hearty, nutrient-rich dish typically consisting of cooked quinoa as the base, topped with a variety of colorful, healthy ingredients like roasted vegetables, beans, avocado, nuts, seeds, fresh herbs, and a flavorful dressing, offering a complete and customizable meal; common ingredients include cooked quinoa, roasted sweet potato, black beans, chopped cucumber, cherry tomatoes, crumbled feta cheese, sliced almonds, and a citrus vinaigrette.",
        price: "₹159",
        rating: "⭐ 4.5",
    },
    2: {
        name: "Mexican Super Bowl",
        image: "images/Mexican Super Bowl.jfif",
        category: "Salad",
        description: "Combine beans, bell peppers, corn, and red onion in a large bowl. Whisk olive oil, vinegar, cilantro, lime juice, lemon juice, garlic, sugar, salt, cumin, and black pepper together in a small bowl. Season with chili powder and hot sauce. Pour dressing over bean mixture and toss well.",
        price: "₹149",
        rating: "⭐ 4.8"
    },
    3: {
        name: "Chatpata Chana Salad",
        image: "images/Chatpata Chana Salad.jfif",
        category: "salad",
        description: "This Salad features fresh veggies, chickpeas, and tangy fruits, all tossed in olive oil, chutneys, and chaat masala. It's a flavor explosion in every bite that will leave you wanting more.",
        price: "₹129",
        rating: "⭐ 4.7"
    },
    4: {
        name: "Kidney Beans Salad",
        image: "images/Kidney Beans Salad.jfif",
        category: "Salad",
        description: "Kidney Bean Salad is an old fashioned salad made using boiled kidney beans as the star ingredient. Kidney beans resemble kidneys, and must not be confused with adzuki beans.",
        price: "₹139",
        rating: "⭐ 4.5"
    },
    5: {
        name: "Protein Bomb Salad",
        image: "images/Protein Bomb Salad.jfif",
        category: "Salad",
        description: " Powerhouse of proteins, this mixed sprouts salad is as tasty as it is healthy and wholesome too.",
        price: "₹149",
        rating: "⭐ 4.8"
    },
    6: {
        name: "Sprouts Salad",
        image: "images/Sprouts Salad.jfif",
        category: "Salad",
        description: "Sprouts salad made with mung bean sprouts, fresh veggies, herbs and lemon. This 10 minutes super quick protein packed and delicious plant based sprouts salad",
        price: "₹129",
        rating: "⭐ 4.7"
    },
    7: {
        name: "Sweet Corn Salad",
        image: "images/Sweet Corn Salad.jfif",
        category: "Salad",
        description: "saccharata var. rugosa), also called sweetcorn, sugar corn and pole corn, is a variety of maize grown for human consumption with a high sugar content. Sweet corn is the result of a naturally occurring recessive mutation in the genes which control conversion of sugar to starch inside the endosperm of the corn kernel.",
        price: "₹129",
        rating: "⭐ 4.5"
    },
    8: {
        name: "Chickpea Salad",
        image: "images/Chickpea Salad.jfif",
        category: "salad",
        description: "It's filled with fresh Mediterranean flavors—crispy cucumbers play off juicy tomatoes, which in turn contrast with the tender chickpeas. Briny olives and pickled onions add a delicious pop, and handfuls of herbs freshen the whole thing up. A zippy lemon dressing ties it all together.",
        price: "₹139",
        rating: "⭐ 4.8"
    },
    9: {
        name: "Masala Ankurit Chaat",
        image: "images/Masala Ankurit Chaat.jfif",
        category: "Sprouts",
        description: " This is the Sprouts Chaat made with sprouted moong beans, onion, potato, tomato, chutneys, spices and herbs. The recipe is quick, easy and super delightful.",
        price: "₹60",
        rating: "⭐ 4.7"
    },
    10: {
        name: "Ankurit Chaat with fruits",
        image: "images/Ankurit Chaat with fruits.jfif",
        category: "Sprouts",
        description: "Fruit chaat is a popular fruit salad served at Indo-Pakistani iftar tables. It's made with chaat masala, which brings a warm and spicy heat to fruit salad.",
        price: "₹80",
        rating: "⭐ 4.5"
    },
    11: {
        name: "Ankurit Chaat with Paneer",
        image: "images/Ankurit Chaat with Paneer.jfif",
        category: "Sprouts",
        description: " Perky paneer cutlets with an indulgent dry fruit centre, are a real melt-in-the-mouth treat. When topped with a mixture of green peas with other flavourful ...",
        price: "₹99",
        rating: "⭐ 4.5"
    },
    12: {
        name: "Ankurit Chaat with Dry fruits",
        image: "images/Ankurit Chaat with Dry fruits.jfif",
        category: "Sprouts",
        description: "Dry fruit chaat with hot chai during the rains is a perfect home-made snack. It can also be served as a starter in large gatherings.",
        price: "₹120",
        rating: "⭐ 4.8"
    },
    13: {
        name: "Veg Grild Sandwich",
        image: "images/Veg Grild Sandwich.jfif",
        category: "Bread",
        description: "This Indian street food favorite is filled with spiced cilantro chutney and delicious vegetables, then grilled to perfection.",
        price: "₹80",
        rating: "⭐ 4.7"
    },
    14: {
        name: "Multigrane Bread Sandwich",
        image: "images/Multigrane Bread Sandwich.jfif",
        category: "Bread",
        description: "A multigrain veg sandwich is a wholesome and nutritious option, made with slices of hearty multigrain bread. It's layered with fresh vegetables",
        price: "₹90",
        rating: "⭐ 4.5"
    },
    15: {
        name: "Paneer Masala Sandwich",
        image: "images/Paneer Masala Sandwich.jfif",
        category: "Bread",
        description: "Paneer Sandwich is a quick, delicious and protein-packed Indian sandwich made with crumbled paneer (Indian cheese), spices, veggies, herbs and bread.",
        price: "₹110",
        rating: "⭐ 4.8"
    },
    16: {
        name: "Protien Sandwich",
        image: "images/Protien Sandwich.jfif",
        category: "Bread",
        description: "A healthy, crunchy, and tasty, quick High protein vegetable sandwich. Prepared with Multigrain bread its is rich in fibers and many nutrients.",
        price: "₹100",
        rating: "⭐ 4.7"
    },
    17: {
        name: "Masala Oats",
        image: "images/Masala Oats.jfif",
        category: "GYM Diet",
        description: " Masala Oats is simply oatmeal cooked with Indian masala (spices) in desi style. You can make it plain or with vegetables, leafy greens and herbs ...",
        price: "₹70",
        rating: "⭐ 4.5"
    },
    18: {
        name: "Oats with banaba and Milk",
        image: "images/Oats with banaba and Milk.jfif",
        category: "GYM Diet",
        description: "This delectable breakfast is made up of oatmeal with low-fat milk which is sure to boost up your energy. Along with banana slices, honey and ...",
        price: "₹80",
        rating: "⭐ 4.8"
    },
    19: {
        name: "Peanut Butter Oats",
        image: "images/Peanut Butter Oats.jfif",
        category: "GYM Diet",
        description: " Nutritious – Between the oats, chia seeds and peanut butter, this bowl is loaded with fiber, healthy fats and protein. Customizable – Whether ...",
        price: "₹100",
        rating: "⭐ 4.7"
    },
    20: {
        name: "Power Pack oats",
        image: "images/Power Pack oats.jfif",
        category: "GYM Diet",
        description: "Power Oats are Ready To Eat and rich in nutrients making them a quick & wholesome meal. With 18G Protein, High Fibre & Zero Added Sugar",
        price: "₹120",
        rating: "⭐ 4.5"
    },
    21: {
        name: "Millet Upma",
        image: "images/Millet Upma.jfif",
        category: "GYM Diet",
        description: "Little Millet Upma is a wholesome breakfast or dinner dish that can be made with just a few ingredients in less than 30 minutes.",
        price: "₹100",
        rating: "⭐ 4.5"
    },
    22: {
        name: "Quinoa Upma",
        image: "images/Quinoa Upma.jfif",
        category: "GYM Diet",
        description: "Quinoa Upma is a South Indian Upma variety made with quinoa, tempering spices, curry leaves, mixed vegetables and cashew nuts (optional).",
        price: "₹150",
        rating: "⭐ 4.5"
    },
    23: {
        name: "Protein Chaat",
        image: "images/Protein Chaat.jfif",
        category: "GYM Diet",
        description: "This easy-to-make chaat dip combines the creamy texture of yogurt with the crunch of sprouted lentils or beans, potatoes, onions, and chutneys",
        price: "₹100",
        rating: "⭐ 4.5"
    }
};

// Open Product Details Page
function openProduct(id) {
    localStorage.setItem("selectedProduct", JSON.stringify(products[id]));
    window.location.href = "product.html"; // Redirect to details page
}

// Load Product Details on product.html
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("product.html")) {
        const product = JSON.parse(localStorage.getItem("selectedProduct"));

        if (product) {
            document.getElementById("product-name").innerText = product.name;
            document.getElementById("product-image").src = product.image;
            document.getElementById("product-description").innerText = product.description;
            document.getElementById("product-price").innerText = product.price;
            document.getElementById("product-rating").innerText = product.rating;
            // Order Popup Data
            document.getElementById("popup-product-name").innerText = product.name;
            document.getElementById("popup-product-price").innerText = product.price.replace("₹", ""); // Remove ₹ sign
            document.getElementById("total-price").innerText = product.price.replace("₹", ""); // Initial Price
        }
    }
});


function filterProducts(category) {
    let products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
        if (category === "all" || product.getAttribute("data-category") === category) {
            product.style.display = "block"; // Show matching products
        } else {
            product.style.display = "none"; // Hide non-matching products
        }
    });
}

// Search Products by Name
function searchProducts() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase(); // Get search input in lowercase
    let products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
        let productName = product.querySelector("h3").innerText.toLowerCase(); // Get product name in lowercase

        if (productName.includes(searchValue)) {
            product.style.display = "block"; // Show product if name matches
        } else {
            product.style.display = "none"; // Hide product if name does not match
        }
    });
}

// Open Order Popup
function openOrderPopup() {
    document.getElementById("orderPopup").style.display = "flex";
}

// Close Order Popup
function closeOrderPopup() {
    document.getElementById("orderPopup").style.display = "none";
}

// Change Quantity and Update Price
function changeQuantity(value) {
    let quantityInput = document.getElementById("product-quantity");
    let totalPrice = document.getElementById("total-price");
    let basePrice = parseFloat(document.getElementById("popup-product-price").innerText); // Get base price

    let newQuantity = parseInt(quantityInput.value) + value;
    if (newQuantity < 1) newQuantity = 1; // Prevent negative quantity

    quantityInput.value = newQuantity;
    totalPrice.innerText = (basePrice * newQuantity).toFixed(2); // Update price
}

// Place Order and Show Thank You Message
function placeOrder() {
    let orderContent = document.querySelector(".order-content");
    
    // Change content to "Thank You" message
    orderContent.innerHTML = `
        <h2>Thank You!</h2>
        <p>Your order has been placed successfully. 😊</p>
    `;

    // Close popup after 5 seconds
    setTimeout(closeOrderPopup, 5000);
}

// Toggle Mobile Menu
function toggleMenu() {
    let menu = document.getElementById("categoryMenu");
    let menuToggle = document.getElementById("menuToggle");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menuToggle.innerText = "☰"; // Change back to hamburger
    } else {
        menu.classList.add("active");
        menuToggle.innerText = "✖"; // Change to cross when menu is open
    }
}
