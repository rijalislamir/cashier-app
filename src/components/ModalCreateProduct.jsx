import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { productAdded } from '../store/productSlice'

import Modal from "./Modal";

const ModalCreateProduct = props => {
    const {
        show,
        onClose,
    } = props;

    const dispatch = useDispatch()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const inputRef = useRef()

    useEffect(() => {
        if (inputRef && inputRef.current && !title) inputRef.current.focus()
    })

    const onChangeTitle = e => {
        setTitle(e.target.value);
    };

    const onChangePrice = e => {
        setPrice(e.target.value);
    };

    const onClickAdd = e => {
        e.preventDefault();

        const id = +new Date();
        dispatch(productAdded({ id, title, price: parseInt(price) }));
        
        setTitle("");
        setPrice("");
        
        onClose();
    };
    
    const onCloseModal = () => {
        setTitle("");
        setPrice("");

        onClose()
    }

    return (
        <Modal show={show} onClose={onCloseModal}>
            <div className="modal-header">Add a New Product</div>
            <div className="modal-body">
                <form id="add-product-form" onSubmit={onClickAdd} autoComplete="off">
                    <label htmlFor="title">Product Title</label>
                    <input
                        className="input"
                        id="title"
                        type="text"
                        onChange={onChangeTitle}
                        value={title}
                        placeholder="Product Title..."
                        ref={inputRef}
                        required
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        className="input"
                        id="price"
                        type="text"
                        onChange={onChangePrice}
                        value={price} 
                        placeholder="Price..."
                        required
                    />
                </form>
            </div>
            <div className="modal-footer">
                <button className="button primary" type="submit" form="add-product-form">Add</button>
            </div>
        </Modal>
    );
}

export default ModalCreateProduct;