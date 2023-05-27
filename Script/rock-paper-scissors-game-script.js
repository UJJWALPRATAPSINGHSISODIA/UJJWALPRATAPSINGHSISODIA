/* Rock Paper Scissors Game Script starts */


let [rps_game_computer_score, rps_game_user_score] = [0, 0];

let rps_game_result_ref = document.getElementById("rps_game_result");
let rps_game_choices_object = {

    'rock': {

        'rock': 'draw',
        'scissors': 'win',
        'paper': 'lose'

    },

    'scissors': {

        'rock': 'lose',
        'scissors': 'draw',
        'paper': 'win'

    },

    'paper': {

        'rock': 'win',
        'scissors': 'lose',
        'paper': 'draw'

    }

}

function rps_game_checker(input) {

    var rps_game_choices = ["rock", "paper", "scissors"];

    var rps_game_num = Math.floor(Math.random() * 3);


    document.getElementById("rps_game_comp_choice").innerHTML = ` Computer choose <span> ${rps_game_choices[rps_game_num].toUpperCase()} </span> `;

    document.getElementById("rps_game_user_choice").innerHTML = ` You choose <span> ${input.toUpperCase()} </span> `;


    let rps_game_computer_choice = rps_game_choices[rps_game_num];

    switch (rps_game_choices_object[input][rps_game_computer_choice]) {

        case 'win':
            rps_game_result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            rps_game_result_ref.innerHTML = "YOU WIN";
            rps_game_user_score++;
            break;

        case 'lose':
            rps_game_result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            rps_game_result_ref.innerHTML = "YOU LOSE";
            rps_game_computer_score++;
            break;

        default:
            rps_game_result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            rps_game_result_ref.innerHTML = "DRAW";
            break;

    }

    document.getElementById("rps_game_computer_score").innerHTML = rps_game_computer_score;
    document.getElementById("rps_game_user_score").innerHTML = rps_game_user_score;

}

/* Rock Paper Scissors Game Script ends */