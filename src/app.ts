import { GameBoard } from "./base.js";

const gameBoard = new GameBoard(
  document.getElementById("chessboard")! as HTMLDivElement
);
gameBoard.loadInitialPosition();
