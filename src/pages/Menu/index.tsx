import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import Computer from "./Computer";
import Filters from "./Filters";
import styles from "./Menu.module.scss";
import SearchEngine from "./SearchEngine";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [computer, setComputer] = useState("");
  return (
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Computer computer={computer} setComputer={setComputer} />
        </div>
      </section>
    </main>
  );
}
