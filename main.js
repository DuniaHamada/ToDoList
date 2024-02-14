let addProduct = document.querySelector(".addList");

addProduct.onsubmit = add;
let checkbox = document.querySelector(".Checkbox");
function add(e) {
  e.preventDefault();
  let inputValue = "";
  let inputVlueArray = [];

  input = document.querySelector(".input").value;
  inputVlueArray.push(input);
  let result = `
   <div class="task">
   <input type="checkbox" class="Checkbox">
   <p class="inputName"><span class="">${input}</span></p>
   </div>
   `;

  document.querySelector(".inputValue").innerHTML += result;

  let checkboxes = document.querySelectorAll(".Checkbox");
  for (let i = 0; i < checkboxes.length; i++) {
    checkbox = checkboxes[i];
    checkbox.addEventListener("change", function () {
      let span = checkbox.closest(".task").querySelector("span");
      if (checkbox.checked) {
        span.classList.add("lineText");
      } else {
        span.classList.remove("lineText");
      }

      CompletedTasks();
    });
  }

  document.querySelector(".input").value = "";
}

function CompletedTasks() {
  let completedTasks = document.querySelectorAll(".Checkbox:checked");

  for (let i = 0; i < completedTasks.length; i++) {
    let task = completedTasks[i];
    let span = task.closest(".task").querySelector("span");
    span.classList.add("lineText");
  }
}
