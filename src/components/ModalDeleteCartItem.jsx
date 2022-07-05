import React, { useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { cartItemDeleted, setActiveIndexCartItem } from '../store/cartSlice'

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

    const onClickDelete = id => {
        dispatch(cartItemDeleted({ id }))
        dispatch(setActiveIndexCartItem({ index: null }))
        onClose()
    }
    
    const onCloseDeleteCartItemModal = () => {
        dispatch(setActiveIndexCartItem({ index: null }))
        onClose()
    }

    return (
        <Modal show={show} onClose={onCloseDeleteCartItemModal}>
            <div className="modal-header">Delete Cart Item</div>
            <div className="modal-body">
                <p>Are you sure want to delete this product item from cart?</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onCloseDeleteCartItemModal} type="submit">Cancel</button>
                <button
                    className="button danger"
                    onClick={() => onClickDelete(id)}
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