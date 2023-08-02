import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Provider from './context/Provider.jsx'

const Main = () => {
  return (
    <Provider>
      <App /> 
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
