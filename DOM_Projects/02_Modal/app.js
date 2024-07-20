// Get the element with the ID 'open-btn' and assign it to the variable 'openBtn'
let openBtn = document.getElementById('open-btn');

// Get the element with the ID 'model-container' and assign it to the variable 'modelContainer'
let modelContainer = document.getElementById('model-container');

// Get the element with the ID 'close-btn' and assign it to the variable 'closeBtn'
let closeBtn = document.getElementById('close-btn');

// Adding event listeners to handle opening and closing of the modal

// Add a 'click' event listener to the 'openBtn' button
openBtn.addEventListener('click', function(){
    // When 'openBtn' is clicked, set the display style of 'modelContainer' to 'block' to show the modal
    modelContainer.style.display = 'block';
});

// Add a 'click' event listener to the 'closeBtn' button
closeBtn.addEventListener('click', function(){
    // When 'closeBtn' is clicked, set the display style of 'modelContainer' to 'none' to hide the modal
    modelContainer.style.display = 'none';
});

// Add a 'click' event listener to the window object to handle clicks outside the modal

window.addEventListener('click', function(event){
    // Check if the clicked target is the modal container
    if(event.target === modelContainer){
        // If the clicked target is the modal container, set its display style to 'none' to hide the modal
        modelContainer.style.display = 'none';
    }
});
