import { GameElement } from "./game-element.js";
export class Piece extends GameElement {
    constructor(owner, name, symbol, position = "a1") {
        super(document.createElement("div"));
        this.owner = owner;
        this.name = name;
        this.symbol = symbol;
        this.position = position;
        const img = document.createElement("img");
        img.setAttribute("src", `../assets/${owner}-${name}.svg`);
        img.classList.add("piece");
        this.element.appendChild(img);
        this.element.setAttribute("draggable", "true");
        this.element.classList.add("piece-container");
        this.element.addEventListener("dragstart", this.dragStartHandler.bind(this));
        this.element.addEventListener("dragend", this.dragEndHandler.bind(this));
    }
    dragStartHandler(event) {
        event.dataTransfer.setData("text/plain", this.position);
        event.dataTransfer.effectAllowed = "move";
    }
}
export class Pawn extends Piece {
    constructor(owner, position) {
        super(owner, "pawn", owner === "white" ? "P" : "p", position);
    }
    dragEndHandler(event) { }
}
export class Rook extends Piece {
    constructor(owner, position) {
        super(owner, "rook", owner === "white" ? "R" : "r", position);
    }
    dragEndHandler(event) { }
}
export class Knight extends Piece {
    constructor(owner, position) {
        super(owner, "knight", owner === "white" ? "N" : "n", position);
    }
    dragEndHandler(event) { }
}
export class Bishop extends Piece {
    constructor(owner, position) {
        super(owner, "bishop", owner === "white" ? "B" : "b", position);
    }
    dragEndHandler(event) { }
}
export class King extends Piece {
    constructor(owner, position) {
        super(owner, "king", owner === "white" ? "K" : "k", position);
    }
    dragEndHandler(event) { }
}
export class Queen extends Piece {
    constructor(owner, position) {
        super(owner, "queen", owner === "white" ? "Q" : "q", position);
    }
    dragEndHandler(event) { }
}
//# sourceMappingURL=pieces.js.map