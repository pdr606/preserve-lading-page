import React from "react";

function useAnimaScroll(element, animation) {
  function animaScroll() {
    const windowMetade = window.innerHeight * 0.6;
    const sections = document.querySelectorAll(element);
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      console.log(sectionTop);
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.remove("displayNone");
        section.classList.add(animation);
      }
    });
  }

  window.addEventListener("scroll", animaScroll);

  return () => {
    window.removeEventListener("scroll", animaScroll);
  };
}

export default useAnimaScroll;
