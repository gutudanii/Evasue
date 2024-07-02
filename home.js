function toggleMenu() {
    var menuA = document.getElementById("menu-a");
    if (window.innerWidth <= 843) {
        menuA.style.display = menuA.style.display === "grid" ? "none" : "grid";
    }
}

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



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const slideInterval = 7000;
  
    const updateSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
  
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
  
      currentIndex = index;
    };
  
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      updateSlide(nextIndex);
    };
  
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        updateSlide(index);
      });
    });
  
    updateSlide(currentIndex);
    setInterval(nextSlide, slideInterval);
  });
  