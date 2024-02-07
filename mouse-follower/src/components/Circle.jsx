export function Circle({position, className}) {
    return (
        <>
            <div className={className} style={{
                left: -20,
                top: -20,
                transform: `translate(${position.x}px, ${position.y}px)`
            }} />
        </>
    )
}