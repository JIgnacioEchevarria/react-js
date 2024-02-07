// Logica del tablero
import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if(
            boardToCheck[a] && // 0 -> hay algo
            boardToCheck[a] === boardToCheck[b] && // si a es igual a b
            boardToCheck[a] === boardToCheck[c] // si a es igual a c
        ) {
            return boardToCheck[a]; // devuelve x u o, y ya sabriamos el ganador.
        }
    }
    // si no hay ganador
    return null;
}

export const checkEndGame = (boardToCheck) => {
    // checkeamos si en todas las posiciones del tablero 
    // hay algo que es distinto de null
    return boardToCheck.every((square) => square !== null);
}