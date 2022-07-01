import React, { useState } from "react";
import Modal from "./Modal";

const ModalCreateProduct = props => {
    const {
        show,
        onClose,
        addProduct
    } = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const onChangeTitle = e => {
        setTitle(e.target.value);
    };

    const onChangePrice = e => {
        setPrice(e.target.value);
    };

    const onClickAdd = e => {
        e.preventDefault();

        const id = +new Date();
        addProduct({ id, title, price });
        
        setTitle("");
        setPrice("");
    };

    return (
        <Modal show={show} onClose={onClose}>
            <div className="modal-header">Add a New Product</div>
            <div className="modal-body">
                <form id="add-product-form" onSubmit={onClickAdd}>
                    <label htmlFor="title">Product Title</label>
                    <input className="input" id="title" type="text" onChange={onChangeTitle} value={title} placeholder="Product Title..." required />

                    <label htmlFor="price">Price</label>
                    <input className="input" id="price" type="text" onChange={onChangePrice} value={price} placeholder="Price..." required />
                </form>
            </div>
            <div className="modal-footer">
                <button className="button primary" type="submit" form="add-product-form">Add</button>
            </div>
        </Modal>
    );
}

export default ModalCreateProduct;