import React from "react";
import { MAX_INTENTOS } from "../constants/juegoConstants";

export function Marcador({ errores }) {
  return (
    <div className="text-center mb-6">
      <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-wider">
        Errores cometidos
      </p>
      <p className="text-3xl font-black text-red-500 mt-1">
        {errores} <span className="text-gray-300 font-light text-xl">/ {MAX_INTENTOS}</span>
      </p>
    </div>
  );
}