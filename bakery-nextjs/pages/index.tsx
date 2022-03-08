import Head from 'next/head'
import BannerSection from '../components/BannerSection'
import HomeAboutSection from '../components/HomeAboutSection'
import HomeContactSection from '../components/HomeContactSection'
import ServiceSection from '../components/ServiceSection'
import SpecialtyCakeSection from '../components/SpecialtyCakeSection'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Alisa Bakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection />
      <ServiceSection />
      <SpecialtyCakeSection />
      <HomeAboutSection />
      <HomeContactSection />
    </div>
  )
}

export default HomePage
