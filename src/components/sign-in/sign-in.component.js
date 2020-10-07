import React, { useState } from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signinWithGoogle} from '../../firebase/firebase.utils'
const SignIn =()=>
{
    const [email,Setemail]=useState('')
    const [password,Setpassword]=useState('')

    const handle=e=>{
        e.preventDefault();
        console.log("Submit")
       Setemail('')
       Setpassword('')
    }

   

   const handleChange=event=>{
        const {value,name}=event.target
      
        if (name==='email'){
            Setemail(value)
        }
        else{
            Setpassword(value)
        }
    }

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handle}>
                <FormInput label="Email" type="email" name="email" value={email} handleChange={handleChange} required />
              
                <FormInput label="Password" type="password" name="password" value={password} handleChange={handleChange} required />
            <div className='buttons'>
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type='button' onClick={signinWithGoogle} isGoogleSign>Sign In With Google</CustomButton>
            </div>
            </form>
        </div>
    )
}

export default SignIn