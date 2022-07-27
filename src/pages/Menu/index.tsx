// import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from 'react'
import stylesTheme from 'styles/Theme.module.scss'
import Computer from './Computer'
import Filters from './Filters'
import Items from './Items'
import styles from './Menu.module.scss'
import SearchEngine from './SearchEngine'

export default function Menu() {
	const [search, setSearch] = useState('')
	const [filter, setFilter] = useState<number | null>(null)
	const [computer, setComputer] = useState('')
	return (
		<main>
			<header className={styles.header}>
				<div className={styles.header__searchbox}>
					<SearchEngine search={search} setSearch={setSearch} />
					<div className={styles.filters}>
						<Filters filter={filter} setFilter={setFilter} />
						<Computer computer={computer} setComputer={setComputer} />
					</div>
				</div>
				{/* <div className={styles.header__text}>A casa do código e da massa</div> */}
			</header>
			<section className={styles.menu}>
				<h3 className={stylesTheme.title}>Cardápio</h3>
				<Items search={search} filter={filter} computer={computer} />
			</section>
		</main>
	)
}
