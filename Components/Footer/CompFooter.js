function getFooter(el) {
  var div = document.createElement("div");
  div.innerHTML = `<footer class="footer">
  <img class="footer__logo" src="../../images/logo.png" alt="logo" />
  <div class="footer__socialmedia-conteiner">
    <div class="footer__socialmedia footer__instagram">
      <a
        href="https://www.instagram.com/carrizo_15/"
        class="footer__socialmedia-link footer__instagram-link"
      >
        <p class="footer__socialmedia-name footer__instagram-name">
          Instagram
        </p>
        <img
          class="logo-socialmedia footer__instagram-logo"
          src="../../images/instagram.png"
          alt="instagram"
        />
      </a>
    </div>
    <div class="footer__socialmedia footer__linkedin">
      <a
        href="https://www.linkedin.com/in/nehuen-carrizo-3708a8218/"
        class="footer__socialmedia-link footer__linkedin-link"
      >
        <p class="footer__socialmedia-name footer__linkedin-name">
          LinkedIn
        </p>
        <img
          class="logo-socialmedia footer__linkedin-logo"
          src="../../images/linkedin.png"
          alt="linkedin"
        />
      </a>
    </div>
    <div class="footer__socialmedia footer__github">
      <a
        href="https://github.com/Nehuen15"
        class="footer__socialmedia-link footer__github-link"
      >
        <p class="footer__socialmedia-name footer__github-name">Github</p>
        <img
          class="logo-socialmedia footer__github-logo"
          src="../../images/github.png"
          alt="github"
        />
      </a>
    </div>
  </div>
</footer>`;
  el.appendChild(div);
}
