import React, { useState } from "react";
import ProductListItem from "./ProductListItem";
import ModalCreateProduct from "./ModalCreateProduct";

const RightPane = () => {
    const [show, setShow] = useState(false);
    const [productItems, setProductItems] = useState([]);

    const addProduct = product => {
        setProductItems( prev => [...prev, product]);
    };

    const deleteProduct = id => {
        const products = productItems.filter(product => product.id !== id);

        setProductItems(products);
    };

    return (
        <section className="product-list">
            {productItems.length
                ? productItems.map(product => {
                    return (
                        <ProductListItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            deleteProduct={deleteProduct}
                        />
                    );
                })
                : "No Product Item"
            }
            <button className="new-product-button" onClick={() => setShow(true)}>+</button>
            <ModalCreateProduct 
                show={show}
                onClose={() => setShow(false)}
                addProduct={addProduct}
            />
        </section>
    );
}

export default RightPane;