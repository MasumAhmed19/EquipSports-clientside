import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://i.ibb.co.com/V9zWsYG/High-Performance-Rowing-Machine.jpg",
  "https://i.ibb.co.com/yNCKsWr/Mountain-Bike-Helmet.jpg",
  "https://i.ibb.co.com/qxBJDcP/Premium-Basketball-Hoop.jpg",
  "https://i.ibb.co.com/XzGK0Y4/Resistance-Band.jpg",
  "https://i.ibb.co.com/ZTRm2PG/Table-Tennis-Paddle-Sets.jpg",
  "https://i.ibb.co.com/N6RcxLq/Golf-Club-Set-Men-s.jpg",
  "https://i.ibb.co.com/jL8XK63/Green-Yoga-Mat-Sling-and-Strap.jpg",
];

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for larger screens (PC, Laptop)
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-16">
      <Slider {...settings} className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Item ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
