import React from 'react'
import { useEffect } from 'react';
import './Dashboardlayout.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import ChatList from '../../components/chatlist/Chatlist';


const Dashboardlayout = () => {
const {userId, isLoaded} = useAuth()
const navigate = useNavigate()

  useEffect(() => {
    if(isLoaded && !userId) {
      navigate('/sign-in')
    }
  }, [isLoaded, userId, navigate])

  if(!isLoaded || !userId) {
    return null
  }
    return (
    <div className='dashboardlayout'>
        <div className='menu'><ChatList/></div>
            <div className='content'>
                <Outlet />
        </div>
    </div>
  )
}

export default Dashboardlayout