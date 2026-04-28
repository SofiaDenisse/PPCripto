import React from 'react'
import './Pkey.css'

export const Cripto = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <p className="text-center montserrat-1 text-4xl font-bold mt-14 mb-4">
        Extra!<br/> <span className="text-orange-500">El manuscrito de Voynich</span>
      </p>
      
      <div className="lineaSeparadora mb-8 bg-cyan-500"></div>

      <div className="max-w-md text-center mb-10">
        <p className="text-gray-600 font-mono text-sm">
          "Explicando uno de los enigmas más intrigantes de la historia en tan solo 60 segundos."
        </p>
      </div>

      {/* Contenedor estilo Smartphone */}
      <div className="relative group max-w-75 w-full mx-auto">
        {/* Glow de fondo naranja */}
        <div className="absolute -inset-1 bg-orange-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] border-[6px] border-[#333333] overflow-hidden shadow-2xl aspect-9/16">
          <video 
            className="w-full h-full object-cover"
            controls 
            playsInline
            preload="metadata"
          >
            {/* La ruta empieza con /PPCripto/ por el despliegue en GitHub Pages */}
            <source src="/PPCripto/Voynich.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>

      {/* Tags informativos abajo */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest">
          Voynich Manuscript
        </span>
        <span className="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest">
            Cifrado histórico
        </span>
      </div>
    </div>
  )
}