import React from 'react'
import { useSelector } from "react-redux"

import Modal from './Modal'

const ModalFinishCart = props => {
    const {
        show,
        onClose
    } = props

    const cart = useSelector(state => state.cart) || []

    const getCurrentDatetime = () => {
        const currentdate = new Date()
        
        return currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " @ "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds()
    }

    return (
        <Modal show={show} onClose={onClose}>
            <div className='invoice'>
                <div className="invoice__header">
                    Cashier-App<br/>
                    Baker Street, 221-B, London<br/>
                    Tel: (+62) 888 777 999
                </div>
                <hr className='dashed' />
                <div className="invoice__body">
                    <div className="invoice__info">
                        <span>Date: {getCurrentDatetime()}</span>
                    </div>
                    <table className='invoice-body__table'>
                        <tr>
                            <th className='table__item-name'>ITEM NAME</th>
                            <th className='table__price'>PRICE</th>
                            <th className='table__qty'>QTY</th>
                            <th className='table__amount'>AMOUNT</th>
                        </tr>
                        {cart.items.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td className='table__item-name'>{item.title}</td>
                                    <td className='table__price'>{item.price}</td>
                                    <td className='table__qty'>{item.qty}</td>
                                    <td className='table__amount'>{item.qty * item.price}</td>
                                </tr>
                            )
                        })}
                    </table>
                    <hr className='dashed' />
                    <table className='invoice-body__table'>
                        <tr>
                            <td className='table__item-name'></td>
                            <td className='table__price'></td>
                            <td className='table__qty'>Total</td>
                            <td className='table__amount'>{cart.items.reduce((total, item) => total + (item.price * item.qty), 0).toLocaleString()}</td>
                        </tr>
                    </table>
                </div>
                <hr className='dashed' />
                <div className="invoice__footer">
                    Thanks for shopping
                </div>
            </div>
        </Modal>
    )
}

export default ModalFinishCart