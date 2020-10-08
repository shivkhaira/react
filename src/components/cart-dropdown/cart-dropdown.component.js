import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import './cart-dropdown.style.scss'

const Cart=()=>(
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)


export default Cart