"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
const lit_element_1 = require("lit-element");
const lit_html_1 = require("lit-html");
const general_1 = require("./general");
const game_1 = require("./game");
let TicTacToe = class TicTacToe extends lit_element_1.LitElement {
    constructor() {
        super(...arguments);
        this.game = new game_1.Game();
        this.board = this.game.board;
        this.playerWon = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.game.onBoardChange(board => {
            this.board = [...board];
        });
        this.game.onWon(player => {
            this.playerWon = player;
        });
    }
    static get styles() {
        return [
            general_1.general,
            lit_element_1.css `
        .game {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .board {
          display: grid;
          max-width: 600px;
          grid-template-columns: repeat(3, 200px);
          grid-template-rows: repeat(3, 200px);
          grid-gap: 20px;
        }

        .cell {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          background-color: rebeccapurple;
        }
      `
        ];
    }
    onCellClicked(index) {
        this.game.play(index);
    }
    render() {
        return lit_html_1.html `<main class="game">
      ${this.playerWon !== null
            ? lit_html_1.html `<h1>Congratulations you won player ${this.playerWon}</h1>`
            : lit_html_1.html ``}
      <section class="board">
        ${this.board.map((cell, index) => lit_html_1.html `<div @click="${() => this.onCellClicked(index)}" class="cell">${cell}</div>`)}
      </section>
    </main>`;
    }
};
__decorate([
    lit_element_1.property({ type: Array }),
    __metadata("design:type", Array)
], TicTacToe.prototype, "board", void 0);
__decorate([
    lit_element_1.property({ type: String }),
    __metadata("design:type", Object)
], TicTacToe.prototype, "playerWon", void 0);
TicTacToe = __decorate([
    lit_element_1.customElement('tic-tac-toe')
], TicTacToe);
exports.TicTacToe = TicTacToe;
