import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setDate(date);
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        className="rounded-xl p-4"
      />
    </div>
  );
}

export default Datepicker;
