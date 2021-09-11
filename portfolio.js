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

function setPortfolio(dataGlobal) {
  var worksData = [];
  console.log(dataGlobal);
  for (const entry of dataGlobal.items) {
    if (entry.sys.contentType.sys.id == "work") {
      worksData.push(entry);
    }
  }

  for (const data of worksData) {
    const templateWorkEl = document.querySelector(".template-work");
    const conteinerWorksEl = document.querySelector(".portfolio");

    //Work img
    const workImgEl = templateWorkEl.content.querySelector(".work__img");
    workImgEl.src = getImg(data.fields.workImg.sys.id, dataGlobal);

    //Work Title
    const workTitleEl = templateWorkEl.content.querySelector(".work__title");
    workTitleEl.textContent = data.fields.workTitle;

    //Work Description
    const workDescriptionEl =
      templateWorkEl.content.querySelector(".work__text");
    workDescriptionEl.textContent = data.fields.workDescription;

    //Work link
    const workLinkEl = templateWorkEl.content.querySelector(".work__link");
    workLinkEl.href = data.fields.workLink;

    const clone = document.importNode(templateWorkEl.content, true);
    conteinerWorksEl.appendChild(clone);

    //
  }
}

function WorksData() {
  fetch(
    "https://cdn.contentful.com/spaces/axlyjh8b1j3v/environments/master-2021-08-23/entries?access_token=jPtA8OpLYR3jr7_PQLBoy-lP8Wl1D4uZw4MYkvmcTUM"
  )
    .then((response) => response.json())
    .then((data) => setPortfolio(data));
}

function main() {
  header();
  footer();
  WorksData();
}
main();
