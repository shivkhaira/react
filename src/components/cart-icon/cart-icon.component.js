import React from 'react'
import './cat-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon=({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)


const mapDispatchtoprops=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchtoprops)(CartIcon)