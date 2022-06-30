import React from "react";
import Cart from "./Cart";
import Numpad from "./Numpad";

const LeftPane = (props) => {
    return (
        <section className="left-pane">
            <Cart />
            <Numpad />
        </section>
    );
}

export default LeftPane;