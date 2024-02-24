"use strict";

//<li class="list-group-item">An item</li>

let ul = document.querySelector("ul");
let i = document.querySelector("i");
let arr = [];

document.querySelector(".add").addEventListener("click", function () {
  let input = document.querySelector(".input-text");
  let text = input.value;
  if (text.trim() == "") {
    alert("cant be empty");
    return;
  }
  console.log(arr);
  if (!arr.includes(text)) {
    arr.push(text);
  } else {
    alert("already exists");
    return;
  }
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = text;
  ul.append(li);

  input.value = "";
  let i = document.createElement("i");
  i.className = "fa-solid fa-trash remove";
  li.append(i);

  if (
    i.addEventListener("click", function () {
      ul.removeChild(li);
    })
  );
});
