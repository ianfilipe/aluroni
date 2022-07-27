import { useLocation } from 'react-router-dom'
import styles from './Dish.module.scss'

export default function Dish() {
	console.log(useLocation())
	return (
		<div className={styles.a}>
			Prato
		</div>
	)
}