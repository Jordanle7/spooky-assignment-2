function startGame() {
    // Get player's name and welcome them
    let playerName = prompt("Enter your name:");
    alert("Welcome, " + playerName + ", to the Haunted All Saints HS!");

    // First decision: choose a path
    let path = prompt("Do you want to go into the (1) library, (2) basement, or (3) graveyard?");
    
    // Branch based on the path chosen
    if (path === "1") {
        library();
    } else if (path === "2") {
        basement();
    } else if (path === "3") {
        graveyard();
    } else {
        alert("Invalid choice.. The spirits are displeased...");
        startGame(); // Restart the game if input is invalid
    }
}

function library() {
    // Library scenario
    let choice = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?");
    
    if (choice === "1") {
        alert("A ghost emerges from the book and scares you to death");
    } else if (choice === "2") {
        alert("You quietly leave the library and find the exit. You survive");
    } else {
        alert("The spirits are confused by your choice.");
    }
    
    startGame();
}

function basement() {
    // Basement scenario
    let choice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?");
    
    if (choice === "1") {
        alert("You discover a car trunk filled with candy");
    } else if (choice === "2") {
        alert("You trip and fall... The ghost catches you");
    } else {
        alert("The spirits are confused by your choice.");
    }
    
    startGame();
}

function graveyard() {
    // Graveyard scenario
    let choice = prompt("You enter the graveyard and a zombie appears! Do you (1) fight it with a shovel you found, or (2) run away?");
    
    if (choice === "1") {
        alert("You bravely swing the shovel and defeat the zombie! You survive");
    } else if (choice === "2") {
        alert("You try to run, but the zombie catches you... You become one of the undead");
    } else {
        alert("The zombie is confused by your hesitation and attacks");
    }
    
    startGame();
}

//  Bonus: Another Path 
function hiddenHallway() {
    let choice = prompt("You find a hidden hallway. Do you (1) explore it further or (2) turn back?");
    
    if (choice === "1") {
        alert("You find a secret room filled with ancient treasures... and a friendly ghost!");
    } else if (choice === "2") {
        alert("You turn back, only to see that the hallway has disappeared...");
    } else {
        alert("The spirits don't understand that choice.");
    }
    
    startGame();
}
