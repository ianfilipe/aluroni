import DishTags from 'components/DishTags'
import menu from 'data/menu.json'
import NotFound from 'pages/NotFound'
import { RiArrowLeftLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Dish.module.scss'

export default function Dish() {
	const navigate = useNavigate()
	const { id } = useParams()
	const dish = menu.find(item => item.id === Number(id))
	if (!dish) return <NotFound/>
	return (
		<>
			<button className={styles.voltar} onClick={() => navigate(-1)}>
				<RiArrowLeftLine/> Voltar
			</button>
			<section className={styles.container}>
				<h1 className={styles.titulo}>
					{dish.title}
				</h1>
				<div className={styles.imagem}>
					<img src={dish.photo} alt={dish.title} />
				</div>
				<div className={styles.conteudo}>
					<p className={styles.conteudo__descricao}>{dish.description}</p>
					<DishTags {...dish} />
				</div>
			</section>
		</>
	)
}