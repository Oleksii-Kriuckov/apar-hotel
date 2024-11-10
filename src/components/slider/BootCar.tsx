import Carousel from 'react-bootstrap/Carousel';
import './style.css'

type Props = {
  images: string[];
};

export const BootCarousel = ({ images }: Props) => {
  return (
    <Carousel variant="dark">
      {images.map((img, ind) => (
        <Carousel.Item key={img} style={{}}>
          <img src={img} alt={`view${ind}`} className='carousel_img' 
            // style={{height: '100%', width: 'initial', margin: 'auto'}}
            style={{width: 'initial', display: 'block'}}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}