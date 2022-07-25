import React from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./SearchEngine.module.scss";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine({ search, setSearch }: SearchProps) {
  return (
    <div className={styles.searchEngine}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
