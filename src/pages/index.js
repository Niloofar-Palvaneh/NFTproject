import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Header/>
      </div>
    </>
  )
}
