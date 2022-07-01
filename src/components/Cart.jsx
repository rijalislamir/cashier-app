import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="cart">
            <div className="cart__item-list">
                {cartItems.length
                    ? cartItems.map(item => <CartItem />)
                    : "No Cart Item"
                }
            </div>
            <div className="cart__total-price">
                <h3>Total Price</h3>
            </div>
        </div>
    );
}

export default Cart;