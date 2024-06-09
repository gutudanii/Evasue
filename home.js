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

// function monday(){
//     var mon = document.getElementById("program-monday"); 
//     var teu = document.getElementById("program-teusday"); 
//     var wed = document.getElementById("program-wednsday"); 
//     var thu = document.getElementById("program-thursday"); 
//     var fri = document.getElementById("program-friday"); 
//     var sat = document.getElementById("program-saturday"); 
//     var sun = document.getElementById("program-sunday"); 

//     var m = document.getElementById("m"); 
//     var t = document.getElementById("t"); 
//     var w = document.getElementById("w"); 
//     var th = document.getElementById("th"); 
//     var f = document.getElementById("f"); 
//     var s = document.getElementById("sa"); 
//     var su = document.getElementById("su"); 

//     mon.style.display = "grid";
//     teu.style.display = "none";
//     wed.style.display = "none";
//     thu.style.display = "none";
//     fri.style.display = "none";
//     sat.style.display = "none";
//     sun.style.display = "none";
    
//     m.style.backgroundColor = "rgb(14, 123, 150)";
//     t.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     w.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     th.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     f.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     s.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     su.style.backgroundColor = "rgba(14, 123, 150, 0.479)";

// }

// function teusday(){
//     var mon = document.getElementById("program-monday"); 
//     var teu = document.getElementById("program-teusday"); 
//     var wed = document.getElementById("program-wednsday"); 
//     var thu = document.getElementById("program-thursday"); 
//     var fri = document.getElementById("program-friday"); 
//     var sat = document.getElementById("program-saturday"); 
//     var sun = document.getElementById("program-sunday"); 

//     var m = document.getElementById("m"); 
//     var t = document.getElementById("t"); 
//     var w = document.getElementById("w"); 
//     var th = document.getElementById("th"); 
//     var f = document.getElementById("f"); 
//     var s = document.getElementById("sa"); 
//     var su = document.getElementById("su"); 

//     mon.style.display = "none";
//     teu.style.display = "grid";
//     wed.style.display = "none";
//     thu.style.display = "none";
//     fri.style.display = "none";
//     sat.style.display = "none";
//     sun.style.display = "none";
    
//     m.style.backgroundColor = "rgba(14, 123, 150, 0.479)"; 
//     t.style.backgroundColor = "rgb(14, 123, 150)";
//     w.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     th.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     f.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     s.style.backgroundColor = "rgba(14, 123, 150, 0.479)";
//     su.style.backgroundColor = "rgba(14, 123, 150, 0.479)";

// }


function showDay(day, d) {
    var daysElements = {
        "mon": document.getElementById("program-monday"),
        "tue": document.getElementById("program-teusday"),
        "wed": document.getElementById("program-wednsday"),
        "thu": document.getElementById("program-thursday"),
        "fri": document.getElementById("program-friday"),
        "sat": document.getElementById("program-saturday"),
        "sun": document.getElementById("program-sunday")
    };

    var buttonElements = {
        "m": document.getElementById("m"),
        "t": document.getElementById("t"),
        "w": document.getElementById("w"),
        "th": document.getElementById("th"),
        "f": document.getElementById("f"),
        "sa": document.getElementById("sa"),
        "su": document.getElementById("su")
    };

    for (var key in daysElements) {
        daysElements[key].style.display = "none";
    }

    daysElements[day].style.display = "grid";

    for (var key in buttonElements) {
        buttonElements[key].style.backgroundColor = "rgba(14, 123, 150, 0.479)";
    }

    buttonElements[d].style.backgroundColor = "rgb(14, 123, 150)";
}
