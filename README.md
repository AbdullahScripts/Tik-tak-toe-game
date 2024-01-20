# Tic Tac Toe Game

Play the Tic Tac Toe game online: [Tic Tac Toe Game](https://abdullahgame.surge.sh)

## Game Functionality

The Tic Tac Toe game is implemented using HTML, CSS, and JavaScript. The game follows the traditional Tic Tac Toe rules, where two players take turns marking an empty cell with their respective symbols ('X' or 'O'). The game ends when one player has three of their symbols in a row, column, or diagonal, or when all cells are filled, resulting in a draw.

### Success Paths

The game checks for a winner based on the following success paths:

```javascript
const successpath = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];


## Game Logic

- Players take turns by clicking on the game buttons.
- The 'X' symbol is displayed for player 1, and the 'O' symbol is displayed for player 2.
- The game checks for a winner after each move.
- If a winner is found, the winner's symbol is displayed, and the game ends.
- If all cells are filled and no winner is found, the game declares a draw.

## Resetting the Game

A "Reset" button is provided to restart the game. Clicking the "Reset" button clears the board and allows players to start a new game.

## How to Play

1. Open the [Tic Tac Toe Game] in your web browser.
2. Click on the buttons to make your moves.
3. The game will indicate the winner or declare a draw.
4. Use the "Reset" button to start a new game.

Feel free to contribute to the code or suggest improvements!

## Author

- [Muhammad Abdullah]


