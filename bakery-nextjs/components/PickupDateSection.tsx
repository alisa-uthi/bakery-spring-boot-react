import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PickupDateSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="mt-10">
      <h2 className="mb-3 text-lg font-medium tracking-wider text-yellow-800">
        SELECT THE DATE TO PICKUP YOUR ORDER
      </h2>
      <DatePicker
        className="w-60 rounded border border-gray-300 px-2 py-1 focus:outline-none"
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  )
}

export default PickupDateSection
