import React from "react";
import { useDispatch } from 'react-redux'
import { productDeleted } from '../store/productSlice'

import Modal from "./Modal";

const ModalDeleteProduct = props => {
    const {
        show,
        onClose,
        id
    } = props;

    const dispatch = useDispatch()

    return (
        <Modal show={show} onClose={onClose}>
            <div className="modal-header">Delete Product</div>
            <div className="modal-body">
                <p>Are you sure want to delete the product?</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onClose} type="submit">Cancel</button>
                <button className="button danger" onClick={() => dispatch(productDeleted({ id: id }))} type="submit">Delete</button>
            </div>
        </Modal>
    );
}

export default ModalDeleteProduct;