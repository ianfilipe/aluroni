import menu from "pages/Menu/Items/items.json";

export default function Home() {
  return (
    <section>
      <h3>Recomendações da cozin ha</h3>
      <div>{menu}</div>
    </section>
  );
}
