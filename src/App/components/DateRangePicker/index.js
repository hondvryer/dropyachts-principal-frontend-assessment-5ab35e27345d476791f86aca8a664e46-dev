import React from "react"
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars"
import "./styles.css"

const DateRangePicker = (props) => {
  const { value, onChange, format, maxDate } = props

  const handleChange = ({ startDate, endDate, isInteracted }) => {
    if (isInteracted) {
      onChange([startDate, endDate])
    }
  }

  return (
    <div id="date-range-picker-wrapper" className="date-range-picker-wrapper">
      <DateRangePickerComponent
        delayUpdate
        id="daterangepicker"
        format={format || "dd MMM, yyyy"}
        value={value}
        max={maxDate}
        change={handleChange}
      />
    </div>
  )
}

export default DateRangePicker
