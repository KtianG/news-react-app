import css from "./NewsTile.module.css";
import balon from "../../images/balon.jpeg";

type Props = {
  view: IView;
  author: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  urlToImage: string;
};

export const NewsTile: React.FC<Props> = ({
  view,
  author,
  title,
  description,
  content,
  publishedAt,
  urlToImage,
}) => {
  const current_view = view.status;

  return (
    <article className={css[`news--${current_view}`]}>
      <img
        className={css[`picture--${current_view}`]}
        src={urlToImage ? urlToImage : balon}
        alt="balon"
      />
      <p className={css.title}>{title}</p>

      <p className={css[`description--${current_view}`]}>{description}</p>
      <div className={css[`info--${current_view}`]}>
        <div className={css[`author--${current_view}`]}>
          {author ? author : "Unknown"}
        </div>
        <div>{publishedAt.substring(0, 10)}</div>
      </div>
    </article>
  );
};
