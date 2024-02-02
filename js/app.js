let totalPieces;
let piecesType1;
let piecesTpype2;
let collectionDisplay = {}


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