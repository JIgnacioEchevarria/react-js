import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    // Recupero los datos al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                //Recupero el fact
                const {fact} = data;
                setFact(fact);
            })
    }, [])

    // Para recuperar la imagen cada vez que hay un fact 
    useEffect(() => {
        //Si no tenemos un fact se hace return
        if(!fact) return

        //Recupero la primer palabra
        const firstWord = fact.split(' ')[0]; //Convierte cadena de txt en array.
                
        // Fetching de imagen de un gato con la primera palabra
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
            // La imagen no aparece porq la API saco la url de la
            // imagen
            const { url } = data;
            setImageUrl(url);
        })
    }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>} {/* si fact tiene texto lo muestra */}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the first word of ${fact}`} />}
        </main>
    )
}