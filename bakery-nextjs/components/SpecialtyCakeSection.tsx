import React from 'react'
import Button from './Button'

const SpecialtyCakeSection = () => {
  return (
    <div className="flex items-center justify-end">
      <img
        src="/images/home-specialty-cakes.jpg"
        alt="Home Specialty Cakes"
        style={{
          height: '300px',
          width: '100%',
          objectFit: 'cover',
          transform: 'scaleX(-1)',
        }}
        className="relative z-0"
      />

      <div className="absolute z-30 mr-5 md:mr-16 lg:mr-20">
        <h1 className="mb-5 text-2xl font-bold text-gray-800 lg:text-3xl">
          Specialty Cakes
        </h1>
        <Button to="/" title="VIEW PRODUCTS" />
      </div>
    </div>
  )
}

export default SpecialtyCakeSection
