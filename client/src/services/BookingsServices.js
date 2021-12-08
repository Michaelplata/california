const baseURL = 'http://localhost:5000/api/bookings/'

 const BookingsServices = {
  getBookings() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postBooking(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteBooking(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },
  
  updateBooking(payload) {
    return fetch(baseURL + payload._id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

}



export default BookingsServices;