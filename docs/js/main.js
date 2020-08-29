// toggle item list - home page section 2
function toggleItem(toggleItem) {
  for (let i = 1; i < 4; i++) {
    const item = document.getElementById(`item-${i}`);
    const line = document.getElementById(`line-${i}`);
    const content = document.getElementById(`content-${i}`);
    const picture = document.getElementById(`picture-${i}`);

    item.classList.remove("items__item--active");
    line.classList.remove("items__line--active");
    content.classList.remove("items__content--active");
    picture.classList.remove("picture--active");

    if (i === toggleItem) {
      item.classList.add("items__item--active");
      line.classList.add("items__line--active");
      content.classList.add("items__content--active");
      picture.classList.add("picture--active");
    }
  }
}

document.getElementById("item-1").addEventListener("click", () => {
  toggleItem(1);
});

document.getElementById("item-2").addEventListener("click", () => {
  toggleItem(2);
});

document.getElementById("item-3").addEventListener("click", () => {
  toggleItem(3);
});

// reservation form - booking page
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");
const hour = document.getElementById('hour');
const min = document.getElementById("min");

function checkInputs() {
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let inputs = [name, email, month, day, year, hour, min];

  for (item in inputs) {
    if (item === email && !regEx.test(email.value.trim())) {
      showErrorMsg(email);
    }

    if (item.value.trim() === "") {
      showErrorMsg(item);
    } else {
      removeErrorMsg(item);
    }
  }
}

function showErrorMsg(input) {
  let formInput = input.parentElement;
  let errorMsg = document.querySelector(".form__field");

  formInput.classList.add("form__input--error");
  errorMsg.style.visibility = "visible";

  if (input === name || input === email) {
    errorMsg.innerText = "This field is required";
  } else {
    errorMsg.innerText = "This field is incomplete";
  }
}

function removeErrorMsg(input) {
  let formInput = input.parentElement;

  formInput.classList.remove("form__input--error");
  errorMsg.style.visibility = "hidden";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
