let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara =
    document.querySelector("#user-score");

const compScorePara =
    document.querySelector("#comp-score");

const computerChoiceImg =
    document.querySelector("#computer-choice-img");

const computerChoiceName =
    document.querySelector("#computer-choice-name");

const computerCard =
    document.querySelector(".computer-card");


const genCompChoice = () => {

    const options = [
        "rock",
        "paper",
        "scissors"
    ];

    const randIdx =
        Math.floor(Math.random() * options.length);

    return options[randIdx];
};


const resetComputerChoice = () => {

    computerChoiceName.innerText = "WAITING...";

    computerChoiceImg.style.opacity = "0";

    computerChoiceImg.alt = "Waiting";
};


const showComputerChoice = (compChoice) => {

    computerChoiceImg.src =
        `./images/${compChoice}.png`;

    computerChoiceImg.alt =
        compChoice;

    computerChoiceName.innerText =
        compChoice;

    computerChoiceImg.style.opacity = "1";

    computerCard.classList.remove(
        "computer-show"
    );

    void computerCard.offsetWidth;

    computerCard.classList.add(
        "computer-show"
    );
};


const animate = (element) => {

    element.classList.remove("pop");

    void element.offsetWidth;

    element.classList.add("pop");
};


const drawGame = () => {

    msg.innerText =
        "It's a Draw! Play Again";

    msg.style.background =
        "#1c2b45";

    msg.style.borderColor =
        "#5865f2";

    animate(msg);
};


const showWinner =
    (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText =
            userScore;

        msg.innerText =
            `You Win! ${userChoice} beats ${compChoice}`;

        msg.style.background =
            "linear-gradient(135deg, #047857, #10b981)";

        msg.style.borderColor =
            "#10b981";

        animate(userScorePara);

    } else {

        compScore++;

        compScorePara.innerText =
            compScore;

        msg.innerText =
            `You Lost! ${compChoice} beats ${userChoice}`;

        msg.style.background =
            "linear-gradient(135deg, #be123c, #f43f5e)";

        msg.style.borderColor =
            "#f43f5e";

        animate(compScorePara);
    }

    animate(msg);
};


const playGame = (userChoice) => {

    /* Start new round */

    resetComputerChoice();


    /* Computer secretly chooses */

    const compChoice =
        genCompChoice();


    /* Show computer choice after short delay */

    setTimeout(() => {

        showComputerChoice(compChoice);


        if (userChoice === compChoice) {

            drawGame();

            return;
        }


        let userWin;


        if (userChoice === "rock") {

            userWin =
                compChoice === "scissors";

        } else if (userChoice === "paper") {

            userWin =
                compChoice === "rock";

        } else {

            userWin =
                compChoice === "paper";
        }


        showWinner(
            userWin,
            userChoice,
            compChoice
        );

    }, 500);
};


choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice =
            choice.getAttribute("id");

        playGame(userChoice);

    });

});