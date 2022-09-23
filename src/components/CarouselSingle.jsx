import Slider from 'react-slick';

const CarouselSingle = ({ children }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default CarouselSingle;
