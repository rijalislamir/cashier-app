import React from "react";
import CartProductListItem from "./CartProductListItem";
import Numpad from "./Numpad";

const Cart = (props) => {
    return (
        <section className="cart">
            <div className="cart__product-list">
                <div className="cart-product-list__body">
                    <CartProductListItem />
                    <CartProductListItem />
                </div>
                <div className="cart-product-list__conclusion">
                    <h3>Total Price</h3>
                </div>
            </div>
            <Numpad />
        </section>
    );
}

export default Cart;