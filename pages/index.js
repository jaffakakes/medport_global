import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
  <Navbar/>
  <Hero/>
  <Services/>
</div>
  )
}
