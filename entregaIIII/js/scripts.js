// ======== MENU HAMBÚRGUER ========
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });
}
