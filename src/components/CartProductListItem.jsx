import React from "react";

const CartProductListItem = (props) => {
    return (
        <div className="cart-product-list__item">
            <h3>Product Title</h3>
            <div className="cart-product-list-item__price-info">
                <span>Price</span>
                <span>x Qty</span>
                <span>Total</span>
            </div>
        </div>
    )
}

export default CartProductListItem;