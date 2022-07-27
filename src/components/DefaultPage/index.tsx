import { Link, Outlet } from 'react-router-dom'
import stylesTheme from 'styles/Theme.module.scss'
import styles from './DefaultPage.module.scss'


export default function DefaultPage() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A casa do código e da massa
				</div>
				<Link to="cardapio">
					<button className={styles.header__button}>Veja o Cardápio</button>
				</Link>
			</header>
			<div className={stylesTheme.container}>
				<Outlet/>
			</div>
		</>
	)
}