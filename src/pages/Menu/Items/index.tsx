import { useEffect, useState } from "react";
import Item from "./Item";
import menu from "./items.json";
import styles from "./Items.module.scss";

interface ItemsProps {
  search: string;
  filter: number | null;
  computer: string;
}

export default function Items(props: ItemsProps) {
  const [list, setList] = useState(menu);
  const { search, filter, computer } = props;
  const [initialList, setInitialList] = useState(menu.slice(0, 3));

  window.addEventListener("scroll", () => {
    if (initialList.length < menu.length && window.scrollY >= 600) {
      setInitialList([
        ...initialList,
        ...menu.slice(initialList.length, initialList.length + 3),
      ]);
    }
  });

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function computerList(newList: typeof menu) {
    switch (computer) {
      case "portion":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "amount_people":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(computerList(newList));
  }, [search, filter, computer]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item
          key={item.id}
          {...item}
          // title={item.title}
          // description={item.description}
          // photo={item.photo}
          // size={item.size}
          // serving={item.serving}
          // price={item.price}
          // category={item.category.label}
        />
      ))}
    </div>
  );
}
