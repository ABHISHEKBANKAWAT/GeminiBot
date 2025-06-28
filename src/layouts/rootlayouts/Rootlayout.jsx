import React from 'react'
import './rootlayout.css'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const Rootlayout = () => {
  return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <div className='rootlayout'>
        <header>
            <Link to="/" className='logo'>
                <img src="/logo.png" alt="logo" />
                <span>Chat</span>
            </Link>
            <div className="user">
      <SignedIn>
        <UserButton />
      </SignedIn>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
        </ClerkProvider>
  )
}

export default Rootlayout