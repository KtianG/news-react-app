import css from "./NewsTile.module.css";
import balon from "../../images/balon.jpeg";

type Props = {
  view: IView;
};

export const NewsTile: React.FC<Props> = ({ view }) => {
  const current_view = view.status;
  return (
    <article className={css[`news--${current_view}`]}>
      <img
        className={css[`picture--${current_view}`]}
        src={balon}
        alt="balon"
      />
      <p className={css.title}>
        Tytuł na co najmniej trzy linijki w celach testowych, żeby było wiadomo
        co może wyjść
      </p>

      <p className={css[`description--${current_view}`]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rerum
        voluptate saepe deleniti? Culpa fuga, beatae id ipsa architecto libero,
        harum error asperiores nesciunt veniam iure magni, hic recusandae
        provident.
      </p>
      <div className={css[`info--${current_view}`]}>
        <div className={css.source}>source</div>{" "}
        <div className={css.date}>Date</div>
      </div>
    </article>
  );
};
