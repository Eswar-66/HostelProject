document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill all fields before submitting.");
  }
});






// MAp accordian


const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // close all
    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });

    // toggle clicked
    if (!isOpen) {
      item.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
    }
  });
});


// Delay location section display
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.location-section').classList.add('show');
  }, 1000); // 1s delay
});