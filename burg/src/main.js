const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');


navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    })
)    


closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})


hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

const tabs = document.querySelectorAll(".tabs_wrap ul li");

const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const drinks = document.querySelectorAll(".drink");
const snacks = document.querySelectorAll(".snack");





tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove 'bg-white' and 'active' from all tabs
        tabs.forEach(item => {
            item.classList.remove("bg-secondaryColor", "active");
            
        });

        // Add 'active' to the clicked tab
        tab.classList.add("active");


        // Add 'bg-white' only if the tab has 'active' class
        if (tab.classList.contains("active")) {
            tab.classList.add("bg-secondaryColor");
            
        }
    });
});

function filterImages(category) {
    var cards = document.getElementsByClassName('item__wrap');
    if (category === 'all') {
        for (var i = 0; i < cards.length; i++) {
            cards[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains(category)) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
}


/* scroll up*/

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (scrollY > 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener("scroll", scrollUp)



/* header scroll */
const scrollHeader = () => {
    const header = document.getElementById("header");

    if (scrollY > 50) {
        
        header.classList.add("border-b", "border-secondaryColor");
    } else {
        
        header.classList.remove("border-b", "border-secondaryColor");
    }
}

window.addEventListener("scroll", scrollHeader)


/* Dark theme */

const html = document.querySelector("html");

const themeBtn = document.getElementById("theme-toggle");

function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}


if (localStorage.getItem("mode") == "dark") {
    darkMode();
}else {
    lightMode();
}


themeBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("mode") == "light"){
    darkMode();
    }else {
        lightMode();
    }
})

// scroll menu

  const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (this.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
      }
  });

  navLinks.forEach((item) => {
      item.classList.remove("text-secondaryColor");
      if (item.href.includes(current)) {
          item.classList.add("text-secondaryColor");
      }
  });
};

window.addEventListener('scroll', activeLink);