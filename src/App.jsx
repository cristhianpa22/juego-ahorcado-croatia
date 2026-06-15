import React from "react";
import {useEffect, useRef} from "react"
import { useAhorcado } from "./hooks/useAhorcado";
import { Marcador } from "./components/Marcador";
import { Pista } from "./components/pista"; // <--- Nueva importación
import { PalabraSecreta } from "./components/PalabraSecreta";
import { Teclado } from "./components/Teclado";
import { EstadoFinJuego } from "./components/EstadoFinJuego";

import imageFondo from "./assets/imagenes/fondo.jpeg";
import logoCroacia from "./assets/imagenes/coat-of-arms-of-croatia-vector-illustration-removebg-preview.png"
import musicaFondo from "./assets/Severina-Mojastikla.mp3"
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


  const audioRef = useRef(null);

  useEffect(() => {
  const manejarTeclado = (evento) => {
      // ' ' detecta la barra espaciadora
      if (evento.key === ' ' || evento.code === 'Space') {
        // Evita el comportamiento por defecto (como hacer scroll hacia abajo en la página)
        evento.preventDefault(); 

        const audio = audioRef.current;

        if (audio.paused) {
          audio.play()
            .then(() => console.log("Reproduciendo audio..."))
            .catch(error => console.error("Error al reproducir:", error));
        } else {
          audio.pause();
          console.log("Audio pausado");
        }
      }
    }

  if (!juegoTerminado) {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }

  if(juegoTerminado){
    audioRef.current.pause();
    audioRef.current.currentTime = 0
  }
  // Añadimos el evento al presionar una tecla
      window.addEventListener('keydown', manejarTeclado);
  
      // Limpiamos el evento cuando el componente se desmonte para evitar fugas de memoria
      return () => {
        window.removeEventListener('keydown', manejarTeclado);
      };

}, [juegoTerminado])
  return (
    <div
      className="w-full min-h-screen   flex  bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${imageFondo})` }}
    >
      <audio ref={audioRef} src={musicaFondo} loop />

      <div className="absolute inset-0 bg-white/75 backdrop-blur-xs z-0" />
      
      <main className="w-full   rounded-2xl    flex flex-col  gap-2 z-10">
        <header className="text-center p-4 bg-white/70 rounded-xl mb-2 flex  justify-start ">
         <img src={logoCroacia} alt=""  className="h-12 w-12 "/>
        <h1 className="text-3xl font-black text-blue-800 tracking-tight">
         
          CRO<span className="text-red-500">.Hangman</span>
        </h1>
        
      </header>
      <div className=" grid grid-cols-2">
      <div>
        <div className="flex flex-col ">
          <Marcador errores={errores} />
          
        </div>
      
      </div>

      <div>

        <Pista pista={pista} />
      
        <PalabraSecreta
          palabra={palabra}
          letrasAdivinadas={letrasAdivinadas}
          haPerdido={haPerdido}
        />
          <div >


          </div>
          <Teclado
            letrasAdivinadas={letrasAdivinadas}
            juegoTerminado={juegoTerminado}
            alPresionarLetra={intentarLetra}

          />

      
      </div>


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
