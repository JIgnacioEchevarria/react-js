import { Pokemon } from '../components/Pokemon.jsx';
import { usePokemon } from '../hooks/usePokemon.js'
import { Link } from 'react-router-dom';
import { useFilters } from '../hooks/useFilters.js'

export function HomePage() {
    const { info, loading } = usePokemon();
    const { filterPokemon, filters } = useFilters();

    const infoFiltered = filterPokemon(info);

    const hasPokemon = infoFiltered?.length > 0;
  
    return (
      <main>
          {loading 
          ? <p className='warning-loading'>Cargando...</p> 
          : <div className="container-pokemon">
              {hasPokemon
                ? (
                infoFiltered.map((poke) => (
                  <Link key={poke.id} to={`/pokemon/${poke.id}`} state={poke}>
                    <Pokemon info={poke} />
                  </Link>
                ))
              ) : (
                <p className='noPokemon-alert'>¡Ups! Parece que no se encontró ningún Pokémon</p>
              )}
            
            </div>
          }
      </main>
    )
}
