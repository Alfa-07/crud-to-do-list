// Get elements
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let todos = [];

// Add Task Function
addBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); // Get input & remove spaces
    if (taskText === "") return; // Stop if input is empty

    const newTask = { id: Date.now(), text: taskText }; // Create task object
    todos.push(newTask); // Add to list
    saveToLocalStorage(); // Save tasks
    renderTodos(); // Update UI
    todoInput.value = ""; // Clear input field
});

// Render Tasks Function
function renderTodos() {
    todoList.innerHTML = ""; // Clear previous list
    todos.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        todoList.appendChild(li);
    });
}

// Save to Local Storage
function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
