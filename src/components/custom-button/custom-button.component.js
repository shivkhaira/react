import React from 'react'
import './custom-button.style.scss'

const CustomButton =({children,isGoogleSign,...otherprops})=>(
<button className={`${isGoogleSign && 'google-sign-in'} custom-button`} {...otherprops}>
{children}
</button>
)

export default CustomButton