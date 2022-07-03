import React from "react";
import Modal from "./Modal";

const ModalDeleteProduct = props => {
    const {
        show,
        onClose,
        deleteProduct,
        id
    } = props;

    return (
        <Modal show={show} onClose={onClose}>
            <div className="modal-header">Delete Product</div>
            <div className="modal-body">
                <p>Are you sure want to delete the product?</p>
            </div>
            <div className="modal-footer">
                <button className="button primary" onClick={onClose} type="submit">Cancel</button>
                <button className="button danger" onClick={() => deleteProduct(id)} type="submit">Delete</button>
            </div>
        </Modal>
    );
}

export default ModalDeleteProduct;