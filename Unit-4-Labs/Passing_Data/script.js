let computerResponse = document.querySelector("#computer-response");
let nameForm = document.querySelector("#name-form");
let userInputLabel = document.querySelector("#user-input");


// * callback function within your event listener
nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
fd``````````````
    let userInput = userInputLabel.value.toLowerCase(); 
    let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

    if (enemyList.includes(userInput)) {
        computerResponse.textContent = "Go away!";
    } else {
        document.location = `/greeting.html?name=${encodeURIComponent(userInputLabel.value)}`;
    }
});
