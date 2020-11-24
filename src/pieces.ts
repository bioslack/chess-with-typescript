import { Draggable, GameElement } from "./game-element.js";

type PieceName = "pawn" | "rook" | "knight" | "bishop" | "king" | "queen";

export abstract class Piece extends GameElement implements Draggable {
  constructor(
    public owner: "black" | "white",
    public name: PieceName,
    public symbol: string,
    public position: string = "a1"
  ) {
    super(document.createElement("div"));
    const img = document.createElement("img");
    img.setAttribute("src", `../assets/${owner}-${name}.svg`);
    img.classList.add("piece");
    this.element.appendChild(img);
    this.element.setAttribute("draggable", "true");
    this.element.classList.add("piece-container");
    this.element.addEventListener(
      "dragstart",
      this.dragStartHandler.bind(this)
    );
    this.element.addEventListener("dragend", this.dragEndHandler.bind(this));
  }

  abstract dragEndHandler(event: DragEvent): void;

  abstract dragStartHandler(event: DragEvent): void;
}

export class Pawn extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "pawn", owner === "white" ? "P" : "p", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.position);
    event.dataTransfer!.effectAllowed = "move";
  }
}

export class Rook extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "rook", owner === "white" ? "R" : "r", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {}
}

export class Knight extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "knight", owner === "white" ? "N" : "n", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {}
}

export class Bishop extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "bishop", owner === "white" ? "B" : "b", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {}
}

export class King extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "king", owner === "white" ? "K" : "k", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {}
}

export class Queen extends Piece {
  constructor(owner: "black" | "white", position?: string) {
    super(owner, "queen", owner === "white" ? "Q" : "q", position);
  }

  dragEndHandler(event: DragEvent) {}

  dragStartHandler(event: DragEvent) {}
}
