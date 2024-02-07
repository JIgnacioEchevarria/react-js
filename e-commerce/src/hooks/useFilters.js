import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
    // consumo el contexto
    const { filters, setFilters } = useContext(FiltersContext);
  
    // Filtra productos
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === 'all' || product.category === filters.category)
        )
      })
    }
  
    return { filters, filterProducts, setFilters }
  }