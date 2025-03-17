

// initialize//
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// when butoon click hide the toggle button

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// when butoon click show the toggle button

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// scrolling time delayed function outputs

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container-1
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

// header container-2
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container-1-image
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

// about container-2 - heading
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

// about container-3 - para
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});


// about container-4 - button
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


// sccroll button functionality

// Scroll-up button functionality
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//rotation whatsapp text starts here

  const text=document.querySelector('.what-text p');
  text.innerHTML=text.innerText.split('').map((char,i)=>
    `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
   ).join('');

// rotation whatsapp text End here

// click action in rotation whatsapp
const rotate=document.querySelector('.container-wat');
rotate.addEventListener('click',()=>{
  // location.href='https://wa.me/919445487884';
  window.open('https://wa.me/919445487884','_blank')
})



// about container-2 - heading
ScrollReveal().reveal(".feedback__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

// about container-3 - para
ScrollReveal().reveal(".feedback__header", {
  ...scrollRevealOption,
  delay: 1000,
});