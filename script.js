// Mobile navigation: open and close the menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after choosing a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark mode toggle.
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const darkModeOn = document.body.classList.contains("dark-mode");
  themeToggle.textContent = darkModeOn ? "☀ Light mode" : "☾ Dark mode";
});

// Simple contact form validation (demo only; it does not send an email).
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    formFeedback.textContent = "Please complete all fields with a valid email address.";
    contactForm.reportValidity();
    return;
  }
  formFeedback.textContent = "Thanks! Your message is ready. Connect this form to a form service to receive messages.";
  contactForm.reset();
});

// Automatically show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();
