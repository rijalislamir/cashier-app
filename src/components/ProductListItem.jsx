import React from "react";

const ProductListItem = props => {
    const {
        title,
        price
    } = props;

    return (
        <div className="product-list-item">
            <h3 className="product-list-item__title">{title}</h3>
            <div className="product-list-item__price">{price}</div>
        </div>
    )
}

export default ProductListItem;