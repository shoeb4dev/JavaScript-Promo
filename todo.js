const tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");

    if (!input.value.trim()) return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    renderTasks();
}

function renderTasks() {
    // Display the tasks
}