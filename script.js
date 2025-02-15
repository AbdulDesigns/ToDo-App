"use important";

//selection of elements
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let container = document.querySelector(".task-container");
let parent = document.querySelector(".parent");
let progress = document.querySelector(".progress");

//---- Functionalities ----

//---- main ----
//1. add task
//2. edit task
//3. delete task
//3.1 Local Storage

//---- optional ----
//4. progressbar
//5. confetti
//6. micro animations

//---complex logic---
//--- irrlevent logic ---

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

//--- Method 1 ---
//--- working code method 1---
//--- simple & Clean ---

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
//------- bit complex --------
//------- using arrays and Local Storage ------

//retrival of data from local storage once page loads
document.addEventListener("DOMContentLoaded", () => {
  let storedTask = JSON.parse(localStorage.getItem("data"));
  console.log(arr);

  //using foreach to render list
  if (storedTask) {
    storedTask.forEach((el) => arr.push(el));
    updateTask();
  }
});

//creating an array to store list items as objects
let arr = [];

//data retrival from local storage

//pusing list data as object inside array
button.addEventListener("click", () => {
  //checking the input for value
  if (input.value) {
    let inputvalue = input.value.trim();
    arr.push({ task: inputvalue, completed: false });
    //calling update function
    updateTask();
    saveTasks();
    input.value = "";
  } else {
    // handle the case when input is empty
    alert("enter the value");
  }
});

//edit task
function editTask(indx) {
  //inserting the current value in input
  input.value = arr[indx].task;
  arr.splice(indx, 1);
  updateTask();
}

//checking the status
const toglFun = (indx) => {
  arr[indx].completed = !arr[indx].completed;
  updateTask();
  saveTasks();
};

//deleting task
function delTask(indx) {
  console.log("clicked");
  arr.splice(indx, 1);
  updateTask();
  saveTasks();
}

//saving tasks to local storage
function saveTasks() {
  localStorage.setItem("data", JSON.stringify(arr));
}

//progressbar
// -WIP-
// function progressBar() {
//   progress.style.width = `${arr.length * 100}px`;
// }

function updateTask() {
  //clearing existing items
  parent.innerHTML = " ";

  //looping over array of objects to add list items
  arr.forEach((val, indx) => {
    //
    //create an li element to inject the html code with task
    let li = document.createElement("li");

    //inner html code with data insertion
    li.innerHTML = `
    <input type="checkbox" clas="checkbox" ${
      val.completed ? "checked completed" : ""
    } />
    <p> ${val.task} </p>
    <p onclick="editTask(${indx})"> Edit </p> 
    <p onclick="delTask(${indx})"> delete <p>
    `;
    li.addEventListener("change", () => {
      toglFun(indx);
      console.log("clicked");
      console.log(localStorage.getItem("data"));
    });
    parent.append(li);
  });
}
