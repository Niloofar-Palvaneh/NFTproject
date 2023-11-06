import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'
import LineHeader from '@/components/lineHeader/LineHeader'
import CardSection from '@/components/cardSection/CardSection'
import ExplorSection from '@/components/explorSection/ExplorSection'
import PapularArticlesSection from '@/components/papularArticlesSection/PapularArticlesSection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LineHeader />
      <CardSection />
      <ExplorSection />
      <PapularArticlesSection />
      <Footer/>
    </>
  )
}
