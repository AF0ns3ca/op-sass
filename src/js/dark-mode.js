document.getElementById("dark-mode").addEventListener("click", function () {
  const btn = document.getElementById("dark-btn");
  //aplicar la clase darkmode a todo el documento
  document.body.classList.toggle("dark-mode");

  if (window.location.pathname.includes("index.html")) {

    if (btn.src.includes("dark-mode")) {
      btn.src = "./build/assets/imgs/svg/light-mode.svg";
    } else {
      btn.src = "./build/assets/imgs/svg/dark-mode.svg";
    }
  } else {
    if (btn.src.includes("dark-mode")) {
      btn.src = "../build/assets/imgs/svg/light-mode.svg";
    } else {
      btn.src = "../build/assets/imgs/svg/dark-mode.svg";
    }
  }

});