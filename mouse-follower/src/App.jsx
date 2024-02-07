import { useEffect, useState } from "react"
import { Circle } from "./components/Circle";

export default function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [positionObj, setPositionObj] = useState({x: 0, y: 0});

  useEffect(() => {
    console.log("Holaa", {enabled});
    const handleMove = (e) => {
      const {clientX, clientY} = e; // Se captura la posicion del mouse.
      setPosition({x: clientX, y: clientY}); // se le cambia la posicion al puntero por las del mouse.
    }
    if(enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    // se limpia
    // Cuando se clickea en desactivar puntero se elimina la funcion handlemove.
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled])

  useEffect(() => {
    let randomPosition;
    let intervalObj;

    // Posicion donde aparece.
    if(enabled) {
      randomPosition = {
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight
      }
      setPositionObj(randomPosition);
    }

    //Intervalo para cambiar de posicion
    intervalObj = setInterval(() => {
      randomPosition = {
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight
      }
      setPositionObj(randomPosition);
    }, 2000);

    return () => {
      clearInterval(intervalObj);
    }
  }, [enabled])

  let classNameObj = enabled ? 'circle' : 'circle obj';

  return (
    <>
      <Circle className="circle" position={position}/>
      <Circle className={classNameObj} position={positionObj}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}