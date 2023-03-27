import { useState, useEffect } from "react";
import css from "./MainContent.module.css";
import { NewsTile } from "../NewsTile/NewsTile";
import { Spinner } from "../Spinner/Spinner";
import { getCountryNews } from "../../services/api";
import { useSelector, shallowEqual } from "react-redux";

type Props = {
  country: string;
};

export const MainContent: React.FC<Props> = ({ country }) => {
  const [news, setNews] = useState(0);

  const view: IView = useSelector(
    (state: viewState) => state.current_view,
    shallowEqual
  );

  useEffect(() => {
    getCountryNews(country).then((articles) => {
      setNews(articles);
    });
  }, [country]);

  return (
    <main className={css.main}>
      <h1 className={css.title}>News from Country</h1>
      <div className={css[view.status]}>
        {news === 0 ? <Spinner /> : generateNewsTiles(view, news)}
      </div>
    </main>
  );
};

type Article = {
  author: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  urlToImage: string;
};

const generateNewsTiles = (view: IView, news: [Article] | number) => {
  if (typeof news === "number") {
    return;
  }
  const layout = news.map((article, index) => {
    return (
      <NewsTile
        key={index}
        view={view}
        author={article.author}
        title={article.title}
        description={article.description}
        content={article.content}
        publishedAt={article.publishedAt}
        urlToImage={article.urlToImage}
      />
    );
  });
  return layout;
};
