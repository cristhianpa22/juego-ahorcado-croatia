import React, { useEffect, useRef } from "react";
import imagenMarco from "../assets/imagenes/marco.png";

export function EstadoFinJuego({ haGanado, haPerdido, alReiniciar }) {
  const contenedorRef = useRef(null);

  useEffect(() => {
    if (haGanado || haPerdido) {
      setTimeout(() => {
        contenedorRef.current?.scrollIntoView({
          behavior: "smooth", 
          block: "center", 
        });
      }, 100); 
    }
  }, [haGanado, haPerdido]);

  if (!haGanado && !haPerdido) return null;

  return (
    <div 
      ref={contenedorRef}
      className="mt-6 flex items-center justify-center animate-fade-in w-full pb-16 px-4"
    >
     
      <div className="relative w-full max-w-5xl h-[500x] sm:h-[500px] drop-shadow-2xl mx-auto">
        
        <img 
          src={imagenMarco} 
          alt="Marco decorativo de fin de juego" 
          className="absolute inset-0 w-full h-130  z-0"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pt-6 pb-12 px-12 text-center select-none">
          
          {haGanado && (
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl drop-shadow-md mb-1">🏆</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
                EXCELLENT!<br />
                <span className="text-emerald-400 text-xl sm:text-2xl font-bold tracking-normal normal-case block mt-1">
                  You figured out the word!
                </span>
              </h2>
            </div>
          )}
          
          {haPerdido && (
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl drop-shadow-md mb-1">😢</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
                GAME OVER<br />
                <span className="text-red-400 text-xl sm:text-2xl font-bold tracking-normal normal-case block mt-1">
                  Try again!
                </span>
              </h2>
            </div>
          )}

          <div className="absolute -bottom-6 w-full flex justify-center left-0 right-0">
            <button
              onClick={alReiniciar}
              className="px-12 py-4 font-black text-xl uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl shadow-black/50 transition-all active:scale-95 border-b-4 border-blue-900"
            >
               Play again
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
