const btnAgregarTarea = document.getElementById("agregar-tarea");
const tareasHeader =  document.getElementById("tareas-header");


function agregarTarea() {
  const escribirTareaInput = document.getElementById("escribir-tarea").value;

  if(!escribirTareaInput.trim()) {
    alert("Escribe una tarea");
    return;
  }

  const nuevaTareaLi = document.createElement("li");
  nuevaTareaLi.innerText = escribirTareaInput;
  tareasHeader.appendChild(nuevaTareaLi);

  const btnBorrar = document.createElement("button");
  btnBorrar.innerText = "X";
  btnBorrar.className = "deleteBtn";
  nuevaTareaLi.appendChild(btnBorrar);

  btnBorrar.addEventListener("click", () => {
    tareasHeader.removeChild(nuevaTareaLi);
  });

  document.getElementById("escribir-tarea").value = "";

}

btnAgregarTarea.addEventListener("click", agregarTarea);



