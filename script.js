const errorsEl = document.getElementById("errors");
const board = document.getElementById("board");
const digits = document.getElementById("digits");

var number = null;
var currentNumber = null;

var question = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
//errors
let errors = 0;
errorsEl.innerText = "Errors" + ":" + errors;

startGame();
function startGame() {

    //digits
    for (let i = 1; i < 10; i++) {
        let digit = document.createElement("div");
        digit.id = i;
        digit.innerText = i;
        digit.addEventListener("click", getNumber);
        digit.classList.add("digit-class");
        digits.appendChild(digit);
    }

    //board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let square = document.createElement("div");
            square.id = r.toString() + c.toString();
            square.innerText = question[r][c];
            if (square.innerText == "-") square.innerText = "";

            if (r == 2 || r == 5) {
                square.classList.add("row-line");
            }
            if (c == 2 || c == 5) {
                square.classList.add("col-line");
            }
            square.addEventListener("click", setNumber)
            square.classList.add("square-class");
            board.append(square);
        }
    }
}

function getNumber() {
    number = this;
    number.classList.add("number");
}

function setNumber() {
    let r = parseInt(this.id[0]);
    let c = parseInt(this.id[1]);
    if (number.id !== solution[r][c]) {
        errors += 1;
        errorsEl.innerText = "Errors" + ":" + errors;
        console.log("errors:",errors)
        return;
    }
    this.innerText = number.id;
}


