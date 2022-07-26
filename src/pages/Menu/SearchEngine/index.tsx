import React from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./SearchEngine.module.scss";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchProps) {
  return (
    <div className={styles.searchEngine}>
      <RiSearchLine size={24} color="#292B2F" />
      <input
        placeholder="Buscar"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
