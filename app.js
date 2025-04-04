// Event Bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//   event.stopPropagation(); //for stop event bubbling.
//   console.log("ul was clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

// TODO APP
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.appendChild(delBtn);
  ul.appendChild(item);
  console.log(inp.value);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

// event delegation

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});
