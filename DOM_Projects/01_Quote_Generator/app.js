// Select the button element with the ID 'new-quote' and assign it to the variable 'btn'
let btn = document.querySelector('#new-quote');

// Select the element with the class 'quote' and assign it to the variable 'quote'
let quote = document.querySelector('.quote');

// Select the element with the class 'person' and assign it to the variable 'person'
let person = document.querySelector('.person');

// Define an array of quote objects, each containing a quote and the person who said it
const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"Does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}, ];

// Add an event listener to the button for 'click' events
btn.addEventListener('click', function(){
    // Generate a random index based on the length of the quotes array
    let random = Math.floor(Math.random() * quotes.length);

    // Set the inner text of the quote element to a random quote from the quotes array
    quote.innerText = quotes[random].quote;

     // Set the inner text of the person element to the person who said the random quote
    person.innerText = quotes[random].person;
})