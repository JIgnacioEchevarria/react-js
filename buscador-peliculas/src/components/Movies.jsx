// Listar las peliculas. Recibe las peliculas y las lista.
export function ListOfMovies({ movies }) {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

// mostrar aviso si no se encuentran las peliculas
export function NoMoviesResults() {
    return (
        <p>No se encontraron resultados para esta Búsqueda</p>
    )
}


// logica para decidir, si hay peliculas muestra las peliculas y si no
// muestra el aviso de que no hay.
export function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}