const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");

button.addEventListener("click", function () {
  const div = document.createElement("div");
  const edit = document.createElement("button");
  const li = document.createElement("li");
  edit.textContent = "edit";
  const deleting = document.createElement("button");
  div.appendChild(li);
  li.innerHTML = input.value;
  deleting.innerHTML = "delete";
  div.appendChild(edit);
  div.appendChild(deleting);
  list.appendChild(div);
  input.value = "";
  div.classList.add("div");
  deleting.addEventListener("click", function () {
    li.remove();
    edit.remove();
    deleting.remove();
  });
  edit.addEventListener("click", function () {
    var userInput = window.prompt("enter new value");
    if (userInput !== null && userInput.trim() !== "") {
      li.innerHTML = userInput;
    }
  });
});
