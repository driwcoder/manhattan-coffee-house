import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner1'
import Atrativo from '@/components/Atrativo'
import Banner2 from '@/components/Banner2'
import OQueE from '@/components/OQueE'
import Banner3 from '@/components/Banner3'
import Banner4 from '@/components/Banner4'
import Conheca from '@/components/Conheca'
import Banner5 from '@/components/Banner5'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/scrolltotop'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Atrativo />
      <Banner2 />
      <OQueE />
      <Banner4 />
      <Conheca />
      <Banner3 />
      <Banner5 />
      <Footer />
      {/* <ScrollToTop /> */}
    </main>
  )
}
