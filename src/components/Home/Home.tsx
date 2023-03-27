import css from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Simple news app</h1>
      <div className={css.content}>
        <p>Homepage of news app, created</p>
      </div>
    </main>
  );
};
