import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'

export function Cart () {
    const cartCheckboxId = useId();

    const { cart, clearCart, addToCart, removeFromCart } = useCart();

    function CartItem({ thumbnail, price, title, quantity, addToCart, removeFromCart }) {
        return (
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={addToCart}>+</button>
                    <button onClick={removeFromCart}>X</button>
                </footer>
            </li>
        )
    }

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            thumbnail={product.thumbnail}
                            price={product.price}
                            title={product.title}
                            quantity={product.quantity}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}