import React, { useState } from "react";
import { useSelector } from 'react-redux'

import ProductListItem from "./ProductListItem";
import ModalCreateProduct from "./ModalCreateProduct";

const RightPane = () => {
    const [show, setShow] = useState(false);
    const products = useSelector(state => state.products.list)
    const keyword = useSelector(state => state.products.keyword)

    return (
        <section className="product-list">
            {products.length
                ? products
                    .filter(product => product.title.toLowerCase().includes(keyword))
                    .map(product => <ProductListItem key={product.id} {...product} />)
                : "No Product Item"
            }
            <button className="new-product-button" onClick={() => setShow(true)}>+</button>
            <ModalCreateProduct 
                show={show}
                onClose={() => setShow(false)}
            />
        </section>
    );
}

export default RightPane;