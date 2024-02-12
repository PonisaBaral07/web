import React from 'react'
import Logo from './logo'
import Link from 'next/link'

const Footer = () => {
  return (
  <footer className="text-gray-600 body-font shadow-md">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

  <Link href="/"><Logo /></Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Investment Recommendation System 
    </p>
    
  </div>
</footer>

  )
}

export default Footer