import React from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const Body = (props) => {
    return (
        <main className="body">
            <Cart />
            <ProductList />
        </main>
    );
}

export default Body;