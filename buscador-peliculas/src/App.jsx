import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';

function App() {
  // estado para ordenar las peliculas
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  // metodo debounce para dar parates de 500 milisegundos entre cada llamada.
  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  }

  // cuando cambia el input checkbox sort cambia de valor
  const handleSort = () => {
    setSort(!sort);
  }

  // metodo para cuando va cambiando el input mientras escribimos en el
  const handleChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
    // se llama a este metodo debounce para que no se realizen llamadas continuas mientras
    // escribimos
    debouncedGetMovies(newSearch);
  }

  useEffect(() => {
    console.log('new getMovies received')
  }, [getMovies])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder="Avengers, Star Wars, The Matrix..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
