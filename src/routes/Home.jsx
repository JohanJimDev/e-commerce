import { useContext, useState } from "react"
import { slicer } from "../hooks/slicer"
import { ThemeContext } from "./context/ThemeContext"

export const Home = () => {
    const { pantalla, contenidoGral, value, navBar } = useContext( ThemeContext )

    return (
        <main className="w-[100%] h-[100dvh] overflow-hidden">
            <article className="w-[100%] h-[100dvh] flex items-center justify-between relative">
                <section className="w-[100%] h-[100dvh] relative flex">
                    <img className="w-[100%] h-dvh scale-[2.2] blur-lg absolute -z-10" src={pantalla.imagenFondo} alt="" />
                    <div className="w-[50%] h-[100dvh]  grid grid-cols-1 place-content-center px-[40px] gap-7">
                        <h2 id="tituloSlice" className="text-4xl text-efecto2 font-extrabold italic">{pantalla.titulo}</h2>
                        <p id="infoSlice" className="text-texto dark:text-dark-texto">{pantalla.info}</p>
                    </div>
                    <div className="w-[50%] h-[100dvh]">
                        <img id="imgSlice" className="difuminar grid place-content-center" src={pantalla.imagenTipo} alt="Electronica" />
                    </div>
                </section>
            </article>
            <ul id="slicers" className="flex gap-4 absolute top-[95%] left-[22%]">
                <li onClick={()=> {slicer("1"); contenidoGral("1")}} id="slicer1" className="activo w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("2"); contenidoGral("2")}} id="slicer2" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("3"); contenidoGral("3")}} id="slicer3" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("4"); contenidoGral("4")}} id="slicer4" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("5"); contenidoGral("5")}} id="slicer5" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
            </ul>
        </main>
    );
}