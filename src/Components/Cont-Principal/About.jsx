import React from 'react'
import './About.css'
import crochets from './cardimages/crochets.jpeg'
import videogame from './cardimages/videogame.png'
import origamis from './cardimages/origami.jpeg'
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
                    <img src={crochets} alt="knitting" className='scale-80 rounded-2xl' />
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Crocheting</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Hacer crochet me ayuda a concentrarme y crear personajes lindos</p>
                    </div>
                </div>

                {/*VIDEOJUEGOS*/}
                <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl'>
                    <img src={videogame} alt="knitting" className='scale-80 rounded-2xl' />
                    <a href="https://medal.tv/es/games/valorant/clips/ln2hvnPRlj38mr8ZN?invite=cr-MSxZemYsNjI1MzA1MDA4" target="_blank" className='mb-7 mt-4 text-center'>
                        <span className="bg-purple-100 text-purple-600 rounded-full text-xs font-bold uppercase tracking-widest">
                            Mirame Jugar !!
                        </span>
                    </a>
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Videojuegos</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Me encanta jugar videojuegos con amigos y sentir la adrenalina</p>
                    </div>
                </div>

                {/*BAILAR Y CANTAR*/}
                <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl'>
                    <img src={origamis} alt="knitting" className='scale-80 rounded-2xl' />
                    <h2 className='montserrat-1 font-bold text-center px-2 pb-5'>Origami</h2>
                    <div className='bg-fuchsia-700 p-3 text-center'>
                        <p className='text-white montserrat-1 font-light text-xs'>Hacer dragones de papel es una de mis actividades favoritas</p>
                    </div>
                </div>
            </div>


            {/*TARJETAS QUE ROTAN__________________________________________________________________________*/}
            <div className="mt-20">

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

            {/*REDES SOCIALES__________________________________________________________________________*/}
            <div className='mt-20 flex flex-col items-center'>
                {/* TÍTULO */}
                <p className="text-center montserrat-1 text-4xl font-bold">
                    MIS <span className="text-orange-500">REDES SOCIALES ✨</span>
                </p>
                <p className="text-center space-grotesk m-6 text-gray-600">
                    Sigueme en todas mis redes sociales para estar al tanto de mis proyectos, hobbies y aventuras diarias. ¡Me encantaría conectar contigo!
                </p>

                {/* Contenedor de Redes Sociales - Estilo Minimalista Azul Oscuro */}
                <div id="social-networks" className="flex flex-row gap-6 items-center justify-center w-full">

                    {/* Facebook */}
                    <a href="https://www.facebook.com/share/1BhfRZprvy/" target="_blank" rel="noreferrer"
                        className="social-icon group border-2 border-slate-700 p-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center w-12 h-12">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-slate-700 group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/sofiii_dn?igsh=M2hvaG9jNXphazc1" target="_blank" rel="noreferrer"
                        className="social-icon group border-2 border-slate-700 p-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center w-12 h-12">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-slate-700 group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>

                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@najeragarciasofia?_r=1&_t=ZS-966HIzTUvzT" target="_blank" rel="noreferrer"
                        className="social-icon group border-2 border-slate-700 p-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center w-12 h-12">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-slate-700 group-hover:fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V13.3c0 1.97-.53 3.89-1.71 5.38-2.34 3.14-7.06 3.65-9.93 1.07-2.87-2.58-2.9-7.44-.02-10.02 1.41-1.31 3.31-1.89 5.19-1.75V11c-1.12-.13-2.3.2-3.08 1.01-1.28 1.34-1.1 3.73.41 4.79 1.48 1.09 4 1.1 5.11-.46.51-.71.69-1.61.69-2.5V0h-.16z" /></svg>
                    </a>

                    {/* YouTube */}
                    <a href="https://youtube.com/@najeragarciasofiadenisse9144?si=2TuX5n4eopKkoufr" target="_blank" rel="noreferrer"
                        className="social-icon group border-2 border-slate-700 p-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center w-12 h-12">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-slate-700 group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>

                    {/* Gmail */}
                    <a href="mailto:nsofiadenisse@gmail.com" target='_blank'
                        className="social-icon group border-2 border-slate-700 p-3 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-sm flex items-center justify-center w-12 h-12">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-slate-700 group-hover:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
            </div>
            {/*______________________________________________________________s*/}

        </div>
    )
}
