import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setActiveIndexCartItem } from "../store/cartSlice"

const CartItem = props => {
    const {
        id,
        setShow,
        classes,
        index,
        title,
        price,
        qty
    } = props

    const dispatch = useDispatch()

    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const onDeleteCartItem = e => {
        setShow(true)
    }

    return (
        <>
            <div 
                className={classes}
                onMouseOver={() => setShowDeleteButton(true)}
                onMouseOut={() => setShowDeleteButton(false)}
                onClick={() => dispatch(setActiveIndexCartItem({ index }))}
            >
                {
                    showDeleteButton && 
                    <div 
                        className="product-list-item__delete"
                        onClick={onDeleteCartItem}
                    >
                        &times;
                    </div>
                }
                <h3>{title}</h3>
                <div className="cart__item-info">
                    <span>{price.toLocaleString()}</span>
                    <span> x {parseInt(qty).toLocaleString()} pcs</span>
                    <span>{(price * qty).toLocaleString()}</span>
                </div>
            </div>
        </>
    )
}

export default CartItem;