import React from "react";

const Modal = props => {
    const {
        show,
        onClose,
        children
    } = props;

    if (!show) return;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;