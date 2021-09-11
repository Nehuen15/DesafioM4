function burguerMenu() {
  const buttonOpenEl = document.querySelector(".header__button-open-menu");
  const burguerMenuEl = document.querySelector(".header__burguer-menu-opened");
  const buttonCloseEl = document.querySelector(".header__button-close-menu");
  buttonOpenEl.addEventListener("click", (e) => {
    burguerMenuEl.style.display = "initial";
    buttonOpenEl.style.display = "none";
  });
  buttonCloseEl.addEventListener("click", (e) => {
    burguerMenuEl.style.display = "";
    buttonOpenEl.style.display = "";
  });
}

function getHeader(el) {
  const div = document.createElement("div");
  div.innerHTML = `<header class="header">
  <a href="./index.html">
    <img class="logo header__logo" src="./images/logo.png" alt="logo" />
  </a>
  <button class="header__button-open-menu">
    <img
      class="header__burguer-menu-img"
      src="./images/burger.png"
      alt="burguer-menu"
    />
  </button>
  <div class="header__desktop-options">
    <a class="header__desktop-option" href="./portfolio.html"
      >Portfolio</a
    >
    <a class="header__desktop-option" href="./servicios.html"
      >Servicios</a
    >
    <a class="header__desktop-option" href="./contacto.html"
      >Contacto</a
    >
  </div>
  <div class="header__burguer-menu-opened">
    <button class="header__button-close-menu">
      <img
        class="header__button-close-menu-img"
        src="./images/cross.png"
        alt="cross"
      />
    </button>
    <div class="header__burguer-menu-options">
      <a
        class="header__burguer-option"
        href=".portfolio.html"
        >Portfolio</a
      >
      <a
        class="header__burguer-option"
        href=".servicios.html"
        >Servicios</a
      >
      <a class="header__burguer-option" href="./contacto.html"
        >Contacto</a
      >
    </div>
  </div>
</header>`;
  el.appendChild(div);
  burguerMenu();
}
