import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart.js'

// 1. crear contexto
export const CartContext = createContext();

function useCartReducer () {
    // dispatch se encarga de enviar las acciones a reducer
    // al useReducer se le pasa el reducer y el estado inicial
    const [state, dispatch] =  useReducer(cartReducer, cartInitialState);

    // hacemos un dispatch pasando el tipo(accion) y el payload(producto)
    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
}

// 2. crear provider
export function CartProvider ({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

    return (
        <CartContext.Provider value={{
            cart: state, addToCart, removeFromCart, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
} 