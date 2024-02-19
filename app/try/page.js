'use client'
import Card from '@/components/card'
import Loader from '@/components/loader'
import { signIn } from 'next-auth/react'
import React from 'react'

const Try = () => {
  return (
    <div>
       <Loader/>
    </div>
  )
}

export default Try