import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About id ="about"/>
      <Contact id = "contact"/>
      <Footer/>
    </div>
  )
}
