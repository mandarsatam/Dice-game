function diceroll() {
    var rand1 = Math.floor(Math.random() * 6) + 1;
    var rand2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByTagName("img")[0].setAttribute("src", `images/dice${rand1}.png`);
    document.getElementsByTagName("img")[1].setAttribute("src", `images/dice${rand2}.png`);
    if (rand1 > rand2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
    } else if (rand2 > rand1) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
    } else {
        document.getElementsByTagName("h1")[0].innerHTML = "Draw";
    }
}

window.onload = diceroll;