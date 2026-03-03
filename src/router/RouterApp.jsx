import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { Registro } from "../views/Registro"
import { RouteProtected } from "../components/RouteProtected"
import { Acerca } from "../views/Acerca"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }