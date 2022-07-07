import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setActiveIndexCartItem } from "../store/cartSlice"

import { motion } from "framer-motion";

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

    const activeCartItemIndex = useSelector(state => state.cart.activeIndex)

    const dispatch = useDispatch()

    const [showDeleteButton, setShowDeleteButton] = useState(false)

    const onDeleteCartItem = e => {
        e.stopPropagation()
        if (activeCartItemIndex !== index) dispatch(setActiveIndexCartItem({ index })) 
        setShow(true)
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
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
        </motion.div>
    )
}

export default CartItem;