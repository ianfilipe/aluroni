import classNames from 'classnames'
import { Dish } from 'types/dish'
import styles from './DishTags.module.scss'

export default function DishTags({
	category,
	size,
	serving,
	price
}: Dish) {
	return (
		<div className={styles.item__tags}>
			<div
				className={classNames({
					[styles.item__type]: true,
					[styles['item__type__pastas']]: category.label === 'Massas',
					[styles['item__type__meats']]: category.label === 'Carnes',
					[styles['item__type__combos']]: category.label === 'Combos',
					[styles['item__type__vegans']]: category.label === 'Veganos',
				})}
			>
				{category.label}
			</div>
			<div className={styles.item__portion}>{size}g</div>
			<div className={styles.item__amountPeople}>
					Serve {serving} pessoa{serving === 1 ? '' : 's'}
			</div>
			<div className={styles.item__price}>R$ {price.toFixed(2)}</div>
		</div>
	)
}