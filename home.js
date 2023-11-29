function toggleMenu() {
    var menuA = document.getElementById("menu-a");
    if (window.innerWidth <= 843) {
        menuA.style.display = menuA.style.display === "grid" ? "none" : "grid";
    }
}

function donate(){
    var view = document.getElementById("donate");
    view.style.display = view.style.display === "grid" ? "none" : "grid";
}

// Add an event listener to handle screen size changes and fix the menu on small screens
window.addEventListener("resize", function() {
    var menuA = document.getElementById("menu-a");
    if (window.innerWidth <= 843) {
        menuA.style.display = "grid";
    } else {
        menuA.style.display = "inline-flex";
    }
});

// Call the toggleMenu function when the page loads
window.onload = function() {
    toggleMenu();
};

function menu(){
    var menuA = document.getElementById("menu-a");
    menuA.style.display = menuA.style.display === "grid" ? "none" : "grid";  
}



const images = ["img/image1.png", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg"
,"img/image5.jpg", "img/image6.jpg" ]; // Replace with your image file names
let currentImageIndex = 0;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function showImage(index) {
    imageElement.src = images[index];
    imageElement.alt = `Image ${index + 1}`;
}

showImage(currentImageIndex);

prevButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});
