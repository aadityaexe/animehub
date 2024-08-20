import { useState } from "react";
import Catwoman2 from "./Gallery-assets/Catwoman 2.jpg";
import Catwoman from "./Gallery-assets/Catwoman.jpg";
import Esdeath from "./Gallery-assets/Esdeath.jpg";
import Esdeath2 from "./Gallery-assets/Esdeath__2.jpg";
import Hinata2 from "./Gallery-assets/Hinata 2.jpg";
import Hinata from "./Gallery-assets/Hinata.jpg";
import IkumiMito1 from "./Gallery-assets/Ikumi Mito-2.jpg";
import IkumiMito from "./Gallery-assets/Ikumi Mito_.jpg";
import MaiSakurajima2 from "./Gallery-assets/Mai Sakurajima 2.jpg";
import MaiSakurajima from "./Gallery-assets/Mai Sakurajima.jpg";
import MakiOze from "./Gallery-assets/Maki Oze__.jpg";
import MakiOze2 from "./Gallery-assets/Maki Oze__2.jpg";
import Mirko2 from "./Gallery-assets/Mirko 2.jpg";
import Mirko from "./Gallery-assets/Mirko.jpg";
import Morgiana from "./Gallery-assets/Morgiana.jpg";
import MorgianaNotNormal from "./Gallery-assets/Morgiana__notnormal.jpg";
import Raphtalia from "./Gallery-assets/Raphtalia__.jpg";
import Raphtalia2 from "./Gallery-assets/Raphtalia__2.jpg";
import Rem2 from "./Gallery-assets/Rem 2.jpg";
import Rem from "./Gallery-assets/Rem.jpg";
import RiasGremory from "./Gallery-assets/Rias Gremory_.jpg";
import RiasGremory2 from "./Gallery-assets/Rias Gremory_2.jpg";

const images = [
  {
    src: Catwoman,
    hoverSrc: Catwoman2,
    alt: "Catwoman",
    name: "Catwoman",
    about: "Description of Catwoman",
  },
  {
    src: Esdeath,
    hoverSrc: Esdeath2,
    alt: "Esdeath",
    name: "Esdeath",
    about: "Description of Esdeath",
  },
  {
    src: Hinata,
    hoverSrc: Hinata2,
    alt: "Hinata",
    name: "Hinata",
    about: "Description of Hinata",
  },
  {
    src: IkumiMito,
    hoverSrc: IkumiMito1,
    alt: "Ikumi Mito",
    name: "Ikumi Mito",
    about: "Description of Ikumi Mito",
  },
  {
    src: MaiSakurajima,
    hoverSrc: MaiSakurajima2,
    alt: "Mai Sakurajima",
    name: "Mai Sakurajima",
    about: "Description of Mai Sakurajima",
  },
  {
    src: MakiOze,
    hoverSrc: MakiOze2,
    alt: "Maki Oze",
    name: "Maki Oze",
    about: "Description of Maki Oze",
  },
  {
    src: Mirko,
    hoverSrc: Mirko2,
    alt: "Mirko",
    name: "Mirko",
    about: "Description of Mirko",
  },
  {
    src: Morgiana,
    hoverSrc: MorgianaNotNormal,
    alt: "Morgiana",
    name: "Morgiana",
    about: "Description of Morgiana",
  },
  {
    src: Raphtalia,
    hoverSrc: Raphtalia2,
    alt: "Raphtalia",
    name: "Raphtalia",
    about: "Description of Raphtalia",
  },
  {
    src: Rem,
    hoverSrc: Rem2,
    alt: "Rem",
    name: "Rem",
    about: "Description of Rem",
  },
  {
    src: RiasGremory,
    hoverSrc: RiasGremory2,
    alt: "Rias Gremory",
    name: "Rias Gremory",
    about: "Description of Rias Gremory",
  },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.slice(0, showAll ? images.length : 8).map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group ${
              index % 3 === 0
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <img
              className="object-cover rounded-lg transition-transform duration-300 group-hover:opacity-0"
              src={image.src}
              alt={image.alt}
            />
            <img
              className="absolute inset-0 object-cover rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src={image.hoverSrc}
              alt={`${image.alt} (Hover)`}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-center p-4">
              <div className="text-white">
                <h3 className="text-lg font-bold mb-2">{image.name}</h3>
                <p>{image.about}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Gallery;
