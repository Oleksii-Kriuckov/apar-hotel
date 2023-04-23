import './style.css'
import clock from '../images/Clock.png'
type Props = {}

const BookingMessage = (props: Props) => {
  return (
    <div className='bookingMessage'>
        <img src={clock} alt="clock" className='clock'/>
        <p >Бронирование номера осуществляется <strong>КРУГЛОСУТОЧНО!</strong> </p>
    </div>
  )
}

export default BookingMessage