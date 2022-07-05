import React, { useState } from "react";
import { useSelector } from 'react-redux'
import NoProductsFound from "../assets/image/no-products-found.png"

import ProductListItem from "./ProductListItem";
import ModalCreateProduct from "./ModalCreateProduct";
import ModalDeleteProduct from "./ModalDeleteProduct";

const RightPane = () => {
    const [show, setShow] = useState(false);
    const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
    const activeIndex = useSelector(state => state.products.activeIndex)
    const keyword = useSelector(state => state.products.keyword)
    const products = useSelector(state => state.products.list)
        .filter(product => product.title.toLowerCase().includes(keyword))
    const activeProduct = products[activeIndex] || {}

    return (
        <section className="product-list">
            {products.length
                ? products.map((product, i) => <ProductListItem key={product.id} index={i} {...product} setShow={setShowDeleteProductModal} />)
                : <div className="product-list__img-wrapper"><img className="product-list__img" src={NoProductsFound} alt="No products found" /></div>
            }
            <button className="new-product-button" onClick={() => setShow(true)}>+</button>
            <ModalCreateProduct 
                show={show}
                onClose={() => setShow(false)}
            />
            <ModalDeleteProduct
                show={showDeleteProductModal}
                onClose={() => setShowDeleteProductModal(false)}
                title={activeProduct.title}
                id={activeProduct.id}
            />
        </section>
    );
}

export default RightPane;