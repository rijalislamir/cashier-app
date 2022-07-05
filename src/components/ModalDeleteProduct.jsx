import React, { useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { cartItemDeleted } from '../store/cartSlice'
import { productDeleted, setActiveIndex } from '../store/productSlice'

import Modal from "./Modal";

const ModalDeleteProduct = props => {
    const {
        show,
        title,
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
        dispatch(productDeleted({ id }))
        dispatch(setActiveIndex({ index: null }))
        onClose()
    }

    const onCloseDeleteProductModal = () => {
        dispatch(setActiveIndex({ index: null }))
        onClose()
    }

    return (
        <Modal show={show} onClose={onCloseDeleteProductModal}>
            <div className="modal-header">Delete Product</div>
            <div className="modal-body">
                <p>Are you sure want to delete <b>{title}</b>? If any item in the cart, it will be deleted too.</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onCloseDeleteProductModal} type="submit">Cancel</button>
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

export default ModalDeleteProduct;