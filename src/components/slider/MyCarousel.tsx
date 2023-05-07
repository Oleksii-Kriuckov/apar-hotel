import { Carousel } from "react-responsive-carousel";
import room1 from "../images/rooms/pexels-engin-akyurt-1579253.jpg";
import room2 from "../images/rooms/pexels-hakim-santoso-3634741.jpg";
import room3 from "../images/rooms/pexels-pixabay-237371.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style/style.css";
import "./style/adaptive.css";

type Props = {};

export const MyCarousel = (props: Props) => {
  return (
    <div>
      <Carousel
        ariaLabel=""
        autoPlay
        interval={3000}
        emulateTouch
        infiniteLoop
        showArrows
        labels={{leftArrow: 'prevBtn', rightArrow: 'nextBtn', item: 'slideItem'}}
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
      >
        <div>
          <img src={room1} />
          {/* <p className="room">Legend 1</p> */}
        </div>
        <div>
          <img src={room2} />
          {/* <p className="room">Legend 2</p> */}
        </div>
        <div>
          <img src={room3} />
          {/* <p className="room">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

