import React from 'react'
import './signuppage.css'
import { SignUp } from '@clerk/clerk-react'

const signUpPage = () => {
  return (
    <div className='signuppage'><SignUp path="/sign-up" signUpUrl="/sign-in" /></div>
  )
}

export default signUpPage