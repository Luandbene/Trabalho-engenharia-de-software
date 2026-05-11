function addTask() {

  const input = document.getElementById("taskInput");

  const taskText = input.value;

  if (taskText === "") {
    alert("Digite uma tarefa");
    return;
  }

  const li = document.createElement("li");

  li.textContent = taskText;

  const removeButton = document.createElement("button");

  removeButton.textContent = "Remover";

  removeButton.onclick = function () {
    li.remove();
  };

  li.appendChild(removeButton);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
