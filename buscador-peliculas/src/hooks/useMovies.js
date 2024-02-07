import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useRef de busqueda anterior para guardar la busqueda.
    const previousSearch = useRef(search);

    // useCallback es lo mismo que useMemo pero para funciones, es lo mismo pero mas
    // sencillo de escribir.
    const getMovies = useCallback(async ({ search }) => {
            // si la busqueda es igual a la busqueda anterior
            // no se hace la llamada a la API de nuevo.
            if(search === previousSearch.current) {
                return
            }
            try {
                setLoading(true);
                setError(null);
                // guardo en previousSearch la busqueda
                previousSearch.current = search;
                // busco las peliculas
                const newMovies = await searchMovies({ search });
                setMovies(newMovies);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
    }, [])

    // useMemo para realizar este calculo de ordenar las peliculas
    // funciona para que solo realize un calculo cuando cambien las dependencias
    // por ejemplo en este caso realizara el calculo solo en caso de que cambie el sort
    // o cambien las peliculas.
    const sortedMovies = useMemo(() => {
        return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}