import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { cartItemAdded } from '../store/cartSlice'

import ModalDeleteProduct from "./ModalDeleteProduct";

const ProductListItem = props => {
    const {
        id,
        title,
        price
    } = props;
    
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const onClickDelete = e => {
        e.stopPropagation()
        setShow(true)
    }

    return (
        <>
            <div 
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
                        <i className="fa-solid fa-trash-can"></i>
                    </div>
                }
                <h3 className="product-list-item__title">{title}</h3>
                <div className="product-list-item__price">{price}</div>
            </div>
            <ModalDeleteProduct
                show={show}
                onClose={() => setShow(false)}
                id={id}
            />
        </>
    )
}

export default ProductListItem;