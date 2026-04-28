import React from 'react'
import './Pkey.css'

export const Pkey = () => {
  return (
    <div>
        <p className="text-center montserrat-1 text-4xl font-bold mt-14">Llave <span className="text-orange-500">Pública</span></p>
        <div className="flex flex-col items-center rounded-xl m-6">
          <div className= "lineaSeparadora mb-10 bg-cyan-500"></div>
          <div className="text-center max-w-sm mb-8">
        <p className="text-gray-500 text-sm italic">
          "Utiliza esta llave para cifrar mensajes que solo yo pueda leer o para verificar mis firmas digitales en proyectos de seguridad."
        </p>
      </div>

      <a href="/PPCripto/public.key" download="SofPublic.key">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-8 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-0.75 active:translate-y-0.75 active:[box-shadow:0px_0px_rgb(82_82_82)] hover:bg-neutral-50">
          <span className="mr-2">📥</span> Descargar llave completa
        </button>
      </a>
          
        </div>
        
    </div>
  )
}
