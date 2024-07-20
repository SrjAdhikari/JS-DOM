const addTask = document.getElementById('add-task');                // Get the add task button
const taskContainer = document.getElementById('task-container');    // Get the task container
const inputTask = document.getElementById('input-task');            // Get the input field for tasks

// Event Listener for Add Button
// Add an event listener to the add task button
addTask.addEventListener('click', function(){

    // Create a new task element
    let task = document.createElement('div');       // Create a div element for the task
    task.classList.add('task');                     // Add 'task' class to the task div

    // Create a list item to display the task text
    let li = document.createElement('li');          // Create a list item element
    li.innerText = `${inputTask.value}`;            // Set the inner text of the list item to the input task value
    task.appendChild(li);                           // Append the list item to the task div

    // Create a button for checking off the task
    let checkButton = document.createElement("button");             // Create a button element
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';    // Add check icon to the button
    checkButton.classList.add('checkTask');                         // Add 'checkTask' class to the button
    task.appendChild(checkButton);                                  // Append the check button to the task div

    // Create a button for deleting the task
    let deleteButton = document.createElement("button");                // Create a button element
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';   // Add trash icon to the button
    deleteButton.classList.add('deleteTask');                           // Add 'deleteTask' class to the button
    task.appendChild(deleteButton);                                     // Append the delete button to the task div

    // Check if input task is empty
    if(inputTask.value === "") {
        alert('Please Enter a Task');       // Display alert if input task is empty
    } 
    else {
        taskContainer.appendChild(task);    // Append the task div to the task container
    }

    inputTask.value = "";                   // Clear the input field after adding the task

    // Event listener for check button
    checkButton.addEventListener('click', function(){
        // Add line-through style to the parent element (task div) to visually mark it as checked off
        checkButton.parentElement.style.textDecoration = "line-through";
    });


    // Event listener for delete button
    deleteButton.addEventListener('click', function(e){
        let target = e.target;      // Get the clicked button element
        // Remove the parent task div of the clicked button from the task container
        target.parentElement.parentElement.remove();
    });

});