import { useEffect, useState } from "react";
import { getPokemon } from '../services/pokemon';

export function usePokemon() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const getPokemonInfo = async () => {
          try {
            const dataPokemon = await getPokemon();

            setInfo(await Promise.all(dataPokemon));
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }

        getPokemonInfo();
      }, [])

      return { info , loading };
}