import BookingCard from './BookingCard'
// import './BookingsGrid.css'

const BookingsGrid = ({ bookings, deleteBooking, updateBooking }) => {
  return (
    <div className="Booking-wrapper">
      {bookings.map(booking => {
        return (
          <BookingCard updateBooking={updateBooking}
            key={booking._id} 
            booking={booking} 
            deleteBooking={deleteBooking}
          />
        )
      })}
    </div>
  )
}

export default BookingsGrid