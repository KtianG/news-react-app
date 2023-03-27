import css from "./Footer.module.css";
import { Clock } from "../Clock/Clock";

export function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.clock}>
          <Clock />
        </div>
        <div className={css.info}>Found xxxx relevant news</div>
      </div>
    </footer>
  );
}
