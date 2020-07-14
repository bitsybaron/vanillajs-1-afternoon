const board = [];
console.log('hi')

function play(clickedId) {
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }

    if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') || (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') || (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') || (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') || (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') || (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') || (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') || (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')) {
    alert('X wins!') 
} else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') || (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') || (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') || (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') || (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') || (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') || (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') || (board[2] === 'O' && board[5] === 'O' && board[8] === 'O')) {
    alert('O wins!')
}
let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, ya bozos");
  }
}

  console.log(board);





  

// let zero = document.getElementById('0');
// let one = document.getElementById('1');
// let two = document.getElementById('2');
// let three = document.getElementById('3');
// let four = document.getElementById('4');
// let five = document.getElementById('5');
// let six = document.getElementById('6');
// let seven = document.getElementById('7');
// let eight = document.getElementById('8');

