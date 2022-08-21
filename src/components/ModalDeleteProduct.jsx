import React, { useRef, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { cartItemDeleted } from '../store/cartSlice'
import { deleteProduct } from '../store/productSlice'

import Modal from "./Modal"

const ModalDeleteProduct = props => {
    const {
        show,
        onClose,
        _id,
        name
    } = props

    const dispatch = useDispatch()
    
    const buttonDeleteRef = useRef()

    useEffect(() => {
        if (buttonDeleteRef && buttonDeleteRef.current) buttonDeleteRef.current.focus()
    })

    const onClickDelete = _id => {
        dispatch(deleteProduct({ _id }))
        dispatch(cartItemDeleted({ _id }))

        onClose()
    }

    return (
        <Modal show={show} onClose={() => onClose()}>
            <div className="modal-header">Delete Product</div>
            <div className="modal-body">
                <p>Are you sure want to delete <b>{name}</b>? If any item in the cart, it will be deleted too.</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={() => onClose()} type="submit">Cancel</button>
                <button
                    className="button danger"
                    onClick={() => onClickDelete(_id)}
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