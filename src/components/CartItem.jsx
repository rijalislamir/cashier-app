import React, { useState } from "react";

import ModalDeleteCartItem from "./ModalDeleteCartItem";

const CartItem = props => {
    const {
        id,
        title,
        price,
        qty
    } = props

    const [show, setShow] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false)

    return (
        <>
            <div 
                className="cart__item"
                onMouseOver={() => setShowDeleteButton(true)}
                onMouseOut={() => setShowDeleteButton(false)}
            >
                {
                    showDeleteButton && 
                    <div 
                        className="product-list-item__delete"
                        onClick={() => setShow(true)}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                }
                <h3>{title}</h3>
                <div className="cart__item-info">
                    <span>{price}</span>
                    <span> x {qty} pcs</span>
                    <span>{price * qty}</span>
                </div>
            </div>
            <ModalDeleteCartItem
                show={show}
                onClose={() => setShow(false)}
                id={id}
            />
        </>
    )
}

export default CartItem;