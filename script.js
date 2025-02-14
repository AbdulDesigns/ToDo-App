"use important";

//selection of elements
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let container = document.querySelector(".task-container");
let parent = document.querySelector(".parent");

//---complex logic---

// let p = 0;
// let arr = [{ tab: `` }];
// let tab = `<div> <h2> ${p}</h2> <button> delete</button> </div>`;

// input.addEventListener("input", (e) => {
//   p = `${e.target.value}`;
// });

// button.addEventListener("click", () => {
//   console.log(arr);
//   arr.push(tab);
//   arr.forEach((el) => {
//     container.insertAdjacentHTML("afterbegin", el);
//   });
// });

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("enter the value");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = input.value;
    parent.appendChild(li);
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
});


//event listener using eventlistner
