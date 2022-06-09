/*Menu responsivo*/

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToglle = menuSection.querySelector(".menu-toggle")

menuToglle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})