export const getPokemon = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=300&offset=0');
        const info = await res.json();

        const pokemon = info.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const poke = await res.json();

            let types = poke.types.map((type) => type.type.name);

            return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other["official-artwork"].front_default,
                height: poke.height,
                weight: poke.weight,
                types: types
            }
        })

        return pokemon;
    } catch (error) {
        throw new Error('Error when gettin Pokemon');
    }
}