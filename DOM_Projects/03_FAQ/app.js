// Declare a constant 'accordion' to store a collection of elements with the class name 'content-container'
const accordion = document.getElementsByClassName('content-container');

// Iterate over each element in the 'accordion' collection
for (let i = 0; i < accordion.length; i++) {
    // Add an event listener to each element
    accordion[i].addEventListener('click', function () {
        // When an element is clicked, toggle the 'active' class on that element
        this.classList.toggle('active');
    });
}