import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Aside = () => {
  const [search, setSearch] = useState("")
  const { users, handleSelectedUserId, logout } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const handleChange = (event) => setSearch(event.target.value)

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`
    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <aside>
      <div className="aside-header">
        <h1>Chat UTN</h1>
        <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <input className="search" type="search" placeholder="Buscar contactos..." onChange={handleChange} />
      {filteredUsers.length === 0 && <p className="not-found-text">No se encontraron contactos</p>}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => handleSelectedUserId(user.id)}>
            <img src={user.image} alt="" />
            <div>
              {user.firstName} {user.lastName}
              <small>{user.address.country}</small>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export { Aside }