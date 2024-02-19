/**
 * @Autor Alvaro Fonseca Hernandez
 * @GitHub https://github.com/AF0ns3ca/op-sass.git
 */

document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el modo oscuro está activado en el localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Función para activar o desactivar el modo oscuro
  function toggleDarkMode() {
    const btn = document.getElementById("dark-btn");
    // Aplicar la clase darkmode a todo el documento
    document.body.classList.toggle("dark-mode");

    // Cambiar la imagen del botón según el estado del modo oscuro
    if (window.location.pathname.includes("index.html")) {

      if (btn.src.includes("dark-mode")) {
        btn.src = "./build/assets/imgs/svg/light-mode.svg";
        localStorage.setItem("darkMode", "true");
      } else {
        btn.src = "./build/assets/imgs/svg/dark-mode.svg";
        localStorage.setItem("darkMode", "false");
      }
    } else {
      if (btn.src.includes("dark-mode")) {
        btn.src = "../build/assets/imgs/svg/light-mode.svg";
        localStorage.setItem("darkMode", "true");
      } else {
        btn.src = "../build/assets/imgs/svg/dark-mode.svg";
        localStorage.setItem("darkMode", "false");
      }
    }
  }

  // Agregar el listener al botón
  document.getElementById("dark-mode").addEventListener("click", toggleDarkMode);

  // Si el modo oscuro estaba activado previamente, activarlo nuevamente
  if (isDarkMode) {
    toggleDarkMode();
  }
});