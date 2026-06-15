import React from "react";
import { ALFABETO } from "../constants/juegoConstants";

export const Teclado = React.memo(({ letrasAdivinadas, juegoTerminado, alPresionarLetra }) => {

   
  
  const baseClase = "flex items-center w-10 justify-center cursor-pointer font-bold text-blue-700 bg-white-200 border-2 border-blue-100 rounded-xl py-3 shadow-sm text-lg transition-all duration-150"
  
  const activa = "hover:bg-blue-70 hover:border-blue-300 active:scale-95"

  const desactivada = "opacity-90 cursor-not select-none text-white"
  
  return (
    <div className="grid grid-cols-7 sm:grid-cols-9 gap-9 max-w-xl mx-auto w-full px-20 mt-25">
      {ALFABETO.map((letra) => {
        const yaUsada = letrasAdivinadas.has(letra);
        
        return (
          
          <button 
            key={letra}
            onClick={() => alPresionarLetra(letra)}
            disabled={yaUsada || juegoTerminado}
            className={`${baseClase},${yaUsada ? desactivada : activa}`}
          >
            {letra}
          </button>

          
        );
      })}
    </div>
  );
});