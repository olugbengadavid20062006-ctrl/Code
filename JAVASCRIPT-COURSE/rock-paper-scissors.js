 let score = {
            win: 0,
            lose: 0,
            tie: 0
        };
        document.querySelector('.scores').innerText =
    `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;




        let computerChoice = Math.random();
        let computerPick = '';
        let result = '';
        if (computerChoice < 1/3) {
                computerPick = "rock";
            } else if (computerChoice > 1/3 && computerChoice < 2/3) {
                computerPick = "scissors";
            } else {
                computerPick = "paper";
            }
            
        function template(playerChoice) {
            let computerChoice = Math.random();
            let computerPick;
            let result;

                if (computerChoice < 1/3) {
                    computerPick = "rock";
                } else if (computerChoice > 1/3 && computerChoice < 2/3) {
                    computerPick = "scissors";
                } else {
                    computerPick = "paper";
                }


                if (playerChoice === computerPick) {
                    document.querySelector('.resultMessage').innerText = `Tie.`;
                    score.tie++;
                } else if (
                    (playerChoice === "rock" && computerPick === "scissors") ||
                    (playerChoice === "paper" && computerPick === "rock") ||
                    (playerChoice === "scissors" && computerPick === "paper")
                ) {
                    console.log("You win!");
                    document.querySelector('.resultMessage').innerText = `You win!`;
                    score.win++;
                } else {
                    console.log("You lose!");
                    document.querySelector('.resultMessage').innerText = `You lose!`;
                    score.lose++;
                }
                
                document.querySelector('.moves').innerHTML = `You <img src="images/${playerChoice}-emoji.png" class="rockImage"> <img src="images/${computerPick}-emoji.png" class="rockImage"> Computer`;

                document.querySelector('.scores').innerText =
                    `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;

        }