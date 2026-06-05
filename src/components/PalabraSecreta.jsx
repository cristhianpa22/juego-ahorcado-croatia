import React from "react";

export function PalabraSecreta({ palabra, letrasAdivinadas, haPerdido }) {
  if (!palabra) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3 my-8 min-h-[60px] items-center">
      {palabra.split("").map((letra, index) => {
        const revelada = letrasAdivinadas.has(letra) || haPerdido;
        const noAdivinada = haPerdido && !letrasAdivinadas.has(letra);

        return (
          <span
            key={index}
            className={`w-10 h-14 text-3xl font-extrabold flex items-center justify-center border-b-4 uppercase transition-colors duration-300
              ${noAdivinada 
                ? "border-red-500 text-red-500" 
                : "border-slate-800 text-slate-800"
              }`}
          >
            {revelada ? letra : ""}
          </span>
        );
      })}
    </div>
  );
}