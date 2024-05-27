// Your code goes here
let friendGreeting = document.querySelector("#friend-greeting");
let params = new URLSearchParams(document.location.search);
let friendName = params.get('name');
friendGreeting.textContent = "hello" + " " + friendName;