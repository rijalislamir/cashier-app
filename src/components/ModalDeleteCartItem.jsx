import React from "react";
import { useDispatch } from 'react-redux'
import { cartItemDeleted } from '../store/cartItemSlice'

import Modal from "./Modal";

const ModalDeleteCartItem = props => {
    const {
        show,
        onClose,
        id
    } = props;

    const dispatch = useDispatch()

    return (
        <Modal show={show} onClose={onClose}>
            <div className="modal-header">Delete Cart Item</div>
            <div className="modal-body">
                <p>Are you sure want to delete this product item from cart?</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onClose} type="submit">Cancel</button>
                <button className="button danger" onClick={() => dispatch(cartItemDeleted({ id: id }))} type="submit">Delete</button>
            </div>
        </Modal>
    );
}

export default ModalDeleteCartItem;