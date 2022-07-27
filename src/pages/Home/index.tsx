import nossaCasa from 'assets/nossa_casa.png'
import menu from 'data/menu.json'
import { useNavigate } from 'react-router-dom'
import stylesTheme from 'styles/Theme.module.scss'
import styles from './Home.module.scss'


export default function Home() {
	let recommendedDishes = [...menu]
	recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

	const navigate = useNavigate()
	
	function redirectToDetails(dish: typeof menu[0]) {
		navigate(`/prato/${dish.id}`, { state: {dish}})
	}

	return (
		<section>
			<h3 className={stylesTheme.title}>Recomendações da cozinha</h3>
			<div className={styles.recommendeds}>{recommendedDishes.map(item => (
				<div key={item.id} className={styles.recommended}>
					<div className={styles.recommended__image}>
						<img src={item.photo} alt={item.title} />
					</div>
					<button className={styles.recommended__button} onClick={() => redirectToDetails(item)}>Ver mais</button>
				</div>
			))}
			</div>
			<h3 className={stylesTheme.title}>Nossa casa</h3>
			<div className={styles.nossaCasa}>
				<img src={nossaCasa} alt="Casa do Aluroni" />
				<div className={styles.nossaCasa__endereco}>
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	)
}
