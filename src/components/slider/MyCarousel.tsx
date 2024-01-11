import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style/style.css";
import "./style/adaptive.css";

type Props = {
  images: string[];
};

export const MyCarousel = ({ images }: Props) => {
  return (
    <div className="carousel">
      <Carousel
        ariaLabel=""
        autoPlay
        interval={3000}
        emulateTouch
        infiniteLoop
        showArrows
        labels={{
          leftArrow: "prevBtn",
          rightArrow: "nextBtn",
          item: "slideItem",
        }}
        showStatus={false}
        showThumbs={false}
        transitionTime={1000}
      >
        {images.map((img) => (
          <div key={img}>
            <img src={img} />
            {/* <p className="room">Legend 1</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
