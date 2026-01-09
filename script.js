// Seleciona elementos
const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll("#filters-section button");

// Função para criar tarefa
function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Botão Concluir
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Concluir";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

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
    li.appendChild(completeBtn);
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

// Função para aplicar filtros
function applyFilter(filter) {
    const tasks = document.querySelectorAll("#task-list li");

    tasks.forEach(task => {
        const isCompleted = task.classList.contains("completed");

        if (filter === "all") {
            task.style.display = "flex";
        } 
        else if (filter === "pending" && isCompleted) {
            task.style.display = "none";
        }
        else if (filter === "completed" && !isCompleted) {
            task.style.display = "none";
        }
        else {
            task.style.display = "flex";
        }
    });
}

// Eventos dos botões de filtro
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        applyFilter(filter);
    });
});

// Evento de clique no botão principal
addBtn.addEventListener("click", addTask);
