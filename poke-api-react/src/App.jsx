import { Pokemon } from './components/Pokemon';
import './App.css'
import { usePokemon } from './hooks/usePokemon';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { Bag } from './components/Bag';
import { BagProvider } from './context/bag';

function App() {
  // recupero la informacion de los pokemon.
  const { info, loading } = usePokemon();

  const { filterPokemon } = useFilters();

  const infoFiltered = filterPokemon(info);
  
  return (
    <BagProvider>
      <div className='page'>
        <Header />
        <Bag />
        <main>
          {
            loading ? 'Cargando...' : <Pokemon info={infoFiltered} />
          }
        </main>
      </div>
    </BagProvider>
  )
}

export default App
