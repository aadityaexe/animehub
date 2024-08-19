import "./App.css";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/navbar/Navbar";
import Title from "./Component/Title/Title";

function App() {
  return (
    <>
      <div
        className="font-serif
"
      >
        <Navbar />
        <Hero />
        <Title title={"Slider"} subtitle={"see some image"} />
      </div>
    </>
  );
}

export default App;
