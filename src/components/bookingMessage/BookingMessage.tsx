import './style.css'
import clock from '../images/Clock.png'
type Props = {}

const BookingMessage = (props: Props) => {
  return (
    <div className='bookingMessage'>
        <img src={clock} alt="clock" className='clock'/>
        <p >Booking a room is carried out <strong> around the clock!</strong> </p>
    </div>
  )
}

export default BookingMessage