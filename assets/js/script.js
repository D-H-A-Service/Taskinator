var buttonEl = document.querySelector("#save-task"); // DOM element 
var taskToDoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = " this is a new task.";
    taskToDoEL.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);