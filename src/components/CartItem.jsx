import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { activeCartItemSelected } from "../store/cartSlice"

import ModalDeleteCartItem from "./ModalDeleteCartItem";

const CartItem = props => {
    const {
        id,
        classes,
        index,
        title,
        price,
        qty
    } = props

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const onDeleteCartItem = e => {
        e.stopPropagation()
        setShow(true)
    }

    return (
        <>
            <div 
                className={classes}
                onMouseOver={() => setShowDeleteButton(true)}
                onMouseOut={() => setShowDeleteButton(false)}
                onClick={() => dispatch(activeCartItemSelected({ index }))}
            >
                {
                    showDeleteButton && 
                    <div 
                        className="product-list-item__delete"
                        onClick={onDeleteCartItem}
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                }
                <h3>{title}</h3>
                <div className="cart__item-info">
                    <span>{price.toLocaleString()}</span>
                    <span> x {parseInt(qty).toLocaleString()} pcs</span>
                    <span>{(price * qty).toLocaleString()}</span>
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