let buttons = document.querySelectorAll(".player_hand");

buttons.forEach(button => {
    button.addEventListener("click", startRound);
});

let player = document.getElementById("player_choice");

function startRound() {
    player.textContent = "round has been played"
}