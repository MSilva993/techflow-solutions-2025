// Seleciona elementos
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Função para criar tarefa
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Botão Editar
    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editTask(span));

    // Botão Excluir
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
}

// Função para editar tarefa
function editTask(spanElement) {
    const oldText = spanElement.textContent;

    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = oldText;

    spanElement.replaceWith(inputEdit);
    inputEdit.focus();

    inputEdit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            saveEdit(inputEdit);
        }
    });

    inputEdit.addEventListener("blur", () => {
        saveEdit(inputEdit);
    });
}

// Função para salvar edição
function saveEdit(inputElement) {
    const newText = inputElement.value.trim();

    if (newText === "") {
        inputElement.focus();
        return;
    }

    const span = document.createElement("span");
    span.textContent = newText;

    inputElement.replaceWith(span);
}

// Evento de clique no botão principal
addBtn.addEventListener("click", addTask);