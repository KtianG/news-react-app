import css from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.clock}>21 : 39</div>
        <div className={css.info}>Found xxxx relevant news</div>
      </div>
    </footer>
  );
}
