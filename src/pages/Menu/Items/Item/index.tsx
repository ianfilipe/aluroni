import classNames from "classnames";
import menu from "../items.json";
import styles from "./Item.module.scss";

// interface ItemProps {
//   title: string;
//   description: string;
//   photo: string;
//   size: number;
//   serving: number;
//   price: number;
//   category: string;
// }

type ItemProps = typeof menu[0];

export default function Item(
  props: ItemProps
  //   {
  //   title,
  //   description,
  //   photo,
  //   size,
  //   serving,
  //   price,
  //   category,
  // }
  //     : ItemProps
) {
  const { title, description, photo, size, serving, price, category } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles["item__type__pastas"]]: category.label === "Massas",
              [styles["item__type__meats"]]: category.label === "Carnes",
              [styles["item__type__combos"]]: category.label === "Combos",
              [styles["item__type__vegans"]]: category.label === "Veganos",
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__amountPeople}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
