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
