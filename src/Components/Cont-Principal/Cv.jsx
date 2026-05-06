import React from 'react'
import cv_sofi from './cardimages/CV_Sofi.pdf'
import './CV.css'

export const CV = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-5">
                <p className="text-center montserrat-1 text-4xl font-bold mt-8 mb-5">Curriculum <span className="text-orange-500">Vitae 📄</span></p>
                <div className="lineaSeparadora mb-10 bg-cyan-500"></div>
                <div className="text-center max-w-sm mb-8">
                    <p className="text-gray-500 text-sm italic">
                        "Da clic para descargar mi CV completo, donde encontrarás detalles sobre mi experiencia, habilidades y proyectos destacados a lo largo de mi carrera."
                    </p>
                </div>
                <a
                    href={cv_sofi}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="CV_Sofia_ESCOM.pdf"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-slate-900 font-mono rounded-xl hover:bg-slate-800 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1"
                >
                    {/* Icono de descarga animado */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>


                    <span className='px-3'>DESCARGAR CURRICULUM</span>

                    {/* Brillo decorativo inferior */}
                    <div className="absolute inset-0 w-full h-full rounded-xl border-2 border-transparent group-hover:border-slate-700 transition-all duration-300"></div>
                </a>

                <p className="mt-4 text-slate-500 text-xs font-mono uppercase tracking-widest">
                    PDF • 97 KB • Actualizado 2026
                </p>
            </div>

        </div>
    )
}
