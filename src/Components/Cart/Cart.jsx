import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let totalPrice=0;
    let totalShiping = 0;
    let quantity = 0;
    for(const product of cart){//product is taking the value of iterating
                               // cart which is object
        //  console.log(product);
        
        totalPrice=totalPrice+product.price * product.quantity;
        totalShiping = totalShiping+product.shipping * product.quantity;
        quantity = quantity + product.quantity

    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShiping+tax;
    return (
        <div className='cart-info'>
            <h4>Cart Information</h4>
            <h5>Selected Item : {quantity}</h5>
            <h5>Price : {totalPrice}</h5>
            <h5>Total Shipping :{totalShiping}</h5>
            <h5>Tax : {tax}</h5>
            <h3>Grand Total :{grandTotal}</h3>
        </div>
    );
};

export default Cart;