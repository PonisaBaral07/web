'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Try = () => {
  return (
    <div>
        <button onClick={signIn}>login</button>
    </div>
  )
}

export default Try