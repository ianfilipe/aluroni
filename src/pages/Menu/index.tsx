import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import Filters from "./Filters";
import styles from "./Menu.module.scss";
import SearchEngine from "./SearchEngine";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
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
        </div>
      </section>
    </main>
  );
}
