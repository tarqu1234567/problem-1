


// // problem  1

// function checkWin(board) {
//     // Check rows
//     for (let i = 0; i < 3; i++) {
//         if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
//             return board[i][0];
//         }
//     }

//     // Check columns
//     for (let i = 0; i < 3; i++) {
//         if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
//             return board[0][i];
//         }
//     }

//     // Check diagonals
//     if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
//         return board[0][0];
//     }
//     if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
//         return board[0][2];
//     }

//     // Check for a tie
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (board[i][j] === '') {
//                 return null; // Game is not over
//             }
//         }
//     }

//     return 'Tie'; // It's a tie
// }

// // Example usage:
// const board = [
//     ['X', 'O', 'X'],
//     [' ', 'X', 'O'],
//     ['O', ' ', 'X']
// ];

// const winner = checkWin(board);
// if (winner) {
//     console.log(`The winner is ${winner}!`);
// } else {
//     console.log("It's a tie!");
// }


// // problem 2


// let Array = ["a", "x", "g", "g", "x"];

// console.log(Array)

// let resulte1 = Array.indexOf("x");


// let reslute2 = Array.lastIndexOf("x");

// console.log(` index one Number: ${resulte1} end index tow Number ${reslute2}`);



// problem 3





