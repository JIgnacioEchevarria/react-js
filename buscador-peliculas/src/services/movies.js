const API_KEY = '4a7321b2';

export const searchMovies = async ({ search }) => {
    if(search === '') {
        return null;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const results = await response.json();

        const movies = results.Search;

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (error) {
        throw new Error('Error searching movies');
    }
}