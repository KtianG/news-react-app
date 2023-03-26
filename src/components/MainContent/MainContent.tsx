import css from "./MainContent.module.css";
import { NewsTile } from "../NewsTile/NewsTile";

type Props = {
  view: IView;
};

export const MainContent: React.FC<Props> = ({ view }) => {
  const current_view = view.status;
  return (
    <main className={css.main}>
      <h1 className={css.title}>News from Country</h1>
      <div className={css[current_view]}>
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
        <NewsTile view={view} />
      </div>
    </main>
  );
};
