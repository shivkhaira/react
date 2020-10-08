import React from 'react'
import './sign.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/signup-component'
const Sign=()=>(
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
)

export default Sign