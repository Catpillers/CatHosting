let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let modalYesButton = document.querySelector(".modal a");
let button = document.querySelectorAll(".plan button");
let burger = document.querySelector(".burger-wrapper");
let burgerMenu = document.querySelector(".mobile-nav");
let buttonForAnimation = document.querySelector(".main-nav__item--cta");



if (button) {
  button.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("open");
      backdrop.classList.add("open");
    });
  });
}

if (backdrop) {
  backdrop.addEventListener("click", closeModal);
}
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
if (modalYesButton) {
  modalYesButton.addEventListener("click", closeModal);
}

burger.addEventListener("click", burgerMenuControl);

function closeModal() {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
}

function burgerMenuControl() {
  let style = getComputedStyle(burgerMenu);
  let display = style.getPropertyValue("display");
  display === "none" ? openBurger() : closeBurger();
}

function openBurger() {
  burgerMenu.classList.add("open");
}

function closeBurger() {
  burgerMenu.classList.remove("open");
}

buttonForAnimation.addEventListener("animationStart", (even) => {
  console.log("Animation", event)
} )

buttonForAnimation.addEventListener("animationStart", (even) => {
  console.log("AnimationEnd", event)
} )

buttonForAnimation.addEventListener("animationStart", (even) => {
  console.log("Animation Iteration", event)
} )
