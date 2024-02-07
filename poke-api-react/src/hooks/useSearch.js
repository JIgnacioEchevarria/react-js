import { useEffect, useState } from 'react';

export function useSearch() {
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        let numbers = ["0","1","2","3","4","5","6","7","8","9"];
        if(numbers.some(num => search.includes(num))) {
            setError('La búsqueda no puede incluir números');
            return
        }

        setError(null);
    }, [search])

    return { search, updateSearch, error }
}