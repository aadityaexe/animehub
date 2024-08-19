import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    alt: "image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    alt: "image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    alt: "image 3",
  },
];

const SliderAuto = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Set the interval for automatic sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="w-4 h-1 rounded-2xl bg-white/50">
        <div className={`h-full ${i === 0 ? "bg-white w-8" : ""}`}></div>{" "}
        {/* Adjust based on currentIndex */}
      </div>
    ),
    arrows: false, // Disable custom arrows
  };

  return (
    <div className="relative h-64 overflow-hidden">
      <Slider {...settings} className="h-full rounded-xl">
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderAuto;
