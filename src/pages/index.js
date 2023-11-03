import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'
import LineHeader from '@/components/lineHeader/LineHeader'
import CardSection from '@/components/cardSection/CardSection'
import ExplorSection from '@/components/explorSection/ExplorSection'

export default function Home() {
  return (
    <>
        <Navbar />
        <Header/>
      <LineHeader/>
      <CardSection/>
      <ExplorSection/>
    </>
  )
}
