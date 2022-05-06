const nameE = document.getElementById("name");
const lastNameE = document.getElementById("last_name");
const phoneE = document.getElementById("phone");
const button = document.getElementById("button");
const contactListE = document.querySelector(".contacts-container");
const inputBox = document.querySelector(".input-box");
const ErrMsgNameE = document.querySelector(".name-error");
const ErrMsgLastNameE = document.querySelector(".lastname-error");
const ErrMsgPhoneE = document.querySelector(".phone-error");

nameE.addEventListener("keyup", validateName);
lastNameE.addEventListener("keyup", validateLastName);
phoneE.addEventListener("keyup", validatePhone);
button.addEventListener("click", onAddContactList);

inputBox.addEventListener("keyup", validateData);

button.disabled = true;
const IS_DATA_VALID = {
  name: false,
  last_name: false,
  phone: false,
};
function onAddContactList(e) {
  const name = nameE.value;
  const lastName = lastNameE.value;
  const phone = phoneE.value;
  const element = `<li class="item-list">
                        <div>${name}</div>
                        <div>${lastName}</div>
                        <div>${phone}</div>
                    </ul>`;
  contactListE.innerHTML += element;
  clearDate();
  button.disabled = true;
}
function isDataValid() {
  button.disabled = false;
}
function validateName(e) {
  if (!e.target.value.trim()) {
    ErrMsgNameE.innerText = "";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  if (e.target.value.trim().length <= 3) {
    ErrMsgNameE.innerText = "Error, Name should be more then 3 symbols";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  IS_DATA_VALID[e.target.id] = true;
  ErrMsgNameE.innerText = "";
}
function validateLastName(e) {
  if (!e.target.value.trim()) {
    ErrMsgLastNameE.innerText = "";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  if (e.target.value.trim().length <= 3) {
    ErrMsgLastNameE.innerText =
      "Error, Last Name should be more then 3 symbols";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  IS_DATA_VALID[e.target.id] = true;
  ErrMsgLastNameE.innerText = "";
}
function validatePhone(e) {
  const PHONE_REGEXP = /^((\+?3)?8)?0\d{9}$/;
  if (!e.target.value.trim()) {
    ErrMsgPhoneE.innerText = "";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  if (!e.target.value.match(PHONE_REGEXP)) {
    ErrMsgPhoneE.innerText = "Error, Phone should be like +380997777777";
    button.disabled = true;
    IS_DATA_VALID[e.target.id] = false;
    return;
  }
  IS_DATA_VALID[e.target.id] = true;
  ErrMsgPhoneE.innerText = "";
}

function validateData(e) {
  const target = e.target;
  if (target.id === "name") {
    validateName(e);
  }
  if (target.id === "last_name") {
    validateLastName(e);
  }
  if (target.id === "phone") {
    validatePhone(e);
  }
  console.log(IS_DATA_VALID);
  button.disabled = !(
    IS_DATA_VALID.name &&
    IS_DATA_VALID["last_name"] &&
    IS_DATA_VALID["phone"]
  );
}

function clearDate() {
  nameE.value = "";
  lastNameE.value = "";
  phoneE.value = "";
}