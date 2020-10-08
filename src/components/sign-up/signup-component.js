import React, { useState } from 'react'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp=()=>{
    const [displayName,SetdisplayName]=useState('')
    const [email,Setemail]=useState('')
    const [password,Setpassword]=useState('')
    const [confirmpassword,Setconfirmpassword]=useState('')

    const handleSubmit=async e=>
    {   e.preventDefault();
       
        
        if(password!==confirmpassword)
        {
            alert("Passwords don't match")
            return
        }

        try
        {
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            SetdisplayName('')
            Setemail('')
            Setpassword('')
            Setconfirmpassword('')
        }
        catch(error)
        {
            console.error(error)
        }
    }

    const handleChange=event=>{
        const {name,value}=event.target
        if (name==='displayName')
        {
            SetdisplayName(value)
        }
        else if(name==='email')
        {
            Setemail(value)
        }
        else if(name==='password')
        {
            Setpassword(value)
        }
        else if(name==='confirmpassword')
        {
            Setconfirmpassword(value)
        }
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' onChange={handleChange} label="Username" name='displayName' value={displayName} required />
                <FormInput type='email' onChange={handleChange} label="Email" name='email' value={email} required />
                <FormInput type='password' onChange={handleChange} label="Password" name='password' value={password} required />
                <FormInput type='password' onChange={handleChange} label="Confirm Password" name='confirmpassword' value={confirmpassword} required />
                <CustomButton type='submit'>Sign UP</CustomButton>
            </form>
        </div>
    )

}

export default SignUp