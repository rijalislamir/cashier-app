import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { cartItemAdded } from '../store/cartSlice'
import { setActiveIndex } from '../store/productSlice'

import { motion } from "framer-motion";

const ProductListItem = props => {
    const {
        setShow,
        id,
        index,
        title,
        price
    } = props;
    
    const dispatch = useDispatch()

    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const onClickDelete = e => {
        e.stopPropagation()
        setShow(true)
        dispatch(setActiveIndex({ index }))
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="product-list-item"
            onMouseOver={() => setShowDeleteButton(true)}
            onMouseOut={() => setShowDeleteButton(false)}
            onClick={() => dispatch(cartItemAdded({ id, title, price }))}
        >
            {
                showDeleteButton && 
                <div 
                    className="product-list-item__delete"
                    onClick={onClickDelete}
                >
                    &times;
                </div>
            }
            <h3 className="product-list-item__title">{title}</h3>
            <div className="product-list-item__price">{price.toLocaleString()}</div>
        </motion.div>
    )
}

export default ProductListItem;