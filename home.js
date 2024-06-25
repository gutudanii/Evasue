function toggleMenu() {
    var menuA = document.getElementById("menu-a");
    if (window.innerWidth <= 843) {
        menuA.style.display = menuA.style.display === "grid" ? "none" : "grid";
    }
}

function showDay(dayId, menuId) {
        var days = document.querySelectorAll('.program-day');
        days.forEach(function(day) {
            day.style.display = 'none';
        });

        var menus = document.querySelectorAll('.day-menu p');
        menus.forEach(function(menu) {
            menu.style.backgroundColor = 'rgba(14, 123, 150, 0.479)';
        });

        document.getElementById(dayId).style.display = 'block';
        document.getElementById(menuId).style.backgroundColor = 'rgb(14, 123, 150)';
    }

    // Initially show Monday's program
    showDay('program-monday', 'm');

function closeAlumni(){
    var view = document.getElementById("alumni-pop");
    view.style.display = view.style.display === "grid" ? "none" : "grid";
}
function donate(){
    var view = document.getElementById("donate");
    view.style.display = view.style.display === "grid" ? "none" : "grid";
}
function coming_soon(){
    var view = document.getElementById("coming-soon");
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

// function showImage(index) {
//     imageElement.src = images[index];
//     imageElement.alt = `Image ${index + 1}`;
// }

// showImage(currentImageIndex);

// prevButton.addEventListener("click", function () {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     showImage(currentImageIndex);
// });

// nextButton.addEventListener("click", function () {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     showImage(currentImageIndex);
// });
// function showDay(dayId, menuId) {
//     const days = document.querySelectorAll('.program-day');
//     days.forEach(day => {
//         day.classList.remove('active');
//     });
//     document.getElementById(dayId).classList.add('active');

//     const menuItems = document.querySelectorAll('.day-menu p');
//     menuItems.forEach(item => {
//         item.style.backgroundColor = 'rgba(14, 123, 150, 0.479)';
//     });
//     document.getElementById(menuId).style.backgroundColor = 'rgb(14, 123, 150)';
// }

// function showDay(day, d) {
//     var daysElements = {
//         "mon": document.getElementById("program-monday"),
//         "tue": document.getElementById("program-teusday"),
//         "wed": document.getElementById("program-wednsday"),
//         "thu": document.getElementById("program-thursday"),
//         "fri": document.getElementById("program-friday"),
//         "sat": document.getElementById("program-saturday"),
//         "sun": document.getElementById("program-sunday")
//     };

//     var buttonElements = {
//         "m": document.getElementById("m"),
//         "t": document.getElementById("t"),
//         "w": document.getElementById("w"),
//         "th": document.getElementById("th"),
//         "f": document.getElementById("f"),
//         "sa": document.getElementById("sa"),
//         "su": document.getElementById("su")
//     };

//     for (var key in daysElements) {
//         daysElements[key].style.display = "none";
//     }

//     daysElements[day].style.display = "grid";

//     for (var key in buttonElements) {
//         buttonElements[key].style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     }

//     buttonElements[d].style.backgroundColor = "rgb(14, 123, 150)";
// }
