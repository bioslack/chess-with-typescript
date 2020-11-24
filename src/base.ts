import { DragTarget, GameElement } from "./game-element.js";
import { Bishop, King, Knight, Pawn, Piece, Queen, Rook } from "./pieces.js";

const rows = "87654321";
const columns = "abcdefgh";

class BoardPosition extends GameElement implements DragTarget {
  position: string;
  gameState = GameState.getInstance();

  constructor(
    element: HTMLDivElement,
    color: "black" | "white",
    position: string
  ) {
    super(element);
    this.element.setAttribute("draggable", "false");
    this.element.addEventListener("drop", this.dropHandler.bind(this));
    this.element.addEventListener("dragover", this.dragOverHandler.bind(this));
    this.element.addEventListener(
      "dragleave",
      this.dragLeaveHandler.bind(this)
    );
    element.classList.add(`${color}-position`);
    this.position = position;
  }

  dragLeaveHandler(event: DragEvent) {}

  dragOverHandler(event: DragEvent) {
    event.preventDefault();
  }

  dropHandler(event: DragEvent) {
    event.preventDefault();
    const p = event.dataTransfer!.getData("text/plain");
    if (!this.element.hasChildNodes()) {
      const piece = this.gameState.pieces.find(
        (piece) => piece.position === p
      )!;
      piece.position = this.position;
      this.element.innerHTML = "";
      this.element.appendChild(piece.element);
    }
    console.log(this.gameState);
  }
}

export class GameBoard extends GameElement {
  gameState = GameState.getInstance();

  constructor(element: HTMLDivElement) {
    super(element);
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 8; j++) {
        this.gameState.positions.push(
          new BoardPosition(
            document.createElement("div"),
            (i + j) % 2 == 0 ? "white" : "black",
            `${columns[j]}${rows[i]}`
          )
        );
      }

    this.renderBoard();
  }

  renderBoard() {
    for (const position of this.gameState.positions) {
      this.element.appendChild(position.element);
      const piece = this.gameState.pieces.find(
        (p) => p.position === position.position
      );
      if (piece) {
        position.element.appendChild(piece.element);
      }
    }
  }

  loadInitialPosition() {
    this.gameState.pieces = [
      new Pawn("white", "a2"),
      new Pawn("white", "b2"),
      new Pawn("white", "c2"),
      new Pawn("white", "d2"),
      new Pawn("white", "e2"),
      new Pawn("white", "f2"),
      new Pawn("white", "g2"),
      new Pawn("white", "h2"),
      new Rook("white", "a1"),
      new Knight("white", "b1"),
      new Bishop("white", "c1"),
      new Queen("white", "d1"),
      new King("white", "e1"),
      new Bishop("white", "f1"),
      new Knight("white", "g1"),
      new Rook("white", "h1"),
      new Pawn("black", "a7"),
      new Pawn("black", "b7"),
      new Pawn("black", "c7"),
      new Pawn("black", "d7"),
      new Pawn("black", "e7"),
      new Pawn("black", "f7"),
      new Pawn("black", "g7"),
      new Pawn("black", "h7"),
      new Rook("black", "a8"),
      new Knight("black", "b8"),
      new Bishop("black", "c8"),
      new Queen("black", "d8"),
      new King("black", "e8"),
      new Bishop("black", "f8"),
      new Knight("black", "g8"),
      new Rook("black", "h8"),
    ];
    this.renderBoard();
  }
}

export class GameState {
  positions: BoardPosition[] = [];
  pieces: Piece[] = [];
  private static instance?: GameState;
  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameState();
    }
    return this.instance;
  }
}
