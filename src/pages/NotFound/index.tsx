import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'
import classNames from 'classnames'
import { RiArrowLeftLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import stylesTheme from 'styles/Theme.module.scss'
import styles from './NotFound.module.scss'

export default function NotFound() {
	const navigate = useNavigate()
	return (
		<div className={classNames({
			[styles.container]: true,
			[stylesTheme.container]: true
		})}>
			<div className={styles.voltar}>
				<button onClick={() => navigate(-1)}>
					<RiArrowLeftLine/> Voltar
				</button>
			</div>
			<NotFoundImage />
		</div>
	)
}