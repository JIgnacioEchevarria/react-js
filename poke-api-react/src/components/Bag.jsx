import { useState } from "react"
import '../components/Bag.css'
import { useBag } from '../hooks/useBag.js'

export function Bag () {
    const [visibleBag, setVisibleBag] = useState(false);

    const { bag, removeFromBag } = useBag();

    const toggleBag = () => {
        setVisibleBag(!visibleBag);
    }

    function BagItem ({ id, img, name, types, height, weight, removeFromBag }) {
        return (
            <li className="bagItem">
                <div className="bagItem-image">
                    <img src={img} alt={name} />
                </div>
                <div className="bagItem-info">
                    <p className="bagItem-id">#{id}</p>
                    <h2 className="bagItem-name">{name}</h2>
                </div>
                <button onClick={removeFromBag} className="bagItem-btnDelete">ELIMINAR</button>
            </li>
        )
    }

    return (
        <>
            <svg onClick={toggleBag} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backpack-fill" viewBox="0 0 16 16">
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
            </svg>
            <section className={visibleBag ? 'bag appear' : 'bag'}>
                <h2 className="bagTitle">Inventario Pokemon: Cantidad <span style={{color: 'black', fontWeight: '900'}}>{bag.length}</span></h2>
                <ul>
                    {bag.map(pokemon => (
                        <BagItem 
                            key={pokemon.id}
                            id={pokemon.id}
                            img={pokemon.img}
                            name={pokemon.name}
                            types={pokemon.types}
                            height={pokemon.height}
                            weight={pokemon.weight}
                            removeFromBag={() => removeFromBag(pokemon)}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}