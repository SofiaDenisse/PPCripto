import './Principal.css'
import cvIcon from '../../assets/images/cv.png'
import information from '../../assets/images/information.png'
import keyIcon from '../../assets/images/key.png'
import { CV } from './CV'
import { About } from './About'
import { Pkey } from './Pkey'
import { use, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Principal = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. El título baja con un ligero rebote
        tl.from("#titulo-principal", {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
        })
            // 2. El párrafo aparece deslizándose sutilmente (empieza un poco antes de que termine el h1)
            .from("p.text-gray-500", {
                y: -20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            // 3. Los iconos aparecen en cascada (Stagger)
            .from(".group", {
                scale: 0,         // Empiezan desde tamaño cero
                opacity: 0,
                y: 30,            // Suben un poquito
                duration: 0.6,
                stagger: 0.2,     // 0.2 segundos de diferencia entre cada uno
                ease: "elastic.out(1, 0.75)" // Efecto elástico muy sutil
            }, "-=0.2")
            .from("#footer-text", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2")
            ;
            


    }, []);


    const [modalAbierta, setModalAbierta] = useState(null);

    // Función para decidir qué componente mostrar
    const renderContenido = () => {
        switch (modalAbierta) {
            case 'cv': return <CV />;
            case 'about': return <About />;
            case 'key': return <Pkey />;
            default: return null;
        }
    };

    return (
        <div className="relative overflow-x-hidden">
            <div className="contenedor min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="bg-rectangulo"></div>

                {/* TARJETA PRINCIPAL */}
                <div className="relative z-1 w-full max-w-4xl bg-white rounded-2xl border-2 border-gray-400 shadow-xl overflow-hidden">
                    <div className="bg-[#333333] text-white px-6 py-2 text-lg font-mono">
                        Home
                    </div>

                    <div className="p-12 text-center flex flex-col items-center">
                        <h1 id="titulo-principal" className="text-6xl md:text-7xl font-light text-gray-700 mb-4">
                            hola! <span className="text-orange-500 font-medium">soy Sofia</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-bold mb-12">
                            Estudiante de ingenieria en sistemas computacionales
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* BOTÓN CV */}
                            <div onClick={() => setModalAbierta('cv')} className="group cursor-pointer flex flex-col items-center">
                                <div className="w-16 h-16 mb-2 transition-transform group-hover:scale-110">
                                    <img src={cvIcon} alt="CV" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-mono text-gray-600">CV</span>
                            </div>

                            {/* BOTÓN ABOUT */}
                            <div onClick={() => setModalAbierta('about')} className="group cursor-pointer flex flex-col items-center">
                                <div className="w-16 h-16 mb-2 transition-transform group-hover:scale-110">
                                    <img src={information} alt="About" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-mono text-gray-600">About</span>
                            </div>

                            {/* BOTÓN P-KEY */}
                            <div onClick={() => setModalAbierta('key')} className="group cursor-pointer flex flex-col items-center">
                                <div className="w-16 h-16 mb-2 transition-transform group-hover:scale-110">
                                    <img src={keyIcon} alt="Key" className="w-full h-full object-contain" />
                                </div>
                                <span className="font-mono text-gray-600">P-Key</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* VENTANA EMERGENTE (MODAL) */}
                {modalAbierta && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm ">
                        <div className="relative w-full max-w-4xl bg-[#FFFCF7] rounded-2xl border-2 border-gray-400 shadow-2xl overflow-hidden">

                            {/* Barra superior estilo ventana */}
                            <div className="bg-[#333333] text-white px-6 py-2 text-lg font-mono flex justify-between items-center">
                                <span className="uppercase">{modalAbierta}</span>
                                <button
                                    onClick={() => setModalAbierta(null)}
                                    className="hover:text-orange-500 transition-colors text-2xl"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Contenido dinámico */}
                            <div className="p-8 max-h-[70vh] overflow-y-auto">
                                {renderContenido()}
                            </div>

                            {/* Botón inferior para cerrar */}
                            <div className="p-4 border-t border-gray-100 text-right">
                                <button
                                    onClick={() => setModalAbierta(null)}
                                    className="px-6 py-2 bg-[#333333] text-white rounded-lg hover:bg-orange-500 transition-colors font-mono"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <footer className="relative mt-8 flex flex-col items-center gap-2">
                    <p id="footer-text" className="text-gray-600 text-sm font-mono font-bold">© 2026 CristalShepe</p>
                </footer>
            </div>
        </div>
    )
}