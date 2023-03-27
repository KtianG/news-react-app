import * as React from "react";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setView } from "../../redux/actionCreators";
import { useSelector, shallowEqual } from "react-redux";

import css from "./Header.module.css";
import list from "../../images/icons/list.png";
import tile from "../../images/icons/tile.png";
import question from "../../images/icons/questionmark.png";

export const Header: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const view: IView = useSelector(
    (state: viewState) => state.current_view,
    shallowEqual
  );

  const changeView = React.useCallback(
    (view: IView) => dispatch(setView(view)),

    [dispatch]
  );

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.link} to={`/Home`}>
          <div className={css.logo}>
            <h2>
              gn<span className={css.accent}>News</span>
            </h2>
          </div>
        </Link>
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
