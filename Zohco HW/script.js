const testimonialBoxes = document.querySelectorAll(".testimonial-box");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

/* SHOW TESTIMONIAL */

function showTestimonial(index) {
  testimonialBoxes.forEach(function (box) {
    box.classList.remove("active");
  });

  testimonialBoxes[index].classList.add("active");
}

/* NEXT */

nextBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex === testimonialBoxes.length) {
    currentIndex = 0;
  }

  showTestimonial(currentIndex);
});

/* PREVIOUS */

prevBtn.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = testimonialBoxes.length - 1;
  }

  showTestimonial(currentIndex);
});
