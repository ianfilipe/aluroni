import 'normalize.css'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const actualComponent = window.location.pathname === '/' ? <Home /> : <Menu />

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		{actualComponent}
	</React.StrictMode>
)
