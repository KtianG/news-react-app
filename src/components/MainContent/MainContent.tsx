import css from "./MainContent.module.css";
import { NewsTile } from "../NewsTile/NewsTile";

export function MainContent() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>News from Country</h1>
      <div className={css.list}>
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
        <NewsTile />
      </div>
    </main>
  );
}
