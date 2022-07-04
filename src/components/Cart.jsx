import React from "react";
import { useSelector } from 'react-redux'

import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const activeCartItems = useSelector(state => state.cart.active)

    return (
        <div className="cart">
            <div className="cart__item-list">
                {cartItems.length
                    ? cartItems.map((item, i) => {
                        return (
                            <CartItem
                                classes={activeCartItems === i? "cart__item cart__item--selected" : "cart__item"}
                                key={item.id}
                                index={i}
                                {...item}
                            />
                        )
                    })
                    : "No Cart Item"
                }
            </div>
            <div className="cart__total-price">
                <div>Total: </div>
                <div>{cartItems.reduce((total, item) => total + (item.price * item.qty), 0)}</div>
            </div>
        </div>
    );
}

export default Cart;