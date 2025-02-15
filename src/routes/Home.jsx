import { useState } from "react"
import { slicer } from "../hooks/slicer"
import { contenido, contenidoDark } from "../hooks/contenido";

let pantallaNueva = {}
const bodyHome = document.querySelector("body");

let valor = "1";
export const Home = () => {
    bodyHome.classList.add("home");

    const pantallaInicial = bodyHome.classList.contains("dark")
    ? {
        imagenFondo: "./../../assets/images/dark-fondo-electronico.svg", 
        imagenTipo: "./../../assets/images/electronica.jpg", 
        titulo: "Electronicos", 
        info: "¡Bienvenidos a la revolución tecnológica! Sumérgete en un mundo de posibilidades con nuestros increíbles artículos electrónicos diseñados para tu vida, mantenerte conectado y llevar tu entretenimiento al siguiente nivel."
    }
    :{
        imagenFondo: "./../assets/images/fondo-electronico.svg",
        imagenTipo: "./../assets/images/electronica.jpg",
        titulo: "Electronicos",
        info: "¡Bienvenidos a la revolución tecnológica! Sumérgete en un mundo de posibilidades con nuestros increíbles artículos electrónicos diseñados para tu vida, mantenerte conectado y llevar tu entretenimiento al siguiente nivel.",
    };

    const contenidoHome = (val)=> {
        bodyHome.classList.contains("dark") ? pantallaNueva = contenidoDark(val) : pantallaNueva = contenido(val);
        setPantalla(pantallaNueva);
    valor = val;
    }

    const cambioTema = () => {
        bodyHome.classList.toggle('dark');
    }

    const [pantalla, setPantalla] = useState(pantallaInicial);

    return (
        <main className="w-[100%] h-[100dvh]">
            <article className="w-[100%] h-[100dvh] flex items-center justify-between relative">
                <section className="w-[100%] h-[100dvh] relative flex">
                    <img className="w-[100%] h-dvh scale-[2.2] blur-lg absolute -z-10" src={pantalla.imagenFondo} alt="" />
                    <input type="checkbox" className="theme-checkbox" onClick={ ()=> { cambioTema(); contenidoHome(valor) } } checked={ bodyHome.classList.contains("dark") ? true : false } />
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
                <li onClick={()=> {slicer("1"); contenidoHome("1")}} id="slicer1" className="activo w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("2"); contenidoHome("2")}} id="slicer2" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("3"); contenidoHome("3")}} id="slicer3" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("4"); contenidoHome("4")}} id="slicer4" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
                <li onClick={()=> {slicer("5"); contenidoHome("5")}} id="slicer5" className="w-[15px] h-[15px] bg-secundario/20 rounded-full transition ease-in-out duration-500 border-white border-[1px] hover:bg-secundario"></li>
            </ul>
        </main>
    );
}