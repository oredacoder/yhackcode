const togglebutton = document.querySelector(".navbar_toggle");
const menu = document.querySelector(".menubar");
const icons = document.querySelector(".Sign_up");

togglebutton.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});