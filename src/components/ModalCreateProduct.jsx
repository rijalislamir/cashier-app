import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { createProduct } from '../store/productSlice'

import Modal from "./Modal";

const ModalCreateProduct = props => {
    const {
        show,
        onClose,
    } = props;

    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const inputRef = useRef()

    useEffect(() => {
        if (inputRef && inputRef.current && !name) inputRef.current.focus()
    })

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangePrice = e => {
        setPrice(e.target.value);
    };

    const onClickAdd = e => {
        e.preventDefault();

        dispatch(createProduct({ name, price: parseInt(price) }))
        
        setName("");
        setPrice("");
        
        onClose();
    };
    
    const onCloseModal = () => {
        setName("");
        setPrice("");

        onClose()
    }

    return (
        <Modal show={show} onClose={onCloseModal}>
            <div className="modal-header">Add a New Product</div>
            <div className="modal-body">
                <form id="add-product-form" onSubmit={onClickAdd} autoComplete="off">
                    <label htmlFor="name">Product Name</label>
                    <input
                        className="input"
                        id="name"
                        type="text"
                        onChange={onChangeName}
                        value={name}
                        placeholder="Product Name..."
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