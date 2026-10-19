document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent.trim();

      if (buttonText === "START FREE") {
        alert("Welcome! Your free plan is ready 🚀");
      } else if (buttonText === "START 14-DAY TRIAL") {
        alert("Your 14-day trial is ready 🎉");
      } else if (buttonText === "CONTACT SALES") {
        alert("Thank you! Our sales team will contact you soon.");
      }
    });
  });
});
