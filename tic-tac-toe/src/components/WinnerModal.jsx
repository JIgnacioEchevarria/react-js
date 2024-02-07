import { Square } from "./Square";

export function WinnerModal({winner, resetGame}) {
    if (winner === null) {
        return null;
    }

    // Si no hay un ganador pone empate, si gana alguien pone gano: 
    const winnerText = winner === false ? 'Empate' : 'Gano:';

    return (
            <section className="winner">
                <div className="text">
                    <h2>{winnerText}</h2>

                    <header className="win">
                        {winner && <Square>{winner}</Square>} 
                    </header> {/* Si hay un ganador pone un cuadrado con una x o una o dependiendo quien gano */}
                    <footer>
                        <button onClick={resetGame}>Empezar de nuevo</button>
                    </footer>
                </div>
            </section>
    )
}