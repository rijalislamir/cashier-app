import React from "react";

import { motion, AnimatePresence } from "framer-motion"

const Modal = props => {
    const {
        show,
        onClose,
        children
    } = props;

    return (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
            {
                show &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="modal"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Modal;