import React from 'react'
import './custom-button.style.scss'

const CustomButton =({children,isGoogleSign,inverted,...otherprops})=>(
<button className={`${isGoogleSign ? 'google-sign-in':''} ${inverted && 'inverted'} custom-button`} {...otherprops}>
{children}
</button>
)

export default CustomButton