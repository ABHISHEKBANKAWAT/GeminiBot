import React from 'react'
import './signinpage.css'
import { SignIn } from '@clerk/clerk-react'

const signinpage = () => {
  return (
    <div className='signinpage'><SignIn path="/sign-in" /></div>
  )
}

export default signinpage