import { useEffect, useState, useRef } from 'react';

export function useSearch() {
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      // si el input es la primera vez que lo utiliza el usuario
      // no muestra error de que esta vacio.
      if(isFirstInput.current) {
        isFirstInput.current = search === '';
        return
      }
  
      if(search === '') {
        setError('No se puede buscar una película vacía');
        return
      }
  
      if(search.length < 3) {
        setError('La busqueda debe tener al menos 3 caracteres');
        return
      }
  
      setError(null);
    }, [search])
  
    return { search, updateSearch, error }
  }