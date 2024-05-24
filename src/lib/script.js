"use strict";

// import { SMTPClient } from "emailjs";

const EMAILJS_SERVICE_ID = `service_d3v14ap`;
const EMAILJS_TEMPLATE_ID = `template_lb6ols3`;
const EMAILJS_PUBLIC_KEY = `mUAx85XrZTBdf3zqo`;

// Replace 'YOUR_EMAILJS_USER_ID' with your actual EmailJS User ID
// emailjs.init(EMAILJS_PUBLIC_KEY);

const emailSubmitBtn = document.querySelector(".emailSubmitBtn");
const emailSendStatusContainer = document.querySelector(".message");

const emailStatus = function (icon, status) {
  emailSendStatusContainer.classList.toggle("visually-hidden");

  emailSendStatusContainer.innerHTML = "";

  emailSendStatusContainer.insertAdjacentHTML(
    "afterbegin",
    `  ${icon}
      <p>${status}</p>`
  );

  setTimeout(function () {
    emailSendStatusContainer.classList.toggle("visually-hidden");
  }, 3000);
};

emailSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const form = document.querySelector(".contact__form");

  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form).then(
    function (response) {
      emailStatus(
        `<i class="fa fa-check successIcon" aria-hidden="true"></i>`,
        "Email sent successfuly"
      );

      console.log("Email sent successfully:", response);
    },
    function (error) {
      emailStatus(
        ` <i class="fa fa-times failIcon" aria-hidden="true"></i>`,
        "Email failed to be sent"
      );

      console.error("Failed to send email:", error);
    }
  );
});

const btnContacts = document.querySelectorAll(".contactbtn");
const sectionContact = document.querySelector(".contact__wrapper");
const navigationLinks = document.querySelector(".header__nav");

const heroSection = document.querySelector(".hero");
const header = document.querySelector(".header");

btnContacts.forEach((btnContact) => {
  btnContact.addEventListener("click", function (e) {
    e.preventDefault();
    sectionContact.scrollIntoView({ behavior: "smooth" });
  });
});

// implement smooth scroll to section  when na link is clicked

navigationLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const targetElement = e.target;
  if (targetElement.classList.contains("nav-link")) {
    const id = targetElement.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// implementing fixed navigation when hero section is not in view

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    header.classList.remove("sticky");
  } else {
    header.classList.add("sticky");
  }
};

const heroSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

heroSectionObserver.observe(heroSection);

// implementing section revealing

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.classList.add("section-hidden");

  sectionsObserver.observe(section);
});

// hamburger menu
const humburgerBtn = document.querySelector(".menu");
const humburgerMenuContainer = document.querySelector(
  ".hamburger-menu-container"
);

humburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const isHamburgerActive = humburgerMenuContainer.classList.contains("active");

  console.log(isHamburgerActive);

  if (isHamburgerActive) {
    humburgerBtn.innerHTML = `<i class="fa fa-bars menu-icon" aria-hidden="true"></i>`;
  } else {
    humburgerBtn.innerHTML = `<i class="fa fa-times menu-icon" aria-hidden="true"></i>`;
  }

  humburgerMenuContainer.classList.toggle("active");
});

humburgerMenuContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const linkClicked = e.target.closest(".hamburger-menu_link");

  if (!linkClicked) return;

  this.classList.toggle("active");

  humburgerBtn.innerHTML = `<i class="fa fa-bars menu-icon" aria-hidden="true"></i>`;

  const id = linkClicked.getAttribute("href");

  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
