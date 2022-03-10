import { useState } from 'react'

const CustomerInformationForm = () => {
  const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    contactNumber: '',
    isJoinMailingList: false,
  }

  const [customerInfo, setCustomerInfo] = useState(initialState)

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target

    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: type == 'checkbox' ? checked : value,
    }))
  }

  return (
    <div className="mt-5 w-full">
      <h1 className="text-lg font-medium text-yellow-800">Your Information</h1>
      <form className="mt-3">
        {/* Email */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="email" className="text-sm">
            Email Address <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* First name */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="firstName" className="text-sm">
            First Name <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={customerInfo.firstName}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Last name */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="lastName" className="text-sm">
            Last Name <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={customerInfo.lastName}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Company */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="company" className="text-sm">
            Company <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="company"
            value={customerInfo.company}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Contact number */}
        <div className="mb-3 flex flex-col sm:flex-row sm:justify-between">
          <label htmlFor="contactNumber" className="text-sm">
            Contact Number <span className="text-xs text-red-600">*</span>
          </label>
          <input
            type="text"
            name="contactNumber"
            value={customerInfo.contactNumber}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none sm:w-4/6"
          />
        </div>

        {/* Join mailing list */}
        <div className="flex items-center justify-start">
          <input
            type="checkbox"
            name="isJoinMailingList"
            checked={customerInfo.isJoinMailingList}
            onChange={(e) => handleChange(e)}
            className="border border-gray-500 px-2 py-1 focus:outline-none"
          />
          <label htmlFor="isJoinMailingList" className="ml-3 text-sm">
            I want to join your mailing list
          </label>
        </div>
      </form>
    </div>
  )
}

export default CustomerInformationForm
