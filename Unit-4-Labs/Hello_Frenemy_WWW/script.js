let computerResponse = document.querySelector("#computer-response");
let nameForm = document.querySelector("#name-form");
let userInputLabel = document.querySelector("#user-input");


// * callback function within your event listener
nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let userInput = userInputLabel.value.toLowerCase(); 
    let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

    if (enemyList.includes(userInput)) {
        computerResponse.textContent = "Go away!";
    } else {
        computerResponse.textContent = `Hello, ${userInput}!`;
    }
});
