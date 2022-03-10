import { useState } from 'react'

const PaymentMethod = () => {
  const [discountCode, setDiscountCode] = useState('')

  return (
    <div className="mt-6 w-full">
      <h1 className="text-lg font-medium text-yellow-800">
        Payment Method
        <span className="text-red-500">*</span>
      </h1>

      <div className="mt-1 flex space-x-2">
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/color/28/000000/mastercard-credit-card.png"
        />
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/color/28/000000/visa.png"
        />
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/color/28/000000/mastercard.png"
        />
        <img
          className="cursor-pointer"
          src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/28/000000/external-cash-sale-and-shopping-xnimrodx-lineal-xnimrodx.png"
        />
      </div>

      <div className="mt-3">
        <h1 className="mb-1 font-medium text-yellow-800">Discount</h1>
        <h3 className="text-sm">Use a Discount Code</h3>
        <input
          type="text"
          name="discountCode"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border border-gray-500 px-2 py-1 focus:outline-none"
        />
        <br />
        <button className="btn mt-3">APPLY</button>
      </div>
    </div>
  )
}

export default PaymentMethod
