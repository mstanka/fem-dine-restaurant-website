// reservation form - booking page
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");
const date = document.getElementById("date");

const hour = document.getElementById("hour");
const min = document.getElementById("min");
const dayTime = document.getElementById("day-time");
const time = document.getElementById("time");

const people = document.getElementById("people");
const iconMinus = document.getElementById("icon-minus");
const iconPlus = document.getElementById("icon-plus");


function showError(input) {
  input.className = "form__input form__input--error";

  if (input === name || input === email) {
    let formField = input.parentElement;
    let errorMsg = formField.querySelector(".form__msg");
    errorMsg.className = "form__msg form__msg--error";
    errorMsg.innerText = "This field is required";
  } else if (input === month || input === day || input === year) {
    let errorMsg = date.querySelector(".form__msg");
    errorMsg.className = "form__msg form__msg--error";
    errorMsg.innerText = "This field is incomplete";
  } else if (input === hour || input === min) {
    let errorMsg = time.querySelector(".form__msg");
    errorMsg.className = "form__msg form__msg--error";
    errorMsg.innerText = "This field is incomplete";
  }
}

function removeError(input) {
  input.className = "form__input";

  if (input === name || input === email) {
    let formField = input.parentElement;
    let errorMsg = formField.querySelector(".form__msg");
    errorMsg.className = "form__msg";
  } else if (input === month || input === day || input === year) {
    let errorMsg = date.querySelector(".form__msg");
    errorMsg.className = "form__msg";
  } else if (input === hour || input === min) {
    let errorMsg = time.querySelector(".form__msg");
    errorMsg.className = "form__msg";
  }
}

function checkEmail(input) {
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regEx.test(input.value.trim())) {
    removeError(input);
  } else {
    showError(input);
  }
}

function checkInputs(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input);
    } else {
      removeError(input);
    }
  });
}

function checkPeople(people) {
  if (people.value > 0) {
    return true;
  }
}

iconMinus.addEventListener("click", () => {
  people.value = parseInt(people.value) - 1;
});

iconPlus.addEventListener("click", () => {
  people.value = parseInt(people.value) + 1;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs([name, email, month, day, year, hour, min]);
  checkEmail(email);
  checkPeople(people);
});
