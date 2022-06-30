import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart__item-list">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cart__total-price">
                <h3>Total Price</h3>
            </div>
        </div>
    );
}

export default Cart;