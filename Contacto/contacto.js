function header() {
  const headerContEl = document.querySelector(".header-div");
  getHeader(headerContEl);
}

function contact() {
  const contactContEl = document.querySelector(".contact-div");
  getContact(contactContEl);
}

function footer() {
  const footerContEl = document.querySelector(".footer-div");
  getFooter(footerContEl);
}

function main() {
  header();
  contact();
  footer();
}

main();
