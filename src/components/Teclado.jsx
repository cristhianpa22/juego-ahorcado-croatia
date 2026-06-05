import React from "react";
import { ALFABETO } from "../constants/juegoConstants";

export const Teclado = React.memo(({ letrasAdivinadas, juegoTerminado, alPresionarLetra }) => {
  return (
    <div className="grid grid-cols-7 sm:grid-cols-9 gap-2 max-w-xl mx-auto w-full px-2">
      {ALFABETO.map((letra) => {
        const yaUsada = letrasAdivinadas.has(letra);
        
        return (
          <button
            key={letra}
            onClick={() => alPresionarLetra(letra)}
            disabled={yaUsada || juegoTerminado}
            className={`py-3 text-base sm:text-lg font-bold rounded-lg transition-all active:scale-95 select-none
              ${yaUsada 
                ? "bg-slate-100 text-slate-400 cursor-not-allowed opacity-60" 
                : "bg-slate-800 text-white hover:bg-indigo-600 shadow-md hover:shadow-indigo-200"
              } 
              disabled:pointer-events-none disabled:active:scale-100`}
          >
            {letra}
          </button>
        );
      })}
    </div>
  );
});