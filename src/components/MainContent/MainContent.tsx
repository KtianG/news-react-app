import { useState, useEffect } from "react";
import css from "./MainContent.module.css";
import { NewsTile } from "../NewsTile/NewsTile";
import { Spinner } from "../Spinner/Spinner";
import { getCountryNews } from "../../services/api";

type Props = {
  view: IView;
};

export const MainContent: React.FC<Props> = ({ view }) => {
  const [news, setNews] = useState(0);
  const current_view: string = view.status;

  useEffect(() => {
    getCountryNews("us").then((articles) => {
      setNews(articles);
    });
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.title}>News from Country</h1>
      <div className={css[current_view]}>
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
