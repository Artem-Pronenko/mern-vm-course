import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const logoutHandler = e => {
    e.preventDefault()
    auth.logOut()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue">
        <NavLink to="/" className="brand-logo">Сокращение ссылок</NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Мои ссылки</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>Выйти</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}