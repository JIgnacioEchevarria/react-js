import { useContext } from "react";
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
    // consumo el contexto
    const { filters, setFilters } = useContext(FiltersContext);

    // filtrar pokemon
    const filterPokemon = (pokemon) => {
        return pokemon.filter(poke => {
            return (
                (filters.category === 'all' || poke.types.includes(filters.category)) &&
                (filters.search === '' || poke.name.toLowerCase().startsWith(filters.search.toLowerCase()))
            )
        })
    }

    return { filters, filterPokemon, setFilters }
}
