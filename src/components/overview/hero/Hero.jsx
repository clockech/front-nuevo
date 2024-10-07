import { Link } from "react-router-dom";
import { useUser } from "../../../lib/context/useUser";

import HomeIcon from "../../icons/HomeIcon";
import OverviewButton from "./OverviewButton";
import HotelIcon from "../../icons/HotelIcon";
import MegaHomeIcon from "../../icons/MegaHomeIcon";
import Input from "../../ui/Input";

const Hero = () => {
  const { user } = useUser();
  
  return (
    <div className="flex my-auto items-center text-center text-white flex-col z-[17] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
      <h1 className="text-[50px] font-semibold">
        Tu hogar, nuestro compromiso
      </h1>
      <h2 className="text-[24px]">
        Busca inmuebles en venta o en alquiler en Rosario
      </h2>
      <Input
        type="text"
        className="w-[80%] mt-6"
        placeholder="Casa, departamento en el centro..."
      />
      <p className="mt-10">¿Qué estás buscando ahora?</p>
      <div className="mt-4 flex gap-6">
        <Link to={"/buy"}>
          <OverviewButton
            label="Alquilar"
            icon={<HomeIcon className="w-7 h-7" />}
          />
        </Link>
        <Link to={"/buy"}>
          <OverviewButton
            label="Comprar"
            icon={<HotelIcon className="w-7 h-7" />}
          />
        </Link>
        <Link to={user ? "/vender" : "/vender"}>
          <OverviewButton
            label="Vender"
            icon={<MegaHomeIcon className="w-7 h-7" />}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
