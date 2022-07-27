import { useParams } from 'react-router-dom'
import styles from './Dish.module.scss'

export default function Dish() {
	console.log(useParams())
	return (
		<div className={styles.a}>
			Prato
		</div>
	)
}