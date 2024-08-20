import heroImage from "./Hero-assets/hero-img-1.png";
import heroImage2 from "./Hero-assets/hero-img-2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="mt-10 flex overflow-hidden h-screen relative items-center hero"
      id="HERO"
    >
      <div
        className="relative w-full h-[300px] flex flex-col items-center justify-center px-8 text-white z-10 sm:bg-lime-50 sm:text-pink-500 hero-text sm:z-auto"
        id="heroId"
      >
        <span className="absolute bottom-0 h-0.5 w-[100px] bg-white animate-animate"></span>
        <span className="absolute top-0 h-0.5 w-[100px] bg-white animate-animateReverse"></span>
        <h1
          style={{
            fontSize: "3.75rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
          className="sm:text-[4.5rem] font-bold"
        >
          Welcome to <br /> WifuWiki
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
          className="mt-5 font-bold text-center w-3/4 sm:w-1/2"
        >
          We all love to drink mitsuri kanroji milk.
        </p>
      </div>
      {/* Left side with image */}
      <div className="absolute inset-0 w-full sm:w-1/2 h-full z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-auto h-full object-cover sm:object-cover"
        />
        <img
          src={heroImage2}
          alt=""
          className="w-auto h-full object-cover sm:object-cover sec-hero-img"
        />
      </div>
    </div>
  );
};
export default Hero;
