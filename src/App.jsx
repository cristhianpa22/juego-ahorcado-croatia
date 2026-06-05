import React from "react";
import { useAhorcado } from "./hooks/useAhorcado";
import { Marcador } from "./components/Marcador";
import { Pista } from "./components/pista"; // <--- Nueva importación
import { PalabraSecreta } from "./components/PalabraSecreta";
import { Teclado } from "./components/Teclado";
import { EstadoFinJuego } from "./components/EstadoFinJuego";

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
    iniciarJuego
  } = useAhorcado();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <main className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 flex flex-col justify-between">
        <header className="text-center mb-4">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            AHORCADO<span className="text-indigo-600">.JS</span>
          </h1>
        </header>

        <Marcador errores={errores} />

        {/* Mostramos la pista de forma elegante */}
        <Pista pista={pista} />

        <PalabraSecreta 
          palabra={palabra} 
          letrasAdivinadas={letrasAdivinadas} 
          haPerdido={haPerdido} 
        />

        <Teclado 
          letrasAdivinadas={letrasAdivinadas} 
          juegoTerminado={juegoTerminado} 
          alPresionarLetra={intentarLetra} 
        />

        <EstadoFinJuego 
          haGanado={haGanado} 
          haPerdido={haPerdido} 
          alReiniciar={iniciarJuego} 
        />
      </main>
    </div>
  );
}