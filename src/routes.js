import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import Nav from 'components/Nav'
import About from 'pages/About'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<DefaultPage />}>
						<Route index element={<Home />} />
						<Route path='sobre' element={<About />} />
					</Route>
					<Route path='*' element={<NotFound/>} />
					<Route path='cardapio' element={<Menu />} />
				</Routes>
				<Footer/>
			</Router>
		</main>
	)
}