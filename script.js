// # Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// # Testimonals Slider

const testimonials = [
  {
    name: "Mary and Sarah Johnson",
    headline: `"We couldn't live without these chairs anymore"`,
    photo: "img/customer-1.jpg",
    text: "You've got to try these chairs! They're perfect for unwinding during long hours, super comfy, durable, and just ooze timeless elegance. Trust us, we couldn't live without them anymore!",
  },
  {
    name: "Michael Antonio",
    headline: `"Long hours of sitting is a breeze"`,
    photo: "img/customer-2.jpg",
    text: "These chairs are truly exceptional. The sleek design seamlessly integrates ergonomic features for support, making long hours of sitting a breeze. A remarkable addition to any space.",
  },
  {
    name: "Jessica Brandy",
    headline: `"It remains as sturdy and supportive as ever!"`,
    photo: "img/customer-3.jpg",
    text: "I am thrilled with the durability and cushioning of this chair. Despite daily use, it remains as sturdy and supportive as the day I got them! An investment worth every penny.",
  },
];

const testimonialEl = document.querySelector(".testimonial-text");
const customerImg = document.querySelector(".customer-img");
const headlineEl = document.querySelector(".testimonial-headline");
const nameEl = document.querySelector(".author");

const updateTestimonial = function () {
  const { name, headline, photo, text } = testimonials[index];

  testimonialEl.innerHTML = text;
  customerImg.src = photo;
  headlineEl.innerHTML = headline;
  nameEl.textContent = name;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
};

/* -------------------------------------------------- */

let index = 0;
updateTestimonial();
setInterval(updateTestimonial, 15000);
