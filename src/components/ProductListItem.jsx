import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { cartItemAdded } from '../store/cartSlice'

import { motion } from "framer-motion";

const ProductListItem = props => {
    const {
        setShow,
        _id,
        name,
        price,
        setDeleteProduct
    } = props;
    
    const dispatch = useDispatch()

    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const onClickDelete = e => {
        e.stopPropagation()
        setShow(true)
        setDeleteProduct({ _id, name })        
    }

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="product-list-item"
            onMouseOver={() => setShowDeleteButton(true)}
            onMouseOut={() => setShowDeleteButton(false)}
            onClick={() => dispatch(cartItemAdded({ _id, name, price }))}
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
            <h3 className="product-list-item__name">{name}</h3>
            <div className="product-list-item__price">{price.toLocaleString()}</div>
        </motion.div>
    )
}

export default ProductListItem;