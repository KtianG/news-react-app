import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import css from "./Header.module.css";
import list from "../../images/icons/list.png";
import tile from "../../images/icons/tile.png";
import question from "../../images/icons/questionmark.png";

type Props = {
  view: IView;
  setView: (view: IView) => void;
};

export const Header: React.FC<Props> = ({ view, setView }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const changeView = React.useCallback(
    (view: IView) => dispatch(setView(view)),

    [dispatch, setView]
  );

  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <h2>
            gn<span className={css.accent}>News</span>
          </h2>
        </div>
        <ul className={css.menu}>
          <li className={view.status === "list" ? css.active : css.item}>
            <img
              src={list}
              className={css.icon}
              alt="change view to list"
              onClick={() => changeView({ status: "list" })}
            />
          </li>
          <li className={view.status === "grid" ? css.active : css.item}>
            <img
              src={tile}
              className={css.icon}
              alt="change view to grid"
              onClick={() => changeView({ status: "grid" })}
            />
          </li>
          <li className={css.item}>
            <img src={question} className={css.icon} alt="show pop-up" />
          </li>
        </ul>
      </div>
    </header>
  );
};
