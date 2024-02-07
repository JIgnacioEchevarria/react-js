import { useBag } from '../hooks/useBag.js'

// Retorna la lista de pokemon
export function ListOfPokemon({ info }) {
    const { bag, addToBag, removeFromBag } = useBag();

    const checkPokemonInBag = pokemon => {
        return bag.some(poke => poke.id === pokemon.id);
    }

    // agrega ceros delante del id segun su cantidad de cifras
    const transformId = (id) => {
        let pokeId = id.toString();
        if(pokeId.length === 1) {
            pokeId = "00" + pokeId;
        } else if(pokeId.length === 2) {
            pokeId = "0" + pokeId;
        }
        return pokeId;
    }

    return (
        <div className="container-pokemons">
            {info.map((poke) => {
                const isPokemonInBag = checkPokemonInBag(poke);

                return (
                    <div className="pokemon" key={poke.id}>
                    <p className="pokemon-id-back">#{transformId(poke.id)}</p>
                    <div className="pokemon-img">
                        <img src={poke.img} alt={poke.name} />
                    </div>
                    <div className="pokemon-info">
                        <div className="pokemon-info-top">
                            <p className="pokemon-id">#{transformId(poke.id)}</p>
                            <h2 className="pokemon-name">{poke.name}</h2>
                        </div>
                        <div className="pokemon-types">
                            {poke.types.map((type, index) => (
                                <p key={index} className={`${type} type`}>{type}</p>
                            ))}
                        </div>
                        <div className="pokemon-stats">
                            <p className="stat">{poke.height}m</p>
                            <p className="stat">{poke.weight}kg</p>
                        </div>
                    </div>
                    <button 
                        style={{background: isPokemonInBag ? 'red' : '#4dbd15'}}

                        onClick={() => {
                            isPokemonInBag 
                                ? removeFromBag(poke)
                                : addToBag(poke)
                        }}
                    >
                        
                        {isPokemonInBag ? 'ELIMINAR' : 'AGREGAR'}
                    
                    </button>
                </div>
                )
            })}
        </div>
    )
}

// en caso de que no haya pokemon se muestra este mensaje
export function NoPokemonResults() {
    return (
        <p>No se encontraron Pokemon para tu búsqueda</p>
    )
}

// aca se decide, si info tiene algo devuelve lo que tiene
// y si no devuelve NoPokemonResults
export function Pokemon({ info }) {
    const hasPokemon = info?.length > 0;

    return (
        hasPokemon
            ? <ListOfPokemon info={info} />
            : <NoPokemonResults />
    )
}