import { useState } from 'react'

const ContactUsForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    organization: '',
    message: '',
    error: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: '',
    },
  }

  const [formValue, setFormValue] = useState(initialState)
  const [isFormValid, setIsFormValid] = useState(false)

  const handleChange = (e: any) => {
    const { value } = e.target

    setFormValue({
      ...formValue,
      [e.target.name]: value,
    })
  }

  const validateForm = (): void => {
    setFormValue((prevForm) => ({
      ...prevForm,
      error: {
        ...prevForm.error,
        firstName: !formValue.firstName ? 'First name is required' : '',
        lastName: !formValue.lastName ? 'Last name is required' : '',
        email: !formValue.email ? 'Email is required' : '',
        contactNumber: !formValue.contactNumber
          ? 'Contact number is required'
          : '',
        message: !formValue.message ? 'Message is required' : '',
      },
    }))

    if (
      formValue.email &&
      !/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(formValue.email)
    ) {
      setFormValue((prevForm) => ({
        ...prevForm,
        error: {
          ...prevForm.error,
          email: 'Please enter a valid email',
        },
      }))
    }

    if (
      formValue.contactNumber &&
      !/\d{3}-\d{2}-\d{3}/.test(formValue.contactNumber)
    ) {
      setFormValue((prevForm) => ({
        ...prevForm,
        error: {
          ...prevForm.error,
          contactNumber: 'Please enter a valid contact number',
        },
      }))
    }

    setIsFormValid(
      Object.entries(formValue.error).every(([key, val]) => {
        return val == ''
      })
    )
  }

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    // Clear error
    setFormValue((prevForm) => ({
      ...prevForm,
      error: {
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        message: '',
      },
    }))

    validateForm()
    if (!isFormValid) return

    // Reset state
    setFormValue(() => initialState)
    setIsFormValid(false)

    // Show successful alert
    alert(
      'Successful!\nThank you for getting in touch! We appreciate you contacting us.'
    )
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        {/* First name */}
        <label htmlFor="firstName">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formValue.firstName}
          onChange={(e) => handleChange(e)}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />
        {formValue.error.firstName && (
          <span className="my-1 text-[10px] text-red-600">
            {formValue.error.firstName}
          </span>
        )}

        {/* Last name */}
        <label htmlFor="lastName">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formValue.lastName}
          onChange={handleChange}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />
        {formValue.error.lastName && (
          <span className="my-1 text-[10px] text-red-600">
            {formValue.error.lastName}
          </span>
        )}

        {/* Email */}
        <label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />
        {formValue.error.email && (
          <span className="my-1 text-[10px] text-red-600">
            {formValue.error.email}
          </span>
        )}

        {/* Contact number */}
        <label htmlFor="contactNumber">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="contactNumber"
          placeholder="xxx-xx-xxx"
          value={formValue.contactNumber}
          onChange={handleChange}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />
        {formValue.error.contactNumber && (
          <span className="my-1 text-[10px] text-red-600">
            {formValue.error.contactNumber}
          </span>
        )}

        {/* Organization */}
        <label htmlFor="organization">Your Organization (if any)</label>
        <input
          type="text"
          name="organization"
          value={formValue.organization}
          onChange={handleChange}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />

        {/* Message */}
        <label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="message"
          value={formValue.message}
          onChange={handleChange}
          className="rounded-sm border-[1px] p-2 focus:outline-none"
        />
        {formValue.error.message && (
          <span className="my-1 text-[10px] text-red-600">
            {formValue.error.message}
          </span>
        )}

        <button
          type="submit"
          className="mt-4 border border-transparent bg-yellow-800 py-2 px-5 font-semibold text-white transition delay-150 ease-in-out hover:border hover:border-yellow-800 hover:bg-yellow-700"
        >
          SEND
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm
