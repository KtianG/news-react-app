import { useState, useEffect } from "react";
import css from "./MainContent.module.css";
import { NewsTile } from "../NewsTile/NewsTile";
import { Spinner } from "../Spinner/Spinner";
import { getCountryNews } from "../../services/api";
import { useSelector, shallowEqual } from "react-redux";
import Modal from "react-modal";
import { NewsModal } from "../NewsModal/NewsModal";
import dummyArticles from "../../data/dummyData.json";

type Props = {
  country: string;
  name: string;
};

const dummyArticle: Article = dummyArticles.pl[0];

export const MainContent: React.FC<Props> = ({ country, name }) => {
  const [news, setNews] = useState(0);
  const [modalState, setModalState] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(dummyArticle);

  const openModal: any = (article: Article) => {
    setCurrentArticle(article);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const view: IView = useSelector(
    (state: viewState) => state.current_view,
    shallowEqual
  );

  useEffect(() => {
    getCountryNews(country).then((articles) => {
      setNews(articles);
    });
  }, [country]);

  const generateNewsTile = (view: IView, news: [Article] | number) => {
    if (typeof news === "number") {
      return;
    }
    const layout = news.map((article, index) => {
      return (
        <NewsTile key={index} view={view} article={article} open={openModal} />
      );
    });
    return layout;
  };

  return (
    <main className={css.main}>
      <h1 className={css.title}>News from {name}</h1>
      <div className={css[view.status]}>
        {news === 0 ? <Spinner /> : generateNewsTile(view, news)}
      </div>
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        contentLabel="News"
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
      >
        <NewsModal article={currentArticle} closeModal={closeModal} />
      </Modal>
    </main>
  );
};
