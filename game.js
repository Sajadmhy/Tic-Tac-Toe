const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const button = document.getElementById("button");

function resetGame() {
    location.reload();
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";
};

var turn = 1;

function cellOne() {
    showTurn();
    if (turn === 1) {
    b1.value = "X";
    b1.disabled = true;
    turn = 0;
} else {
    b1.value = "0";
    b1.disabled = true;
    turn = 1;
}};

function cellTwo() {
    showTurn();
    if (turn === 1) {
    b2.value = "X";
    b2.disabled = true;
    turn = 0;
} else {
    b2.value = "0";
    b2.disabled = true;
    turn = 1;
}};

function cellThree() {
    showTurn();
    if (turn === 1) {
    b3.value = "X";
    b3.disabled = true;
    turn = 0;
} else {
    b3.value = "0";
    b3.disabled = true;
    turn = 1;
}};

function cellFour() {
    showTurn();
    if (turn === 1) {
    b4.value = "X";
    b4.disabled = true;
    turn = 0;
} else {
    b4.value = "0";
    b4.disabled = true;
    turn = 1;
}};

function cellFive() {
    showTurn();
    if (turn === 1) {
    b5.value = "X";
    b5.disabled = true;
    turn = 0;
} else {
    b5.value = "0";
    b5.disabled = true;
    turn = 1;
}};

function cellSix() {
    showTurn();
    if (turn === 1) {
    b6.value = "X";
    b6.disabled = true;
    turn = 0;
} else {
    b6.value = "0";
    b6.disabled = true;
    turn = 1;
}};

function cellSeven() {
    showTurn();
    if (turn === 1) {
    b7.value = "X";
    b7.disabled = true;
    turn = 0;
} else {
    b7.value = "0";
    b7.disabled = true;
    turn = 1;
}};

function cellEight() {
    showTurn();
    if (turn === 1) {
    b8.value = "X";
    b8.disabled = true;
    turn = 0;
} else {
    b8.value = "0";
    b8.disabled = true;
    turn = 1;
}};

function cellNine() {
    showTurn();
    if (turn === 1) {
    b9.value = "X";
    b9.disabled = true;
    turn = 0;
} else {
    b9.value = "0";
    b9.disabled = true;
    turn = 1;
}};


function showTurn() {
    if (turn == 0) {
        document.getElementById('print')
        .innerHTML = "Player X Turn";
    } else {
        document.getElementById('print')
        .innerHTML = "Player 0 Turn";
    }};

function checkStat() {
    if ((b1.value == "X") && (b2.value == "X") && (b3.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player X Won');
    } else if ((b1.value == "X") && (b4.value == "X") && (b7.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player X Won');
    } else if ((b2.value == "X") && (b5.value == "X") && (b8.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b1.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b4.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        window.alert('Player X Won'); 
    } else if ((b4.value == "X") && (b5.value == "X") && (b6.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b1.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player X Won');
    } else if ((b3.value == "X") && (b6.value == "X") && (b9.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        window.alert('Player X Won');
    } else if ((b7.value == "X") && (b8.value == "X") && (b9.value == "X")) {
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        window.alert('Player X Won');
    } else if ((b1.value == "0") && (b2.value == "0") && (b3.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b1.value == "0") && (b4.value == "0") && (b7.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b2.value == "0") && (b5.value == "0") && (b8.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b1.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b4.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        window.alert('Player 0 Won'); 
    } else if ((b4.value == "0") && (b5.value == "0") && (b6.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b1.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b3.value == "0") && (b6.value == "0") && (b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b7.value == "0") && (b8.value == "0") && (b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b1.value == "X") && (b5.value == "X") && (b9.value == "X")){
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Player X Won');
    } else if ((b3.value == "X") && (b5.value == "X") && (b7.value == "X")){
        document.getElementById('print')
        .innerHTML = "Player X won";
        b2.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b9.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Player X Won');
    } else if ((b1.value == "0") && (b5.value == "0") && (b9.value == "0")){
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b3.value == "0") && (b5.value == "0") && (b7.value == "0")){
        document.getElementById('print')
        .innerHTML = "Player 0 won";
        b2.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b9.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Player 0 Won');
    } else if ((b1.value == "X" || b1.value == "0") && (b2.value == "X" || b2.value == "0")
    && (b3.value == "X" || b3.value == "0") && (b4.value == "X" || b4.value == "0") && (b5.value == "X" || b5.value == "0") 
    && (b6.value == "X" || b6.value == "0") && (b7.value == "X" || b7.value == "0") && (b8.value == "X" || b8.value == "0")
    && (b9.value == "X" || b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = `It's a Tie!`;
        window.alert(`It's a Tie!`);
    }};