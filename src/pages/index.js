import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'
import LineHeader from '@/components/lineHeader/LineHeader'
import CardSection from '@/components/cardSection/CardSection'

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
        <Header/>
      </div>
      <LineHeader/>
      <CardSection/>
    </>
  )
}
