let userInput = document.getElementById("task");
let taskInputBtn = document.getElementById("btn-task");
let taskList = document.getElementById("list");
let taskListTitle = document.getElementById("tasks-title");

function updateTaskListTitle() {
  let hasTasks = taskList.children.length > 0;

  taskListTitle.style.display = hasTasks ? "block" : "none";
}

function createTask(str) {
  let taskText = str.trim();

  if (!taskText) {
    alert("Please, write down a task.");
    return;
  }

  //buscar duplicados
  let existingTasks = document.querySelectorAll(".items p");

  for(let task of existingTasks) {
    if(task.textContent.toLowerCase() === taskText.toLowerCase()) {
      alert("This task already exists.");
      return;
    }
  }

  //Crear elementos
  let newTask = document.createElement("li");
  newTask.className = "items";

  //texto
  let taskTextEl = document.createElement("p");
  taskTextEl.textContent = taskText;

  //boton
  let deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.className = "delete-task";
  deleteTaskBtn.textContent = "❌";

  //agregar children a newTask
  newTask.appendChild(taskTextEl);
  newTask.appendChild(deleteTaskBtn);

  //Agregar newTask to list
  taskList.appendChild(newTask);

  deleteTaskBtn.addEventListener("click", () => {
    taskList.removeChild(newTask);
    updateTaskListTitle();
  });

  userInput.value = "";

}

updateTaskListTitle();


taskInputBtn.addEventListener("click", () => {
  createTask(userInput.value);
  updateTaskListTitle();
});

userInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
      createTask(userInput.value);
      updateTaskListTitle();
  }
});

/* ✅ Correct general order for building elements in JavaScript DOM:
Create all necessary elements

Assign classes, IDs, attributes, and text to each

Append smaller elements into their parent containers

Finally append the top-level element (e.g., <li>) to the DOM */