import { useContext } from "react";
import { CartContext } from '../context/cart.jsx';

export function useCart () {
    const cart = useContext(CartContext);

    if(cart === undefined) {
        throw new Error('useCart must be used withing a CartProvider')
    }

    return cart;
}