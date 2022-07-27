import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Link to="/" className={styles.footer__logo}>
				<h1>Aluroni</h1>
			</Link>
		</footer>
	)
}