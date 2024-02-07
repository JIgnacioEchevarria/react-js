import { Square } from "./Square"

export function Board({board, updateBoard}) {
    return (
        <section className="game">
            {
                board.map((_, index) => { {/* el _ no se utiliza */}
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >   {/* Como props paso la funcion updateBoard como variable, es decir que paso la funcion no la ejecucion de la misma, no pasar la funcion asi => updateBoard() */}
                            
                            {board[index]} {/* muestro lo que tiene el board en la posicion index */}
                        
                        </Square>
                    )
                })
            }
        </section>
    )
}