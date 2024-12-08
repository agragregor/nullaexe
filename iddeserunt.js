document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get the value of the input field
        const task = taskInput.value.trim();

        if (task) {
            // Create a new list item and add it to the task list
            const listItem = document.createElement('li');
            listItem.textContent = task;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = '';
        }
    });
});
