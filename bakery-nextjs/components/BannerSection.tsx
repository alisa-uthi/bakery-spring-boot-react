import { NextComponentType } from 'next'

const BannerSection: NextComponentType = () => {
  return (
    <div className="md:mt-4">
      <img src="/images/home-banner.jpg" alt="Home Banner" height={300} />
    </div>
  )
}

export default BannerSection
