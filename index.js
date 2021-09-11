//Get Images

function getImg(imgId, data) {
  var aux = data.includes.Asset.find((arr) => {
    if (arr.sys.id == imgId) {
      return arr.fields.file.url;
    }
  });
  return aux.fields.file.url;
}

// Header

function header() {
  var cont = document.querySelector(".header-conteiner");
  getHeader(cont);
}

//Welcome Section

function setWelcome(dataGlobal) {
  var data;

  for (const entry of dataGlobal.items) {
    if (entry.sys.contentType.sys.id == "welcome") {
      data = entry;
    }
  }

  const templateWelcomeEl = document.querySelector(".template-welcome");
  const conteinerWelcomeEl = document.querySelector(".welcome-conteiner");
  const greetingEl =
    templateWelcomeEl.content.querySelector(".welcome__greeting");
  greetingEl.textContent = data.fields.presentation;
  const nameEl = templateWelcomeEl.content.querySelector(".welcome__name");
  nameEl.textContent = data.fields.name;

  const clone = document.importNode(templateWelcomeEl.content, true);
  conteinerWelcomeEl.appendChild(clone);
}

function welcomeData() {
  fetch(
    "https://cdn.contentful.com/spaces/axlyjh8b1j3v/environments/master-2021-08-23/entries?access_token=jPtA8OpLYR3jr7_PQLBoy-lP8Wl1D4uZw4MYkvmcTUM"
  )
    .then((response) => response.json())
    .then((data) => setWelcome(data));
}

//Presentation Section

function getPresentationImg(imgId, data) {
  var aux = data.includes.Asset.find((arr) => {
    if (arr.sys.id == imgId) {
      return arr.fields.file.url;
    }
  });
  return aux.fields.file.url;
}

function setPresentation(dataGlobal) {
  var data;

  for (const entry of dataGlobal.items) {
    if (entry.sys.contentType.sys.id == "prensentation") {
      data = entry;
    }
  }

  // Presentation template
  const templatePresentationEl = document.querySelector(
    ".template-presentation"
  );
  //Presentation conteiner
  const conteinerPresentationEl = document.querySelector(
    ".presentation-conteiner"
  );
  //Presentation name
  const nameEl = templatePresentationEl.content.querySelector(
    ".presentation__name"
  );
  nameEl.textContent = data.fields.name;
  //Presentation Text
  const presentationTextEl = templatePresentationEl.content.querySelector(
    ".presentation__text"
  );
  presentationTextEl.textContent = data.fields.presentationText;
  //Presentation img
  const presentationImgEl =
    templatePresentationEl.content.querySelector(".presentation__img");
  presentationImgEl.src = getImg(
    data.fields.presentationImg.sys.id,
    dataGlobal
  );

  const clone = document.importNode(templatePresentationEl.content, true);
  conteinerPresentationEl.appendChild(clone);
}

function presentationData() {
  fetch(
    "https://cdn.contentful.com/spaces/axlyjh8b1j3v/environments/master-2021-08-23/entries?access_token=jPtA8OpLYR3jr7_PQLBoy-lP8Wl1D4uZw4MYkvmcTUM"
  )
    .then((response) => response.json())
    .then((data) => setPresentation(data));
}

//Services Section

function setServices(dataGlobal) {
  var servicesData = [];

  for (const entry of dataGlobal.items) {
    if (entry.sys.contentType.sys.id == "service") {
      servicesData.push(entry);
    }
  }

  for (const data of servicesData) {
    const templateServiceEl = document.querySelector(".template-service");
    const conteinerServicesEl = document.querySelector(".services__div");

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

//Contact Section

function contact() {
  const formConteiner = document.querySelector(".form-conteiner");
  getContact(formConteiner);
}

//Footer

function footer() {
  const footerConteinerEl = document.querySelector(".footer-conteiner");
  getFooter(footerConteinerEl);
}

function main() {
  header();
  welcomeData();
  presentationData();
  servicesData();
  contact();
  footer();
}

main();
