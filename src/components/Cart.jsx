import React, { useState} from "react";
import { useSelector, useDispatch} from 'react-redux'

import NoShoppingCart from "../assets/image/no-shopping-cart.png"
import CartItem from "./CartItem";
import ModalDeleteCartItem from "./ModalDeleteCartItem";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
    const [showDeleteCartItemModal, setShowDeleteCartItemModal] = useState(false)
    const cartItems = useSelector(state => state.cart.items)
    const activeIndex = useSelector(state => state.cart.activeIndex)
    const activeCartItem = cartItems[activeIndex] || {}

    return (
        <div className="cart">
            <div className="cart__item-list">
                <AnimatePresence initial={false} exitBeforeEnter={true} >
                {cartItems.length
                    ? cartItems.map((item, i) => {
                        return (
                            <CartItem
                                setShow={setShowDeleteCartItemModal}
                                classes={activeIndex === i? "cart__item cart__item--selected" : "cart__item"}
                                key={item.id}
                                index={i}
                                {...item}
                            />
                        )
                    })
                    : <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        src={NoShoppingCart} className="cart__img" alt="No cart item" />
                }
                </AnimatePresence>
            </div>
            <ModalDeleteCartItem
                title={activeCartItem.title}
                show={showDeleteCartItemModal}
                onClose={() => setShowDeleteCartItemModal(false)}
                id={activeCartItem.id}
            />
            <div className="cart__total-price">
                <div>Total: </div>
                <div>{cartItems.reduce((total, item) => total + (item.price * item.qty), 0).toLocaleString()}</div>
            </div>
        </div>
    );
}

export default Cart;