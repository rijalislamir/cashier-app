import React from "react";

const CartItem = props => {
    const {
        title,
        price,
        qty
    } = props

    return (
        <div className="cart__item">
            <h3>{title}</h3>
            <div className="cart__item-info">
                <span>{price}</span>
                <span> x {qty} </span>
                <span>{price * qty}</span>
            </div>
        </div>
    )
}

export default CartItem;