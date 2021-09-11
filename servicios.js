function getImg(imgId, data) {
  var aux = data.includes.Asset.find((arr) => {
    if (arr.sys.id == imgId) {
      return arr.fields.file.url;
    }
  });
  return aux.fields.file.url;
}

function header() {
  const headerContEl = document.querySelector(".header-div");
  getHeader(headerContEl);
}

function footer() {
  const footerContEl = document.querySelector(".footer-div");
  getFooter(footerContEl);
}

//service

function setServices(dataGlobal) {
  var servicesData = [];

  for (const entry of dataGlobal.items) {
    if (entry.sys.contentType.sys.id == "service") {
      servicesData.push(entry);
    }
  }

  for (const data of servicesData) {
    const templateServiceEl = document.querySelector(".template-service");
    const conteinerServicesEl = document.querySelector(".services");

    //Service img
    const serviceImgEl =
      templateServiceEl.content.querySelector(".service__img");
    serviceImgEl.src = getImg(data.fields.serviceImg.sys.id, dataGlobal);

    //Service Title
    const serviceTitleEl =
      templateServiceEl.content.querySelector(".service__title");
    serviceTitleEl.textContent = data.fields.serviceTitle;

    //Service Description
    const serviceDescriptionEl =
      templateServiceEl.content.querySelector(".service__text");
    serviceDescriptionEl.textContent = data.fields.serviceDescription;

    const clone = document.importNode(templateServiceEl.content, true);
    conteinerServicesEl.appendChild(clone);
  }
}

function servicesData() {
  fetch(
    "https://cdn.contentful.com/spaces/axlyjh8b1j3v/environments/master-2021-08-23/entries?access_token=jPtA8OpLYR3jr7_PQLBoy-lP8Wl1D4uZw4MYkvmcTUM"
  )
    .then((response) => response.json())
    .then((data) => setServices(data));
}

function main() {
  header();
  footer();
  servicesData();
}
main();
