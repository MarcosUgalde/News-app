import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './context/Provider.jsx'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login'
import Home from './pages/Home/index.jsx'
import Guard from './components/Guard/index.jsx'
import {Switch, Route, Redirect} from 'wouter'
import NavBar from './components/NavBar/index.jsx'
import { SearchProvider } from './components/SearchContext/index.jsx'

const Main = () => {
  return (
    <Provider>
      <NavBar />
      
      <Switch>
        <Route path='/signup' component={Register}/>
        <Route path='/login' component={Login}/>
        <SearchProvider>
          <Route path='/'>
            <Guard component={Home}/>
          </Route>
        </SearchProvider>
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
