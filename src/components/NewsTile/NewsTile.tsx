import css from "./NewsTile.module.css";
import balon from "../../images/balon.jpeg";

export function NewsTile() {
  return (
    <article className={css["news--list"]}>
      <img className={css["picture--list"]} src={balon} alt="balon" />
      <p className={css.title}>
        Tytuł na co najmniej trzy linijki w celach testowych, żeby było wiadomo
        co może wyjść
      </p>

      <p className={css["description--list"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rerum
        voluptate saepe deleniti? Culpa fuga, beatae id ipsa architecto libero,
        harum error asperiores nesciunt veniam iure magni, hic recusandae
        provident.
      </p>
      <div className={css["info--list"]}>
        <div className={css.source}>source</div>{" "}
        <div className={css.date}>Date</div>
      </div>
    </article>
  );
}
