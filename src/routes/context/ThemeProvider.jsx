import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react';
import { contenido, contenidoDark } from '../../hooks/contenido';

let value = "1";
let theme = localStorage.getItem("theme");

export const ThemeProvider = ({ children }) => {
    let pantallaNueva = {}
    const bodyHome = document.querySelector("body");
    bodyHome.classList.add("home");

    const pantallaInicial = (theme == "dark")
    ? {
        imagenFondo: "./../../assets/images/dark-electronica.jpg",
        imagenTipo: "./../../assets/images/dark-electronica.jpg",
        titulo: "Electronicos", 
        info: "¡Bienvenidos a la revolución tecnológica! Sumérgete en un mundo de posibilidades con nuestros increíbles artículos electrónicos diseñados para tu vida, mantenerte conectado y llevar tu entretenimiento al siguiente nivel."
    }
    :{
        imagenFondo: "./../assets/images/electronica.jpg",
        imagenTipo: "./../assets/images/electronica.jpg",
        titulo: "Electronicos",
        info: "¡Bienvenidos a la revolución tecnológica! Sumérgete en un mundo de posibilidades con nuestros increíbles artículos electrónicos diseñados para tu vida, mantenerte conectado y llevar tu entretenimiento al siguiente nivel.",
    };

    const [pantalla, setPantalla] = useState(pantallaInicial);

    const contenidoGral = (val)=> {
        bodyHome.classList.contains("dark") ? pantallaNueva = contenidoDark(val) : pantallaNueva = contenido(val);
        setPantalla(pantallaNueva);
        value = val;
    };

    const navBar = bodyHome.classList.contains("dark") 
    ? {
        search: "./../assets/images/dark-search.png",
        login: "./../../assets/images/dark-avatar.png"
    }
    : {
        search: "./../assets/images/search.png",
        login: "./../../assets/images/avatar.png"
    };

    return (
        <ThemeContext.Provider value={{ pantalla, contenidoGral, value, navBar, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}
