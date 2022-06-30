import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
    return (
        <section className="product-list">
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
            <ProductListItem />
        </section>
    );
}

export default ProductList;