const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");

// Disable past dates
const today = new Date().toISOString().split("T")[0];
checkinInput.min = today;
checkoutInput.min = today;

// Update checkout min date whenever checkin changes
checkinInput.addEventListener("change", function() {
  checkoutInput.min = checkinInput.value;
  if (new Date(checkoutInput.value) <= new Date(checkinInput.value)) {
    checkoutInput.value = ""; // reset invalid checkout
  }
});

// Form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let branch = document.getElementById("branch").value;
  let checkin = checkinInput.value;
  let checkout = checkoutInput.value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let guests = document.getElementById("guests").value;

  if (new Date(checkout) <= new Date(checkin)) {
    alert("Check-out date must be after check-in date.");
    return;
  }

  alert(`Booking Confirmed!\n\nBranch: ${branch}\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nCheck-In: ${checkin}\nCheck-Out: ${checkout}`);
  document.getElementById("bookingForm").reset();
  checkinInput.min = today; // reset min after reset
  checkoutInput.min = today;
});



// Accordion toggle
document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isOpen = panel.style.display === "block";

    // Close all
    document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
    document.querySelectorAll(".accordion").forEach(b => b.innerHTML = b.innerHTML.replace("⮟","⮝"));

    if (!isOpen) {
      panel.style.display = "block";
      button.innerHTML = "Hide Price Details ⮟";
    } else {
      button.innerHTML = "View Price Details ⮝";
    }
  });
});



// Image Slider with Dots
document.querySelectorAll(".slider").forEach(slider => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");

  let index = 0;

  // Create dots dynamically
  images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function showSlide(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    slides.style.transform = `translateX(-${index * 250}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    index--;
    showSlide(index);
  });

  nextBtn.addEventListener("click", () => {
    index++;
    showSlide(index);
  });

  // Auto-slide every 4s
  setInterval(() => {
    index++;
    showSlide(index);
  }, 4000);
});
