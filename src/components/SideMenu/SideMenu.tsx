import css from "./SideMenu.module.css";
import countries from "../../data/countries.json";

export function SideMenu() {
  const global_icon = require(`../../images/flags/earth.png`);

  return (
    <nav className={css.nav}>
      <h2 className={css.title}>Countries</h2>
      <ul className={css.list}>
        <li className={css.item} key={"global"}>
          <img className={css.flag} src={global_icon} alt="global" />
          <span className={css.active}>Global</span>
        </li>
        {countries.map(generateCountryListItem)}
      </ul>
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
