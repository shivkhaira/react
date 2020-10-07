import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import {auth} from '../../firebase/firebase.utils'

const Header=({currentUser})=>(
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
</div>
</div>
)

export default Header