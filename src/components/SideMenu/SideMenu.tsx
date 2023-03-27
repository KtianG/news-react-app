import css from "./SideMenu.module.css";
import countries from "../../data/countries.json";

export function SideMenu() {
  return (
    <nav className={css.nav}>
      <h2 className={css.title}>Countries</h2>
      <ul className={css.list}>{countries.map(generateCountryListItem)}</ul>
    </nav>
  );
}

function generateCountryListItem(country: { name: string; id: string }) {
  const { name, id } = country;
  const image = require(`../../images/flags/${id}.svg`);
  return (
    <li className={css.item} key={id}>
      <img className={css.flag} src={image} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
}
