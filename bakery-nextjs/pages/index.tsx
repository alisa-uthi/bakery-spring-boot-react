import type { NextPage } from 'next'
import Head from 'next/head'
import BannerSection from '../components/BannerSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alisa Bakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection />
    </div>
  )
}

export default Home
