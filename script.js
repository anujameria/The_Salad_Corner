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
        name: "Product Name 1",
        image: "img-1.jpg",
        category: "category-1",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty",
        title: "Product Name 1"
    },
    12: {
        name: "Product Name 2",
        image: "img-2.jpg",
        category: "category-2",
        description: "Crispy crust pizza with mozzarella cheese and pepperoni.",
        price: "₹250",
        rating: "⭐ 4.8",
        ingredients: "Dough, Tomato Sauce, Cheese, Pepperoni"
    },
    13: {
        name: "Product Name 3",
        image: "img-3.jpg",
        category: "category-3",
        description: "Creamy alfredo pasta with mushrooms and parmesan.",
        price: "₹180",
        rating: "⭐ 4.7",
        ingredients: "Pasta, Cream, Garlic, Parmesan, Mushrooms"
    },
    14: {
        name: "Product Name 4",
        image: "img-4.jpg",
        category: "category-4",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty"
    },
    15: {
        name: "Product Name 5",
        image: "img-5.jpg",
        category: "category-5",
        description: "Crispy crust pizza with mozzarella cheese and pepperoni.",
        price: "₹250",
        rating: "⭐ 4.8",
        ingredients: "Dough, Tomato Sauce, Cheese, Pepperoni"
    },
    16: {
        name: "Product Name 6",
        image: "img-6.jpg",
        category: "category-5",
        description: "Creamy alfredo pasta with mushrooms and parmesan.",
        price: "₹180",
        rating: "⭐ 4.7",
        ingredients: "Pasta, Cream, Garlic, Parmesan, Mushrooms"
    },
    17: {
        name: "Product Name 7",
        image: "img-7.png",
        category: "category-4",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty"
    },
    18: {
        name: "Product Name 8",
        image: "img-8.jpg",
        category: "category-3",
        description: "Crispy crust pizza with mozzarella cheese and pepperoni.",
        price: "₹250",
        rating: "⭐ 4.8",
        ingredients: "Dough, Tomato Sauce, Cheese, Pepperoni"
    },
    19: {
        name: "Product Name 9",
        image: "img-9.jpg",
        category: "category-2",
        description: "Creamy alfredo pasta with mushrooms and parmesan.",
        price: "₹180",
        rating: "⭐ 4.7",
        ingredients: "Pasta, Cream, Garlic, Parmesan, Mushrooms"
    },
    20: {
        name: "Product Name 10",
        image: "img-10.jpg",
        category: "category-1",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty"
    },
    21: {
        name: "Product Name 10",
        image: "img-10.jpg",
        category: "category-1",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty"
    },
    22: {
        name: "Product Name 10",
        image: "img-10.jpg",
        category: "category-1",
        description: "Delicious cheeseburger with fresh lettuce and tomatoes.",
        price: "₹120",
        rating: "⭐ 4.5",
        ingredients: "Bun, Cheese, Lettuce, Tomato, Patty"
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
