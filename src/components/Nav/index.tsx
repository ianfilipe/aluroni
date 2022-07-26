import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'

export default function Nav() {
	const routes = [
		{
			label: 'Início',
			to: '/'
		},
		{
			label: 'Cardápio',
			to: '/cardapio'
		},
		{
			label: 'Sobre',
			to: '/sobre'
		},
	]
	return (
		<nav className={styles.nav}>
			<h1 className={styles.nav__logo}>Aluroni</h1>
			<ul className={styles.nav__list}>
				{routes.map((route, index) => (
					<li key={index} className={styles.nav__link}>
						<Link to={route.to}>{route.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
