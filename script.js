// Seleciona elementos
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Função para criar tarefa
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return; // impede tarefas vazias
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    input.value = ""; // limpa o campo
}

// Evento de clique no botão
addBtn.addEventListener("click", addTask);