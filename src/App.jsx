import { NavBar } from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import { Home } from "./routes/Home.jsx"
import { Productos } from "./routes/Productos.jsx"
import { Favoritos } from "./routes/Favoritos.jsx"
import { Carrito } from "./routes/Carrito.jsx"
import { Login } from "./routes/Login.jsx"
import { NotFound } from "./routes/NotFound.jsx"

export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  )
}
