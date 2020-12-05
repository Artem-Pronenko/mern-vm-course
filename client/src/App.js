import React from 'react'
import {useRouts} from './routes'
import {BrowserRouter} from 'react-router-dom'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'
import 'materialize-css'

const App = () => {
  const {token, login, logOut, userID, ready} = useAuth()
  const isAuth = !!token
  const routes = useRouts(isAuth)

  if (!ready) {
    return <Loader/>
  }
  return (
    <AuthContext.Provider value={{token, login, logOut, userID, isAuth}}>
      <BrowserRouter>
        {isAuth && <Navbar/>}
        <div className="App">
          <div className="container">
            {routes}
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
