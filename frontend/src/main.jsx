import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './context/Provider.jsx'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login'
import Home from './pages/Home/index.jsx'
import {Switch, Route, Redirect} from 'wouter'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/signup' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Home}/>
        <Redirect to='/login' />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
