import React, { useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { cartItemDeleted } from '../store/cartSlice'

import Modal from "./Modal";

const ModalDeleteCartItem = props => {
    const {
        show,
        onClose,
        id
    } = props;

    const dispatch = useDispatch()

    const buttonDeleteRef = useRef()

    useEffect(() => {
      if (buttonDeleteRef && buttonDeleteRef.current) buttonDeleteRef.current.focus()
    })

    return (
        <Modal show={show} onClose={onClose}>
            <div className="modal-header">Delete Cart Item</div>
            <div className="modal-body">
                <p>Are you sure want to delete this product item from cart?</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onClose} type="submit">Cancel</button>
                <button
                    className="button danger"
                    onClick={() => dispatch(cartItemDeleted({ id: id }))}
                    type="submit"
                    ref={buttonDeleteRef}
                >
                    Delete
                </button>
            </div>
        </Modal>
    );
}

export default ModalDeleteCartItem;