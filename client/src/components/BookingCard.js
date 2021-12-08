// import './BookingCard.css'

const BookingCard = ({ booking, deleteBooking }) => {

  const handleDeleteClick = () => {
    deleteBooking(booking._id)
  }

  return (
    <div className="booking-card">
      <h3>Guest name: {booking.name}</h3>
      <p>Guest email: {booking.email}</p>
      <p>Status: {booking.status}</p>
      {/* <p>Status: {booking.status}</p> */}
      <button 
        type="button" 
        className="delete-btn" 
        onClick={handleDeleteClick}
      >delete</button>
    </div>
  )
}

export default BookingCard