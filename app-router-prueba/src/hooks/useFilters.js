import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterPokemon = (pokemon) => {
        return pokemon.filter(poke => {
            return (
                (filters.type === 'all' || poke.types.includes(filters.type)) &&
                (filters.searchFilter === '' || poke.name.toLowerCase().startsWith(filters.searchFilter.toLowerCase()))
            )
        })
    }

    return { filters, filterPokemon, setFilters }
}