/* Tic Tac Toe Game Script starts */


let tac_game_btnRef = document.querySelectorAll(".tac-game-button-option");
let tac_game_popupRef = document.querySelector(".tac-game-popup");
let tac_game_newgameBtn = document.getElementById("tac-game-new-game");
let tac_game_restartBtn = document.getElementById("tac-game-restart");
let tac_game_msgRef = document.getElementById("tac-game-message");

let tac_game_winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let tac_game_xTurn = true;
let tac_game_count = 0;

const tac_game_disableButtons = () => {
    tac_game_btnRef.forEach((element) => (element.disabled = true));
    tac_game_popupRef.classList.remove("tac-game-hide");
};

const tac_game_enableButtons = () => {
    tac_game_btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    tac_game_popupRef.classList.add("tac-game-hide");
};

const tac_game_winFunction = (letter) => {
    tac_game_disableButtons();
    if(letter == "X") {
        tac_game_msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else {
        tac_game_msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

const tac_game_drawFunction = () => {
    tac_game_disableButtons();
    tac_game_msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

tac_game_newgameBtn.addEventListener("click", () => {
    tac_game_count = 0;
    tac_game_enableButtons();
});
tac_game_restartBtn.addEventListener("click", () => {
    tac_game_count = 0;
    tac_game_enableButtons();
});

const tac_game_winChecker = () => {
    for(let i of tac_game_winningPattern) {
        let [element1, element2, element3] = [
            tac_game_btnRef[i[0]].innerText,
            tac_game_btnRef[i[1]].innerText,
            tac_game_btnRef[i[2]].innerText,
        ];

        if(element1 != "" && (element2 != "") & (element3 != "")) {
            if(element1 == element2 && element2 == element3) {
                tac_game_winFunction(element1);
            }
        }
    }
};

tac_game_btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(tac_game_xTurn) {
            tac_game_xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            tac_game_xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        tac_game_count += 1;
        if(tac_game_count == 9) {
            tac_game_drawFunction();
        }
        tac_game_winChecker();
    });
});

window.onload = tac_game_enableButtons;

/* Tic Tac Toe Game Script ends */