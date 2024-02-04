document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = [];
    let selectedPiece = null;

    // Function to create a piece element
    function createPiece() {
        const piece = document.createElement("div");
        piece.classList.add("piece");
        piece.addEventListener("click", handlePieceClick);
        return piece;
    }

    // Create the checkers board
    for (let i = 0; i < 8; i++) {
        cells[i] = [];
        for (let j = 0; j < 8; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add((i + j) % 2 === 0 ? "white" : "black");

            if ((i + j) % 2 === 0) {
                const piece = createPiece();
                cell.appendChild(piece);
                cells[i][j] = { piece, isKing: false };
            } else {
                cells[i][j] = { piece: null, isKing: false };
            }

            cell.addEventListener("click", () => handleCellClick(i, j));
            board.appendChild(cell);
        }
    }

    // Function to handle piece click
    function handlePieceClick(event) {
        const clickedPiece = event.target;
        if (selectedPiece === clickedPiece) {
            selectedPiece.classList.remove("selected");
            selectedPiece = null;
        } else {
            if (selectedPiece) {
                selectedPiece.classList.remove("selected");
            }
            selectedPiece = clickedPiece;
            selectedPiece.classList.add("selected");
        }
    }

    // Function to handle cell click
    function handleCellClick(row, col) {
        if (selectedPiece) {
            const selectedCell = getCellByPiece(selectedPiece);
            // Add your logic for valid moves and capturing here
            if (isValidMove(selectedCell, { row, col })) {
                movePiece(selectedCell, { row, col });
                // Add logic for capturing if applicable
                // Check for game over conditions or king promotion
            }
            selectedPiece.classList.remove("selected");
            selectedPiece = null;
        }
    }

    // Function to get the cell coordinates of a piece
    function getCellByPiece(piece) {
        for (let i = 0; i < cells.length; i++) {
            for (let j = 0; j < cells[i].length; j++) {
                if (cells[i][j].piece === piece) {
                    return { row: i, col: j };
                }
            }
        }
        return null;
    }

    // Function to check if the move is valid
    function isValidMove(from, to) {
        // Add your logic to check if the move is valid
        // For example, check if the destination cell is empty
        // and the move direction is correct
        return true;
    }

    // Function to move a piece
    function movePiece(from, to) {
        const { piece, isKing } = cells[from.row][from.col];
        cells[from.row][from.col].piece = null;
        cells[to.row][to.col].piece = piece;

        if (isKing) {
            // Add logic for king movement if applicable
        }

        // Update the UI to reflect the move
        board.children[from.row * 8 + from.col].removeChild(piece);
        board.children[to.row * 8 + to.col].appendChild(piece);
    }
});

/*
let totalPieces = 24
const piecesType1 = {
    color: "red",
    total: 12
}
let piecesType2 = {
    color: "black",
    total: 12
}
const types = ["red" , "black"]
let collectionDisplay = {}


const redSquareEl = document.getElementById("red")
const blackSquareEls = document.getElementById("black")

const players ={
    constructor(name, pieceCount, pieceType, currentPiece, collection){
        this.name = name;
        this.pieceCount = pieceCount
        this.pieceType = pieceType
        this.currentPiece = null
        this.collection = 0

    }


    //select =function() {} will alert an event listener on any square containing a piece if that piece or square is clicke at that time... initially just blocking its display... waiting to see if 
    //one of two eventlisteners are triggered next either the same square clicked again or a new ; vacant square... if the square is new it will check to see if one square or two were jumped... only allowing it if a type other than the players piecesType stands in between... derendering the jumped piece and increasing the players collection value by one.... then it will ask if you wssant to end turn... 
    
    //saying yes const endTurn = function(playerTurn){ends that players turn switches players updates the collection display and renders the board "flipped" 180deg ... maybe}  
    
    //if you say no to the prompt... i want it it to supply 15 sec to make another valid move or it will "end turn"
}
*/