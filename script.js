var cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function handleClick(index) {
  if (!gameOver && gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let combination of winns) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameOver = true;
      alert(`Player ${gameBoard[a]} wins!`);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameOver = true;
    alert("It's a draw!");
  }
}

var resetbtn=document.querySelector("#reseter")
resetbtn.addEventListener('click', function(){
  cells.forEach(cell =>
  cell.innerText=''
  )
  alert("Game Reseted")
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
})