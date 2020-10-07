import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
import {ReactComponent as Logo} from '../../assests/crown.svg'

const Header=()=>(
<div className="header">
<Link to="/" className="logo-container">
<Logo className="logo" />
</Link>

<div className='options'>
<Link class='option' to='/shop'>Shop</Link>
<Link class='option' to='/Contact'>Contact</Link>
</div>
</div>
)

export default Header