// import './BookingCard.css'
import BookingStatus from "./BookingStatus"

const BookingCard = ({ booking, deleteBooking , updateBooking}) => {

  const handleDeleteClick = () => {
    deleteBooking(booking._id)
  }

  return (
    <div className="booking-card">
      <h3>Guest name: {booking.name}</h3>
      <p>Guest email: {booking.email}</p>
      <p>Status: <BookingStatus updateBooking={updateBooking} name={booking.name} email={booking.email} oldStatus={booking.status} _id={booking._id}/></p>
      <button 
        type="button" 
        className="delete-btn" 
        onClick={handleDeleteClick}
      >delete</button>
    </div>
  )
}

export default BookingCard