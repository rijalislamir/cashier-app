import React from "react";
import { useDispatch } from "react-redux"
import { numpadPressed } from "../store/cartSlice"

const Numpad = () => {
    const dispatch = useDispatch()

    return (
        <div className="numpad">
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "7"}))}>7</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "8"}))}>8</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "9"}))}>9</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "4"}))}>4</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "5"}))}>5</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "6"}))}>6</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "1"}))}>1</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "2"}))}>2</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "3"}))}>3</button>
            <button className="numpad__item" onClick={() => dispatch(numpadPressed({ value: "0"}))}>0</button>
            <button className="numpad__item numpad__item--double-span">OK</button>
        </div>
    );
}

export default Numpad;