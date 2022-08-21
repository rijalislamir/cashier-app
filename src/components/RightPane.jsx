import React, { useState } from "react";
import { useSelector } from 'react-redux'
import NoProductsFound from "../assets/image/no-products-found.png"

import ProductListItem from "./ProductListItem";
import ModalCreateProduct from "./ModalCreateProduct";
import ModalDeleteProduct from "./ModalDeleteProduct";
import { motion, AnimatePresence } from "framer-motion";

const RightPane = () => {
    const [show, setShow] = useState(false);
    const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState({})
    const keyword = useSelector(state => state.products.keyword).toLowerCase()
    const products = useSelector(state => state.products.list)
        .filter(product => product.name.toLowerCase().includes(keyword))

    return (
        <section className="product-list">
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {products.length
                    ? products.map((product, i) => <ProductListItem key={i} index={i} {...product} setShow={setShowDeleteProductModal} setDeleteProduct={setDeleteProduct} />)
                    : <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="product-list__img-wrapper">
                        <img className="product-list__img" src={NoProductsFound} alt="No products found" />
                    </motion.div>
                }
            </AnimatePresence>

            <button className="new-product-button" onClick={() => setShow(true)}>+</button>

            <ModalCreateProduct 
                show={show}
                onClose={() => setShow(false)}
            />

            <ModalDeleteProduct
                show={showDeleteProductModal}
                onClose={() => setShowDeleteProductModal(false)}
                _id={deleteProduct._id}
                name={deleteProduct.name}
            />
        </section>
    );
}

export default RightPane;