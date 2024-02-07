export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
        updateBoard(index); // llamo a updateBoard y le paso el index del cuadrado.
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}