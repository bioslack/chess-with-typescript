import { Game } from "./base.js";

const game = new Game(
  document.getElementById("chessboard")! as HTMLDivElement,
  document.getElementById("dashboard")! as HTMLDivElement
);

game.gameBoard.loadInitialPosition();
