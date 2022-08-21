import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { numpadPressed } from "../store/cartSlice"

import ModalFinishCart from "./ModalFinishCart";

const Numpad = () => {
    const [show, setShow] = useState(false)
    const activeCartItem = useSelector(state => state.cart.active)
    const dispatch = useDispatch()

    const onClickNumpad = value => {
        if (activeCartItem !== null) {
            dispatch(numpadPressed({ value }))
        }
    }

    return (
        <>
            <div className="numpad">
                <button className="numpad__item" onClick={() => onClickNumpad("7")}>7</button>
                <button className="numpad__item" onClick={() => onClickNumpad("8")}>8</button>
                <button className="numpad__item" onClick={() => onClickNumpad("9")}>9</button>
                <button className="numpad__item" onClick={() => onClickNumpad("4")}>4</button>
                <button className="numpad__item" onClick={() => onClickNumpad("5")}>5</button>
                <button className="numpad__item" onClick={() => onClickNumpad("6")}>6</button>
                <button className="numpad__item" onClick={() => onClickNumpad("1")}>1</button>
                <button className="numpad__item" onClick={() => onClickNumpad("2")}>2</button>
                <button className="numpad__item" onClick={() => onClickNumpad("3")}>3</button>
                <button className="numpad__item" onClick={() => onClickNumpad("DEL")}><i className="fa-solid fa-delete-left"></i></button>
                <button className="numpad__item" onClick={() => onClickNumpad("0")}>0</button>
                <button className="numpad__item" onClick={() => setShow(true)}><i className="fa-solid fa-circle-chevron-right"></i></button>
            </div>
            <ModalFinishCart show={show} onClose={() => setShow(false)} />
        </>
    );
}

export default Numpad;