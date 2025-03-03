// let playerText = document.getElementById('playerText')
// let restartBtn = document.getElementById('restartBtn')
// let boxes = Array.from(document.getElementsByClassName('box'))

// let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

// const O_TEXT = "O"
// const X_TEXT = "X"
// let currentPlayer = X_TEXT
// let spaces = Array(9).fill(null)

// const startGame = () => {
//     boxes.forEach(box => box.addEventListener('click', boxClicked))
// }

// function boxClicked(e) {
//     const id = e.target.id

//     if(!spaces[id]){
//         spaces[id] = currentPlayer
//         e.target.innerText = currentPlayer

//         if(playerHasWon() !==false){
//             playerText.innerHTML = `${currentPlayer} has won!`
//             let winning_blocks = playerHasWon()

//             winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
//             return
//         }

//         currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
//     }
// }

// const winningCombos = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]

// function playerHasWon() {
//     for (const condition of winningCombos) {
//         let [a, b, c] = condition

//         if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
//             return [a,b,c]
//         }
//     }
//     return false
// }

// restartBtn.addEventListener('click', restart)

// function restart() {
//     spaces.fill(null)

//     boxes.forEach( box => {
//         box.innerText = ''
//         box.style.backgroundColor=''
//     })

//     playerText.innerHTML = 'Tic Tac Toe'

//     currentPlayer = X_TEXT
// }

// startGame()

const gameCell = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");

let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

const startGame = () => {
  gameCell.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      if (e.target.textContent === '') {
        e.target.textContent = playerTurn;
        if (checkWin()){
            console.log(`${playerTurn} is a Winner!`);
            
        }
        else if(chackTie()){
            console.log(`It's a Tie!`);
            
        }else{
            changePlayerTurn();
        }
      }
    });
  });
};

//function to change players turn
const changePlayerTurn = () => {
//   if (playerTurn === currentPlayer){
//       playerTurn = nextPlayer;
//   }else{
//       playerTurn =currentPlayer;
//   }
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};
// function to chack win
const checkWin = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3] = winningConditions[i];
    if (
      gameCell[pos1].textContent !== "" &&
      gameCell[pos1].textContent === gameCell[pos2].textContent &&
      gameCell[pos2].textContent === gameCell[pos3].textContent
    ) {
      return true;
    }

    // console.log(`${pos1} ${pos2} ${pos3}`);
  }
  return false;
};

// function to chack tie
const chackTie =()=>{
    let emptyCellCount=0;
    gameCell.forEach(cell=>{
        if(cell.textContent ===''){
            emptyCellCount++;
        }
    });

    return emptyCellCount === 0 && !checkWin()
}

// calling start game function
startGame();
