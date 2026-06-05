import { useState, useEffect, useCallback, useMemo } from "react";
import {
  BANCO_PALABRAS,
  MAX_INTENTOS,
  ALFABETO,
} from "../constants/juegoConstants";

export function useAhorcado() {
  const [juegoActual, setJuegoActual] = useState({ palabra: "", pista: "" });
  const [letrasAdivinadas, setLetrasAdivinadas] = useState(new Set());

  const iniciarJuego = useCallback(() => {
    const seleccion =
      BANCO_PALABRAS[Math.floor(Math.random() * BANCO_PALABRAS.length)];
    setJuegoActual(seleccion);
    setLetrasAdivinadas(new Set());
  }, []);

  useEffect(() => { 
    iniciarJuego();
  }, [iniciarJuego]);

  const { palabra, pista } = juegoActual;

  const errores = useMemo(() => {
    return Array.from(letrasAdivinadas).filter(
      (letra) => !palabra.includes(letra),
    ).length;
  }, [letrasAdivinadas, palabra]);

  const haGanado = useMemo(() => {
    if (!palabra) return false;
    return palabra.split("").every((letra) => letrasAdivinadas.has(letra));
  }, [palabra, letrasAdivinadas]);

  const haPerdido = errores >= MAX_INTENTOS;
  const juegoTerminado = haGanado || haPerdido;

  const intentarLetra = useCallback(
    (letra) => {
      if (juegoTerminado) return;

      setLetrasAdivinadas((prev) => {
        if (prev.has(letra)) return prev;
        const nuevoSet = new Set(prev);
        nuevoSet.add(letra);
        return nuevoSet;
      });
    },
    [juegoTerminado],
  );

  useEffect(() => {
    const manejarTecladoFisico = (evento) => {
      const letra = evento.key.toUpperCase();
      if (ALFABETO.includes(letra)) {
        intentarLetra(letra);
      }
    };

    window.addEventListener("keydown", manejarTecladoFisico);
    return () => window.removeEventListener("keydown", manejarTecladoFisico);
  }, [intentarLetra]);

  return {
    palabra,
    pista, 
    letrasAdivinadas,
    errores,
    haGanado,
    haPerdido,
    juegoTerminado,
    intentarLetra,
    iniciarJuego,
  };
}
