import Navbar from "../components/navbar/Navbar";
import Characteristics from "../components/estates/estatesOverview/Characteristics";
import Contact from "../components/estates/estatesOverview/Contact";
import Description from "../components/estates/estatesOverview/Description";
import Gallery from "../components/estates/estatesOverview/Gallery";
import Map from "../components/estates/estatesOverview/Map";
import { Heart } from "lucide-react";
import { cn } from "../lib/utils";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OverviewEstates = () => {
  const { id } = useParams();

  const [favorite, setFavorite] = useState(false);
  const [setColorChecked] = useState("fill-red-500");

  const handleFavoriteClick = () => {
    setFavorite((value) => !value);
    setColorChecked(favorite ? "" : "");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[80%] mx-auto py-4 mt-20">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-xl">Detalles de la Propiedad {id}</h1>
          <button onClick={handleFavoriteClick}>
            <Heart
              className={cn("", {
                "fill-red-500 text-red-500": favorite,
              })}
            />
          </button>
        </div>
        <div className="mt-8">
          <Gallery />
        </div>
        <div className="mx-auto py-4 my-12">
          <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-8   ">
            <Characteristics />
            <Description />
            <Contact />
          </div>
        </div>
        <div className="mt-2 mb-2">
          <Map />
        </div>
      </div>
    </>
  );
};

export default OverviewEstates;
