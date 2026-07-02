const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>

<script>
  AOS.init({
    duration: 1000,
    once: true
  });
</script>