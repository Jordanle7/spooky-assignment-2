let health = 1; // Starting health

function startGame() {
    // Get player's name and welcome them
    let playerName = prompt("Enter your name, student (or teacher):");
    alert("Welcome, " + playerName + ", to the Haunted All Saints HS!");

    while (health > 0) {
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
            alert("Invalid choice! The spirits are displeased...");
        }
    }

    afterLife();
}

function updateHealth() {
    health -= 1;
    alert("Health: " + health);
}

function library() {
    // Library scenario
    let choice = prompt("You see a creepy old book on a dusty table. Do you (1) open it or (2) leave it alone?");
    
    if (choice === "1") {
        // New choice within the library if they open the book
        let bookChoice = prompt("A ghost emerges from the book! Do you (1) try to talk to it or (2) run away?");
        
        if (bookChoice === "1") {
            alert("The ghost shares a secret way out and you escape unharmed. You survive!");
        } else if (bookChoice === "2") {
            alert("You run, but the ghost follows and scares you to death!");
            updateHealth();
        } else {
            alert("The ghost is confused by your hesitation and vanishes.");
        }
    } else if (choice === "2") {
        alert("You quietly leave the library and find the exit. You survive!");
    } else {
        alert("The spirits are confused by your choice.");
    }
    
    endGame();
}

function basement() {
    // Basement scenario
    let choice = prompt("You hear strange noises. Do you (1) investigate or (2) run away?");
    
    if (choice === "1") {
        // New choice within the basement if they investigate
        let investigateChoice = prompt("You find a mysterious chest. Do you (1) open it or (2) leave it alone?");
        
        if (investigateChoice === "1") {
            let charmChoice = prompt("You open the chest and find a powerful charm that scares away any spirits! Do you (1) destroy it to make it harder or (2) use it?");
            if (charmChoice === "1") {
                alert("Wow you really are special aren't you...The ghost eats you.");
            } else if (charmChoice === "2") {
                alert("Wow... Smart! The charm protects you and you survive");
            }
        } else if (investigateChoice === "2") {
            alert("You leave the chest alone, but the noises grow louder. You run out, just barely escaping!");
        } else {
            alert("The spirits are confused by your hesitation.");
        }
    } else if (choice === "2") {
        alert("You trip and fall... The ghost catches you!");
        updateHealth();
    } else {
        alert("The spirits are confused by your choice.");
    }
    
    endGame();
}

function graveyard() {
    // Graveyard scenario
    let choice = prompt("You enter the graveyard and a zombie appears! Do you (1) fight it with a shovel or (2) run away?");
    
    if (choice === "1") {
        // New choice if they decide to fight the zombie
        let fightChoice = prompt("The zombie is still advancing! Do you (1) aim for the head or (2) try to trip it?");
        
        if (fightChoice === "1") {
            alert("You successfully defeat the zombie and survive!");
        } else if (fightChoice === "2") {
            alert("The zombie stumbles but grabs you as it falls. You don't make it out...");
            updateHealth();
        } else {
            alert("The zombie seizes your hesitation and attacks!");
            updateHealth();
        }
    } else if (choice === "2") {
        alert("You try to run, but the zombie catches you... You become one of the undead!");
        updateHealth();
    } else {
        alert("The spirits are confused by your hesitation.");
    }
    
    endGame();
}

function endGame() {
    if (health > 0) {
        alert("The End. Thanks for playing!");
    }
}

function afterLife() {
    let choice = prompt("You find yourself in the afterlife. Do you want to (1) stay dead or (2) resurrect and continue your journey?");
    
    if (choice === "1") {
        alert("You choose to stay dead. The afterlife is peaceful... forever.");
    } else if (choice === "2") {
        health = 1; // Resurrect with full health
        alert("You have been resurrected! Your health is restored to " + health + ".");
        startGame(); // Restart the game after resurrection
    } else {
        alert("Invalid choice! The spirits are displeased...");
        afterLife(); // Retry afterlife choice
    }
}

// Start the game
startGame();
