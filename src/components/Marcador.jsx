import React from "react";
import { MAX_INTENTOS } from "../constants/juegoConstants";

import imagen from "../assets/imagenes/primera.png"
import imagen0 from "../assets/imagenes/inicio-removebg-preview.png"
import imagen1 from "../assets/imagenes/segundoplano.png"
import imagen2 from "../assets/imagenes/tercero.png"
import imagen3 from "../assets/imagenes/cuarto.png"
import imagen4 from "../assets/imagenes/quinto.png"
export function Marcador({ errores }) {

  let imagenes = [imagen,imagen0,imagen1,imagen2,imagen3,imagen4]
  return (
    <div className="text-center mb-6">

      <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wider mt-12">
       Mistakes made

      </p>
      <p className="text-3xl font-black text-red-500 mt-1">
        {errores} <span className="text-gray-300 font-light text-xl">/ {MAX_INTENTOS}</span>
      </p>
      <div className="flex justify-center p-12">

        <div className="w-95 h-120">

          <img src={imagenes[errores]} className="w-full h-full "></img>
        </div>


      </div>
    </div>
  );
}