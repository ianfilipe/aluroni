import classNames from "classnames";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import styles from "./Computer.module.scss";
import options from "./options.json";

interface ComputerProps {
  computer: string;
  setComputer: React.Dispatch<React.SetStateAction<string>>;
}

export default function Computer({ computer, setComputer }: ComputerProps) {
  const [open, setOpen] = useState(false);
  const computerName =
    computer && options.find((option) => option.value === computer)?.name;
  return (
    <button
      className={classNames({
        [styles.computer]: true,
        [styles["computer--active"]]: computer !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span
        className={classNames({
          [styles.teste]: true,
          [styles["teste--active"]]: computer !== "",
        })}
      >
        {computerName || "Ordernar por"}
      </span>
      {open ? (
        <RiArrowUpSLine
          size={24}
          className={classNames({
            [styles.icon]: true,
            [styles["icon--active"]]: computer !== "",
          })}
        />
      ) : (
        <RiArrowDownSLine
          size={24}
          className={classNames({
            [styles.icon]: true,
            [styles["icon--active"]]: computer !== "",
          })}
        />
      )}
      <div
        className={classNames({
          [styles.computer__options]: true,
          [styles["computer__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.computer__option}
            key={option.value}
            onClick={() => setComputer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
