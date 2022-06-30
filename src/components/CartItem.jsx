import React from "react";

const CartItem = (props) => {
    return (
        <div className="cart__item">
            <h3>Product Title</h3>
            <span>Price</span>
            <span> x Qty </span>
            <span>Total</span>
        </div>
    )
}

export default CartItem;