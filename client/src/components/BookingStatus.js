import { useState, useEffect } from 'react'

const BookingStatus = ({ updateBooking, name, email, oldStatus, _id }) => {

  let [status, setStatus] = useState (oldStatus);

  useEffect (()=>{
    const Booking = {
        name,
        email,
        status,
        _id
      }
      updateBooking(Booking)
  },[status])

  const handleStatusClick = event => {
      if (status === "true"){
          setStatus("false");
        } else {
            setStatus("true");
        }
  }

  return (
    <button 
    type="button" 
    className="delete-btn" 
    onClick={handleStatusClick}
    >{status}</button>
  )
}

export default BookingStatus
