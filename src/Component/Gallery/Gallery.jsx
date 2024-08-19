import React, { useState } from "react";
import g1 from "./Gallery-assets/g1.png";
import g2 from "./Gallery-assets/g2.jpg";
import g3 from "./Gallery-assets/g3.jpg";
import g4 from "./Gallery-assets/g4.jpg";
import g5 from "./Gallery-assets/g5.jpg";
import g6 from "./Gallery-assets/g6.jpg";
import g7 from "./Gallery-assets/g7.jpg";
import g8 from "./Gallery-assets/g8.jpg";
import g9 from "./Gallery-assets/g9.jpg";
import g10 from "./Gallery-assets/g10.jpg";
import g11 from "./Gallery-assets/g11.png";
import g12 from "./Gallery-assets/g12.jpg";
import g13 from "./Gallery-assets/g13.jpg";
import g14 from "./Gallery-assets/g14.jpg";
import g15 from "./Gallery-assets/g15.jpg";
import g16 from "./Gallery-assets/g16.jpg";
import g17 from "./Gallery-assets/g17.jpg";
import g18 from "./Gallery-assets/g18.jpg";
import g19 from "./Gallery-assets/g19.jpg";
import g20 from "./Gallery-assets/g20.jpg";
import g21 from "./Gallery-assets/g21.jpg";

const images = [
  {
    src: g1,
    hoverSrc: g2,
    alt: "Gallery photo 1",
    name: "Anime Name 1",
    about: "Description of Anime 1",
  },
  {
    src: g2,
    hoverSrc: g3,
    alt: "Gallery photo 2",
    name: "Anime Name 2",
    about: "Description of Anime 2",
  },
  {
    src: g3,
    hoverSrc: g4,
    alt: "Gallery photo 3",
    name: "Anime Name 3",
    about: "Description of Anime 3",
  },
  {
    src: g4,
    hoverSrc: g5,
    alt: "Gallery photo 4",
    name: "Anime Name 4",
    about: "Description of Anime 4",
  },
  {
    src: g5,
    hoverSrc: g6,
    alt: "Gallery photo 5",
    name: "Anime Name 5",
    about: "Description of Anime 5",
  },
  {
    src: g6,
    hoverSrc: g7,
    alt: "Gallery photo 6",
    name: "Anime Name 6",
    about: "Description of Anime 6",
  },
  {
    src: g7,
    hoverSrc: g8,
    alt: "Gallery photo 7",
    name: "Anime Name 7",
    about: "Description of Anime 7",
  },
  {
    src: g8,
    hoverSrc: g9,
    alt: "Gallery photo 8",
    name: "Anime Name 8",
    about: "Description of Anime 8",
  },
  {
    src: g9,
    hoverSrc: g10,
    alt: "Gallery photo 9",
    name: "Anime Name 9",
    about: "Description of Anime 9",
  },
  {
    src: g10,
    hoverSrc: g11,
    alt: "Gallery photo 10",
    name: "Anime Name 10",
    about: "Description of Anime 10",
  },
  {
    src: g11,
    hoverSrc: g12,
    alt: "Gallery photo 11",
    name: "Anime Name 11",
    about: "Description of Anime 11",
  },
  {
    src: g12,
    hoverSrc: g13,
    alt: "Gallery photo 12",
    name: "Anime Name 12",
    about: "Description of Anime 12",
  },
  {
    src: g13,
    hoverSrc: g14,
    alt: "Gallery photo 13",
    name: "Anime Name 13",
    about: "Description of Anime 13",
  },
  {
    src: g14,
    hoverSrc: g15,
    alt: "Gallery photo 14",
    name: "Anime Name 14",
    about: "Description of Anime 14",
  },
  {
    src: g15,
    hoverSrc: g16,
    alt: "Gallery photo 15",
    name: "Anime Name 15",
    about: "Description of Anime 15",
  },
  {
    src: g16,
    hoverSrc: g17,
    alt: "Gallery photo 16",
    name: "Anime Name 16",
    about: "Description of Anime 16",
  },
  {
    src: g17,
    hoverSrc: g18,
    alt: "Gallery photo 17",
    name: "Anime Name 17",
    about: "Description of Anime 17",
  },
  {
    src: g18,
    hoverSrc: g19,
    alt: "Gallery photo 18",
    name: "Anime Name 18",
    about: "Description of Anime 18",
  },
  {
    src: g19,
    hoverSrc: g20,
    alt: "Gallery photo 19",
    name: "Anime Name 19",
    about: "Description of Anime 19",
  },
  {
    src: g20,
    hoverSrc: g21,
    alt: "Gallery photo 20",
    name: "Anime Name 20",
    about: "Description of Anime 20",
  },
  {
    src: g21,
    hoverSrc: g1,
    alt: "Gallery photo 21",
    name: "Anime Name 21",
    about: "Description of Anime 21",
  },
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${
          showAll ? "grid-rows-5" : "grid-rows-2"
        }`}
      >
        {images.slice(0, showAll ? images.length : 8).map((image, index) => (
          <div
            key={index}
            className="relative aspect-w-1 aspect-h-1 overflow-hidden group"
          >
            <img
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
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
