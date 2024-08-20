import "./App.css";
import AboutCreaterContainer from "./Component/AboutCreaterContainer/AboutCreaterContainer";
import Gallery from "./Component/Gallery/Gallery";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/navbar/Navbar";
import SliderAuto from "./Component/Slider/Slider";
import Title from "./Component/Title/Title";
function App() {
  return (
    <>
      <div className="font-serif">
        <Navbar />
        <Hero />
        <Title title={"Slider"} subtitle={"see some image"} />
        <SliderAuto />
        <Title title={"Slider"} subtitle={"see some image"} />
        <Gallery />
      </div>
    </>
  );
}
export default App;
