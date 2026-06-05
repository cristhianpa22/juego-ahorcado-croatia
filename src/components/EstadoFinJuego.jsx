import React from "react";

export function EstadoFinJuego({ haGanado, haPerdido, alReiniciar }) {
  if (!haGanado && !haPerdido) return null;

  return (
    <div className="mt-8 text-center animate-fade-in">
      {haGanado && (
        <h2 className="text-2xl font-bold text-emerald-600 drop-shadow-sm mb-4">
          🎉 ¡Excelente! Descubriste la palabra. 🎉
        </h2>
      )}
      {haPerdido && (
        <h2 className="text-2xl font-bold text-red-500 drop-shadow-sm mb-4">
          😢 Fin del juego. ¡Inténtalo de nuevo!
        </h2>
      )}
      <button
        onClick={alReiniciar}
        className="px-6 py-3 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95"
      >
        Jugar otra vez
      </button>
    </div>
  );
}