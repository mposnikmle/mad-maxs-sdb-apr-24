// * Max's extra state machine lesson

// ! state machine
const mainStreet = {
    myhouse: ["street"],
    street: ["myhouse", "dunkin", "mcdonalds", "school", "pharmacy"],
    dunkin: ["street"],
    mcdonalds: ["street"],
    school: ["street"],
    pharmacy: ["street"]
}

// ! Another example of a state machine
const playerAttire = {
    noShoes: ["sandals"],
    sandals: ["noShoes"]
}



let currentLocation = "myhouse";
let currentAttire = "noShoes";

// * These 2 functions are the same exact thing, only readability is different

function changeLocation(newLocation) {
    let availableLocation = mainStreet[currentLocation];

    return availableLocation.includes(newLocation)      
            ? (currentLocation = newLocation)
            : console.log(`Transition from ${currentLocation} to ${newLocation} is prohibited`)
}


function changeAttire(newAttire) {
    let availableAttires = playerAttire[currentAttire];
    if (availableAttires.includes(newAttire)) {
        currentAttire = newAttire;
    } else {
        console.log(`Cannot change attire from ${currentAttire} to ${newAttire}`);
    }
}


const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

async function playGame() {
    console.log(`>>>Current location is: ${currentLocation}`);
    console.log(`>>>Current attire is: ${currentAttire}`);
    const availableLocations = mainStreet[currentLocation].filter(loc => loc!== currentLocation);
    const availableAttires = playerAttire[currentAttire].filter(attire => attire!== currentAttire);
    let message;
    if (currentLocation === "myhouse" && currentAttire == "noShoes") {
        message = `I am at ${currentLocation}, I need to wear sandals to leave`;
    } else {
        message = `I am at ${currentLocation}, I can go to ${availableLocations.join(', ')}`;
    }
    console.log(message);
    let answer = await ask('> ');

    if (availableLocations.includes(answer.toLowerCase())) {
        if (currentLocation == "myhouse" && currentAttire !== "sandals") {
        console.log(`type 'sandals' to put on sandals`);
        } else {
        changeLocation(answer.toLowerCase());
        console.log(`You go to ${answer.toLowerCase()}`);
        }
    } else if (availableAttires.includes(answer.toLowerCase())) {
        changeAttire(answer.toLowerCase());
        console.log(`You change attire to ${answer.toLowerCase()}`);
    } else {
        console.log(`You can't go to ${answer.toLowerCase()} from here`);
    }
    return playGame(); // Using loops is better
}

playGame();