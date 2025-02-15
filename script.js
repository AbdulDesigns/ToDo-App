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

//------working code method 1-----------

// button.addEventListener("click", () => {
//   if (input.value === "") {
//     alert("enter the value");
//   } else {
//     let li = document.createElement("li");
//     let span = document.createElement("span");
//     li.innerHTML = input.value;
//     parent.appendChild(li);
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//     setData();
//   }
//   input.value = "";
// });

// //event listener using eventlistner
// parent.addEventListener("click", (e) => {
//   if (e.target.tagName === "SPAN") {
//     e.target.parentElement.remove();
//     setData();
//   }
// });

// //using local storage
// function setData() {
//   localStorage.setItem("data", parent.innerHTML);
// }

// function showData() {
//   parent.innerHTML = localStorage.getItem("data");
// }
// showData();

//------- Method 2 --------
//------- using arrays and Local Storage ------
//--bit complex--

//creating an array to store list items as objects
let arr = [];

//pusing list data as object inside array
button.addEventListener("click", (e) => {
  let inputvalue = input.value.trim();
  arr.push({ task: inputvalue, completed: false });
  //calling update function
  updateTask();
  e.preventDefault();
});

const toglFun = (indx) => {
  arr[indx].completed = !arr[indx].comple;
};

function updateTask() {
  //clearing existing items
  parent.innerHTML = " ";

  //looping over array of objects to add list items
  arr.forEach((val, indx) => {
    //create an li element to inject the html code with task
    let li = document.createElement("li");

    //inner html code with data insertion
    li.innerHTML = `
    <input type="checkbox" clas="checkbox" ${
      val.completed ? "completed" : ""
    } />
    <p> ${val.task} </p> `;
    li.addEventListener("change", () => {
      toglFun(indx);
      console.log("clicked");
    });
    parent.append(li);
  });
}
