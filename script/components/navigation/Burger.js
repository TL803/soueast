  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    if (!menuToggle || !mobileMenu || !overlay) {
      console.error("Один из элементов меню не найден!");
      return;
    }

    function openMenu() {
      mobileMenu.classList.remove("translate-x-full");
      overlay.classList.remove("hidden");
    }

    function closeMenu() {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
    }

    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (mobileMenu.classList.contains("translate-x-full")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    overlay.addEventListener("click", closeMenu);

    // Защита от закрытия при клике внутри меню
    mobileMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });