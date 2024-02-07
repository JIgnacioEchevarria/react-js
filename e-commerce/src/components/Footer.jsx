import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart.js'
import './Footer.css'

export function Footer () {
    const { filters } = useFilters();
    const { cart } = useCart();

    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                /*
                    <h4>Prueba técnica de react</h4>
                    <span>gurri</span>
                    <h5>Shopping cart con useContext y useReducer</h5>
                */
            }
        </footer>
    )
}