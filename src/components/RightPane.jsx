import React from "react";
import ProductListItem from "./ProductListItem";

const RightPane = () => {
    return (
        <section className="product-list">
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <button className="new-product-button">+</button>
        </section>
    );
}

export default RightPane;