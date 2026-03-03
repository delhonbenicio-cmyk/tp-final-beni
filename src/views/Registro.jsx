import { useState } from "react"

const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errores, setErrores] = useState({})

  const validar = () => {
    const nuevosErrores = {}

    // requisitos de validación

    if (!nombre || nombre.length < 3) {
      nuevosErrores.nombre = "El nombre es obligatorio y debe tener al menos 3 caracteres"
    }

    if (!email || !email.includes("@")) {
      nuevosErrores.email = "El email es obligatorio y debe tener un formato válido"
    }

    if (!password || password.length < 6) {
      nuevosErrores.password = "La contraseña es obligatoria y debe tener al menos 6 caracteres"
    }

    return nuevosErrores
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const erroresEncontrados = validar()

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      return
    }

    console.log("Usuario registrado:", { nombre, email, password })
  }

  return (
    <section>
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        {errores.nombre && <p className="error-form">{errores.nombre}</p>}

        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {errores.email && <p className="error-form">{errores.email}</p>}

        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        {errores.password && <p className="error-form">{errores.password}</p>}

        <button>Registrarse</button>
      </form>
    </section>
  )
}

export { Registro }