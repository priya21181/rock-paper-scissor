const computer=document.querySelector(".computer img");
        const player=document.querySelector(".player img");
        const computerPoints=document.querySelector(".computerPoints");
        const playerPoints=document.querySelector(".playerPoints");
        const options=document.querySelectorAll(".options button");
        const result=document.querySelector(".result");
        const restartButton = document.querySelector(".restart button");
        let gameEnded = false; 
        

    options.forEach((option) => {
        option.addEventListener("click", () => {
            if (!gameEnded) { // Check if the game has ended
                computer.classList.add("shakeComputer");
                player.classList.add("shakePlayer");
                setTimeout(() => {
                    computer.classList.remove("shakeComputer");
                    player.classList.remove("shakePlayer");

                    player.src = "./images/" + option.innerHTML + "Player.png";

                    const choice = ["STONE", "PAPER", "SCISSORS"];
                    let arrayNo = Math.floor(Math.random() * 3);
                    let computerChoice = choice[arrayNo];
                    computer.src = "./images/" + computerChoice + "Computer.png";

                    let cpoints = parseInt(computerPoints.innerHTML);
                    let ppoints = parseInt(playerPoints.innerHTML);

                    if (option.innerHTML === "STONE") {
                        if (computerChoice === "PAPER") {
                            computerPoints.innerHTML = cpoints + 1;
                        } else if (computerChoice === "SCISSORS") {
                            playerPoints.innerHTML = ppoints + 1;
                        }
                    } else if (option.innerHTML === "PAPER") {
                        if (computerChoice === "SCISSORS") {
                            computerPoints.innerHTML = cpoints + 1;
                        } else if (computerChoice === "STONE") {
                            playerPoints.innerHTML = ppoints + 1;
                        }
                    } else {
                        if (computerChoice === "STONE") {
                            computerPoints.innerHTML = cpoints + 1;
                        } else if (computerChoice === "PAPER") {
                            playerPoints.innerHTML = ppoints + 1;
                        }
                    }
                    checkGameEnd();
                    // if (cpoints === 5 || ppoints === 5) {
                    //     // if (cpoints > ppoints) {
                    //     //     result.textContent = "YOU LOSE THE GAME !!!"; // Fix typo
                    //     // } else if (cpoints < ppoints){
                    //     //     result.textContent = "YOU WON THE GAME !!!";
                    //     // }
                    //     // else{
                    //     //     result.textContent ="PLAY";
                    //     // }
                    //     gameEnded = true; // Set game status to ended
                    //     //return;
                    // }

                }, 900);
            }
        });
    });

    
        //const restartButton = document.querySelector(".restart button");
    function checkGameEnd() {
        let cpoints = parseInt(computerPoints.innerHTML);
        let ppoints = parseInt(playerPoints.innerHTML);

        if (cpoints === 5 || ppoints === 5) {
            if (cpoints > ppoints) {
                result.textContent = "YOU LOSE THE GAME !!!";
            } else if (cpoints < ppoints) {
                result.textContent = "YOU WON THE GAME !!!";
            } else {
                result.textContent = "PLAY";
            }
            gameEnded = true;
        }
    }

    

        restartButton.addEventListener("click", () => {
            // Reset points to 0
            computerPoints.textContent = "0";
            playerPoints.textContent = "0";

            // Clear result message
            result.textContent = "PLAY";

            // Reset gameEnded to allow playing again
            gameEnded = false;
        });