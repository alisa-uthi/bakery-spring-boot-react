import { useState } from 'react'

const BillingAddressForm = () => {
  const initialState = {
    street: '',
    landmark: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    specialInstructions: '',
  }

  const [billingAddress, setBillingAddress] = useState(initialState)

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setBillingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="mt-5 w-full">
      <h1 className="text-lg font-medium text-yellow-800">Billing Address</h1>
      <form className="mt-3">
        {/* Street */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="street" className="text-sm">
            Street Address <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="street"
            value={billingAddress.street}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Landmark */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="landmark" className="text-sm">
            Apt, Landmark etc.
          </label>
          <input
            type="text"
            name="landmark"
            value={billingAddress.landmark}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* City */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="city" className="text-sm">
            City <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="city"
            value={billingAddress.city}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Country */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="country" className="text-sm">
            Country <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={billingAddress.country}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* State */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="state" className="text-sm">
            State/Province <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="state"
            value={billingAddress.state}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Postal/Zip Code */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="postalCode" className="text-sm">
            Postal/Zip Code <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="postalCode"
            value={billingAddress.postalCode}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Special Instructions */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="specialInstructions" className="text-sm">
            Special Instructions <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="specialInstructions"
            value={billingAddress.specialInstructions}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>
      </form>
    </div>
  )
}

export default BillingAddressForm
