import 'normalize.css'
import Home from 'pages/Home'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
)
