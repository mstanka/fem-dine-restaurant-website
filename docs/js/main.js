// toggle item list
function toggleItem(toggleItem) {
  for (let i = 1; i < 4; i++) {
    const item = document.getElementById("item-" + i);
    const itemLine = document.getElementById("item_line-" + i);
    const itemContent = document.getElementById("item_content-" + i);

    item.classList.remove("item-active");
    itemLine.classList.remove("item_line-active");
    itemContent.classList.remove("item_content-active");

    if (i === toggleItem) {
      item.classList.add("item-active");
      itemLine.classList.add("item_line-active");
      itemContent.classList.add("item_content-active");
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