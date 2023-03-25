import css from "./Header.module.css";
import list from "../../images/icons/list.png";
import tile from "../../images/icons/tile.png";
import question from "../../images/icons/questionmark.png";

export function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <h2>
            gn<span className={css.accent}>News</span>
          </h2>
        </div>
        <ul className={css.menu}>
          <li className={css.item}>
            <img src={list} className={css.icon} alt="change view to list" />
          </li>
          <li className={css.active}>
            <img src={tile} className={css.icon} alt="change view to tile" />
          </li>
          <li className={css.item}>
            <img src={question} className={css.icon} alt="show pop-up" />
          </li>
        </ul>
      </div>
    </header>
  );
}
