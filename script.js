// HAPPY DOG


// MENÚ MÓVIL

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");

  });


  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");
      document.body.classList.remove("menu-open");

    });

  });

}


// PREGUNTAS FRECUENTES

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {

    const alreadyOpen = item.classList.contains("active");

    faqItems.forEach((otherItem) => {

      otherItem.classList.remove("active");

      const otherAnswer =
        otherItem.querySelector(".faq-answer");

      otherAnswer.style.maxHeight = null;

    });


    if (!alreadyOpen) {

      item.classList.add("active");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});


// AÑO AUTOMÁTICO

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// SOMBRA DEL HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(0,0,0,0.06)";

  } else {

    header.style.boxShadow = "none";

  }

});
