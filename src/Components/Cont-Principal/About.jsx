import React from 'react'
import './About.css'
import crochets from './cardimages/crochets.png'
import videogame from './cardimages/videogame.png'
import boombox from './cardimages/boombox.png'
import lucho from './cardimages/lucho.jpeg'
import canela from './cardimages/canela.jpeg'

export const About = () => {
    return (
        <div>
            <div className="flex flex-col items-center bg-cyan-500 rounded-xl m-6">
                <p className="text-white italic">"Amante del arte y el código..."</p>
            </div>

            <p className="space-grotesk text-justify m-6 font-normal">Hola, mi nombre es Sofía y actualmente estudio Ingeniería en Sistemas Computacionales. Me considero una persona sociable, y creo que esta cualidad ha sido clave para adaptarme y disfrutar mi etapa universitaria.
                A lo largo de mi trayectoria escolar he tenido la oportunidad de conocer a personas increíbles, con distintas personalidades, que han influido positivamente en mi crecimiento.
                Disfruto aprender de ellas y observar los cambios que ocurren en mi entorno, ya que cada experiencia aporta algo valioso a mi desarrollo personal y profesional.
            </p>

            <p className="text-center montserrat-1 text-4xl font-bold mt-14">MIS <span className="text-orange-500">HOBBIES</span></p>

            {/*Cartas de hobbies*/}

            <div className='flex flex-wrap justify-center'>
                {/*CROCHETING*/}
                <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl'>
                    <img src={crochets} alt="knitting" className='scale-80' />
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Crocheting</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Hacer crochet me ayuda a concentrarme y crear personajes lindos</p>
                    </div>
                </div>

                {/*VIDEOJUEGOS*/}
                <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl'>
                    <img src={videogame} alt="knitting" className='scale-80' />
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Videojuegos</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Me encanta jugar videojuegos con amigos y sentir la adrenalina</p>
                    </div>
                </div>

                {/*BAILAR Y CANTAR*/}
                <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl'>
                    <img src={boombox} alt="knitting" className='scale-80' />
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Bailar y Cantar</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Actualmente creo que es mi hobby favorito, me ayuda a liberar el estrés</p>
                    </div>
                </div>
            </div>


            {/*TARJETAS QUE ROTAN__________________________________________________________________________*/}
            <div className="mt-12">

                {/* TÍTULO */}
                <p className="text-center montserrat-1 text-4xl font-bold">
                    MIS <span className="text-orange-500">MASCOTAS 🐾</span>
                </p>

                <p className="text-center space-grotesk m-6 text-gray-600">
                    Ellos hacen mis días más felices y siempre están conmigo.
                </p>

                {/* CONTENEDOR */}
                <div className="flex flex-wrap justify-center gap-10">

                    {/* CARD 1 */}
                    <div
                        className="w-60 h-72"
                        style={{ perspective: "1500px" }}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
                            style={{
                                transformStyle: "preserve-3d"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "rotateY(180deg)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "rotateY(0deg)";
                            }}
                        >

                            {/* FRONT */}
                            <div
                                className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <img
                                    src={canela}
                                    alt="mascota"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* BACK */}
                            <div
                                className="absolute w-full h-full rounded-xl shadow-lg flex flex-col justify-center items-center text-center p-4 bg-linear-to-br from-orange-400 to-purple-500 text-white"
                                style={{
                                    transform: "rotateY(180deg)",
                                    backfaceVisibility: "hidden"
                                }}
                            >
                                <h2 className="text-lg font-bold mb-2 montserrat-1">
                                    Canela "Chiquis" 🐶
                                </h2>
                                <p className="text-[14px] space-grotesk">
                                    Mi compañera de estudio y la que siempre me anima.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div
                        className="w-60 h-72"
                        style={{ perspective: "1500px" }}
                    >
                        <div
                            className="relative w-full h-full transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
                            style={{
                                transformStyle: "preserve-3d"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "rotateY(180deg)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "rotateY(0deg)";
                            }}
                        >

                            {/* FRONT */}
                            <div
                                className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
                                style={{ backfaceVisibility: "hidden" }}
                            >
                                <img
                                    src={lucho}
                                    alt="mascota"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* BACK */}
                            <div
                                className="absolute w-full h-full rounded-xl shadow-lg flex flex-col justify-center items-center text-center p-4 bg-linear-to-br from-orange-400 to-blue-500 text-white"
                                style={{
                                    transform: "rotateY(180deg)",
                                    backfaceVisibility: "hidden"
                                }}
                            >
                                <h2 className="text-lg font-bold mb-2 montserrat-1">
                                    Lucho "El gordo" 🐶
                                </h2>
                                <p className="text-[14px] space-grotesk">
                                    El dueño de la casa y experto en destruir juguetes
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/*______________________________________________________________s*/}

        </div>
    )
}
