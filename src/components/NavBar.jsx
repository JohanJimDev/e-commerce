import { NavLink } from "react-router-dom"

const bodyHome = document.querySelector("body");

let navBar = bodyHome.classList.contains("dark")
? {
    search: "./../assets/images/dark-search.png",
    login: "./../../assets/images/dark-avatar.png"
}
: {
    search: "./../assets/images/search.png",
    login: "./../../assets/images/avatar.png"
}

export const NavBar = () => {
    return (
        <>
            <nav className="w-[100%] h-[80px] flex items-center justify-between px-[20px] py-[30px] absolute z-50">
                <NavLink className="text-2xl text-texto dark:text-dark-texto font-bold hover:text-efecto1 hover:font-extrabold hover:dark:text-dark-efecto2" to="/">LOGO</NavLink>
                <section className="w-[50%] h-[60px] gap-4 bg-secundario/20 dark:bg-dark-secundario/20 px-[10px] rounded-full flex items-center justify-center">
                    <input className="w-[90%] focus:outline-none dark:text-dark-texto" type="search" placeholder="Buscar" />
                    <img className="w-[25px] h-[25px] hover:scale-[1.1] hover:rotate-[360deg] transition duration-500 ease-in-out" src={navBar.search} alt="search" />
                </section>
                <ul className="flex items-center justify-center gap-4">
                    <li><NavLink to="/productos" className="text-texto dark:text-dark-texto hover:text-efecto1 hover:font-bold  hover:dark:text-dark-efecto2">Productos</NavLink></li>
                    <li><NavLink to="/favoritos" className="text-texto dark:text-dark-texto hover:text-efecto1 hover:font-bold  hover:dark:text-dark-efecto2">Favoritos</NavLink></li>
                    <li><NavLink to="carrito" className="text-texto dark:text-dark-texto hover:text-efecto1 hover:font-bold  hover:dark:text-dark-efecto2">Carrito</NavLink></li>
                    <li><NavLink to="login"><img className="w-[65px] h-[45px] px-[20px] py-[10px] rounded-3xl hover:bg-efecto1/30" src={navBar.login} alt="Login" /></NavLink></li>
                </ul>
            </nav>
            <input type="checkbox" className="theme-checkbox" onClick={ ()=> { cambioTema(); contenidoHome(valor) } } checked={ bodyHome.classList.contains("dark") ? true : false } />
        </>
    )
}
