function formEvent(formEl) {
  var data;
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    var formData = new FormData(formEl);
    data = {
      to: formData.get("email"),
      message: formData.get("message"),
    };
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
  });
}

function getContact(el) {
  const div = document.createElement("div");
  div.innerHTML = `<div class="form-div">
  <p class="form-text">Escribeme</p>
  <form class="form">
    <fieldset class="form__fieldset">
      <label class="form__label">
        Nombre
        <input name="name" type="text" class="form__input" />
      </label>
      <label class="form__label">
        Email
        <input name="email" type="text" class="form__input" />
      </label>
      <label class="form__label">
        Mensaje
        <textarea name="message" type="text" class="form__input form__textarea"></textarea>
      </label>
      <div class="form__button">
        <button class="button">Enviar</button>
      </div>
    </fieldset>
  </form>
</div>`;
  el.appendChild(div);
  const formEl = div.querySelector(".form");
  formEvent(formEl);
}
