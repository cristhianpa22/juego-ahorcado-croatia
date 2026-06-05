import React from "react";
import { useAhorcado } from "./hooks/useAhorcado";
import { Marcador } from "./components/Marcador";
import { Pista } from "./components/pista"; // <--- Nueva importación
import { PalabraSecreta } from "./components/PalabraSecreta";
import { Teclado } from "./components/Teclado";
import { EstadoFinJuego } from "./components/EstadoFinJuego";

import imageFondo from "./assets/imagenes/fondo.jpeg";
import logoCroacia from "./assets/imagenes/coat-of-arms-of-croatia-vector-illustration-removebg-preview.png"
export default function App() {
  const {
    palabra,
    pista, // <--- Extraemos la pista del hook
    letrasAdivinadas,
    errores,
    haGanado,
    haPerdido,
    juegoTerminado,
    intentarLetra,
    iniciarJuego,
  } = useAhorcado();

  return (
    <div
      className="w-full min-h-screen   flex  justify-center  bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${imageFondo})` }}
    >
      <div className="absolute inset-0 bg-white/75 backdrop-blur-xs z-0" />
      
      <main className="w-full   rounded-2xl    flex flex-col  gap-5 j z-10">
        <header className="text-center p-4 bg-white/70 rounded-xl mb-2 flex  justify-start ">
         <img src={logoCroacia} alt=""  className="h-12 w-12 "/>
        <h1 className="text-3xl font-black text-blue-800 tracking-tight">
         
          CRO<span className="text-red-500">.Hangman</span>
        </h1>
        
      </header>
        <div className="flex flex-col ">
          <Marcador errores={errores} />
          <Pista pista={pista} />
        </div>

        <PalabraSecreta
          palabra={palabra}
          letrasAdivinadas={letrasAdivinadas}
          haPerdido={haPerdido}
        />

        <div className="mt-2">
          <Teclado
            letrasAdivinadas={letrasAdivinadas}
            juegoTerminado={juegoTerminado}
            alPresionarLetra={intentarLetra}
          />
        </div>

        <EstadoFinJuego
          haGanado={haGanado}
          haPerdido={haPerdido}
          alReiniciar={iniciarJuego}
        />
      </main>
    </div>
  );
}
