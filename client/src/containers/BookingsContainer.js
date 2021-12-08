import { useState, useEffect } from 'react';
import BookingForm from '../components/BookingForm';
import BookingsGrid from '../components/BookingsGrid';
import BookingsServices from '../services/BookingsServices';

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        BookingsServices.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = newBooking => {
        BookingsServices.postBooking(newBooking)
          .then(savedBooking => setBookings([...bookings, savedBooking]))
      }
    
    const deleteBooking = idToDelete => {
      BookingsServices.deleteBooking(idToDelete)
        .then(() => {
          setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    const updateBooking = booking => {
      // 
      BookingsServices.updateBooking(booking)
        // .then((res) => {
        //   BookingsServices.getBookings()
        //   .then(bookings => setBookings(bookings))
        // })
    }
    
      return (
        <>
            <h1>Hotel California</h1>
          <BookingForm createBooking={createBooking} />
          <BookingsGrid bookings={bookings} deleteBooking={deleteBooking} updateBooking={updateBooking}/>
        </>
      )
    }
    
    export default BookingsContainer




