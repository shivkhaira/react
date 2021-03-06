import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import Cart from '../../components/cart-dropdown/cart-dropdown.component'

const Header=({currentUser,hidden})=>(
<div className="header">
<Link to="/" className="logo-container">
<Logo className="logo" />
</Link>

<div className='options'>
<Link className='option' to='/shop'>SHOP</Link>
<Link className='option' to='/Contact'>CONTACT</Link>
{
    currentUser?
    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
    :
    <Link to='signin'>SIGN IN</Link>
}
<CartIcon />
</div>
{hidden ? null : <Cart />}

</div>
)

const maptoStatetoProps=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})

export default connect(maptoStatetoProps)(Header)