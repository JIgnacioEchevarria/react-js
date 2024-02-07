import { useState } from "react";
import { Square } from "./components/Square.jsx";
import {TURNS} from "./constants.js";
import { checkWinner } from "./logic/board.js";
import { checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { Board } from "./components/Board.jsx";

export function App() {
    //Estados

    /* Lo dejo comentado porque no me anda
        //Si la partida tiene guardado un tablero se inicializa ese.
        //En caso de que no haya quedado guardado un tablero se inicializa uno nuevo.
        const [board, setBoard] = useState(() => {
            const boardFromStorage = window.localStorage.getItem('board')
            if (boardFromStorage) {
                return JSON.parse(boardFromStorage)
            } else {
                return Array(9).fill(null)
            }
        });

            //Si la partida tiene el turno guardado se inicializa
            //sino se inicializa de nuevo con el turno para la x
            const [turn, setTurn] = useState(() => {
                const turnFromStorage = window.localStorage.getItem('turn')
                if(turnFromStorage) {
                    return turnFromStorage;
                } else {
                    return TURNS.X;
                }
            });
    */

            
    const [board, setBoard] = useState(Array(9).fill(null));

    const [turn, setTurn] = useState(TURNS.X);

    // null es que no hay ganador, false es que hay un empate.
    const [winner, setWinner] = useState(null);

    //Esta funcion lo que hace es resetear todo
    // El tablero, los turnos y el ganador.
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);

        // No anda ---> resetGameStorage();
    }

    const updateBoard = (index) => {
        //Si ya tiene algo el array en esa posicion
        //no se actualiza.
        if(board[index] || winner) {
            return;
        }

        //Actualiza el tablero
        const newBoard = [...board];//Copia de bord. Nunca modificar los props, hacer copias.
        newBoard[index] = turn; // al tablero en la pos index le coloco el valor de turn => x u o.
        setBoard(newBoard); //Cambio el tablero por el nuevo asi se renderiza.

        //Cambia el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);

        //Guardar la partida
        /*No anda
        saveGameToStorage({
            board: newBoard,
            turn: newTurn
        });*/

        //revisar si hay ganador
        const newWinner = checkWinner(newBoard);
        if(newWinner) {
            setWinner(newWinner);
        } else if(checkEndGame(newBoard)) {
            setWinner(false);
        }
    }

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Empezar de nuevo</button>
            <Board board={board} updateBoard={updateBoard} />
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )
}