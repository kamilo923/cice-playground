"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const range_1 = require("./range");
class Game {
    constructor() {
        this.currentPlayer = Game.INITIAL_PLAYER;
        this.boardChange = (_board) => { };
        this.won = (_player) => { };
        this.board = range_1.range(Game.MAXIMUM_CELLS).map(() => null);
    }
    setBoard(board) {
        this.board = board;
    }
    onBoardChange(callback) {
        this.boardChange = callback;
    }
    play(index) {
        if (this.canPlay(index)) {
            this.board[index] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.boardChange(this.board);
            this.hasAnyPlayerWon();
        }
    }
    hasAnyPlayerWon() {
        const columnStarts = [0, 3, 6];
        columnStarts.forEach(columnStart => {
            if (this.board[columnStart] !== null &&
                this.board[columnStart] === this.board[columnStart + 1] &&
                this.board[columnStart + 1] === this.board[columnStart + 2]) {
                this.won(this.board[columnStart]);
            }
        });
        const rowOffset = 3;
        const rowStarts = [0, 1, 2];
        rowStarts.forEach(rowStart => {
            if (this.board[rowStart] !== null &&
                this.board[rowStart] === this.board[rowStart + rowOffset] &&
                this.board[rowStart + rowOffset] === this.board[rowStart + rowOffset * 2]) {
                this.won(this.board[rowStart]);
            }
        });
    }
    onWon(callback) {
        this.won = callback;
    }
    canPlay(index) {
        return this.board[index] === null;
    }
}
exports.Game = Game;
Game.MAXIMUM_CELLS = 9;
Game.INITIAL_PLAYER = 'X';
