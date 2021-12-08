import { useState } from 'react'
// import './BookingForm.css'

const BookingForm = ({ createBooking }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const status = 'false'

  const handleNameChange = event => setName(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
 
  
  const handleSubmit = event => {
    event.preventDefault()
    const Booking = {
      name,
      email,
      status
    }
    createBooking(Booking)
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange} 
        required
      />

      <label htmlFor="email">Email:</label>
      <input 
        type="text" 
        id="email" 
        value={email} 
        onChange={handleEmailChange} 
        required
      />


      <input type="submit" name="submit" value="Save"/>
    </form>
  )
}

export default BookingForm