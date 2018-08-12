'use strict'
/* ===== required files ===== */
const store = require('../store.js')
/* tic tac toe user interface
set initial conditions at game start
player x goes first and the gameBoard is an array of nine
player turn: click grid, check api, if valid update api, if api updated update
game board, check win conditions, if game continues change turn
check for win conditions at the end of each turn
valid move
invalidMove
pull array using array indexes
*/
let current = {
  player: 'X',
  changePlayer: function () {
    if (this.player == 'X') {
      this.player = 'O'
    } else if (this.player == 'O')
      this.player = 'X'
  },
  over: false,
  endGame: function () {
    this.over = true
  },
  winner: undefined
}
//
let gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
undefined]
//
const updateBoard = function (i, player) {
  store.game.cells[i] = player
}
//
let isDefined = function (x) {
  if (x === undefined) {
  return false
} else {
  return true
  }
}
//
let winConditions = function () {
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') || (store.game.cells[0] ==='O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') || (store.game.cells[0] ==='O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') || (store.game.cells[3] ==='O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') || (store.game.cells[6] ==='O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') || (store.game.cells[0] ==='O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') || (store.game.cells[1] ==='O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') || (store.game.cells[2] ==='O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O')) {
current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') || (store.game.cells[0] ==='O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O')) {
current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') || (store.game.cells[2] ==='O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if (store.game.cells[0] !== undefined && store.game.cells[1] !== undefined && store.game.cells[2] !== undefined && store.game.cells[3] !== undefined && store.game.cells[4] !== undefined &&
  store.game.cells[5] !== undefined && store.game.cells[6] !== undefined && store.game.cells[7] !== undefined && store.game.cells[8] !== undefined && store.game.over === false) {
  current.winner = 'you drew'
  current.endGame()
  }
}
//
module.exports = {
  gameBoard,
  updateBoard,
  current,
  winConditions
}