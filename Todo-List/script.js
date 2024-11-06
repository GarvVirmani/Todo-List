let inpEl = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerHTML = inpEl.value;

  li.addEventListener("click", function () {
    li.remove();
  });

  if (li.innerHTML === "") {
    return;
  } else {
    ul.append(li);
    inpEl.value = "";
  }
});
