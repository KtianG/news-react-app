import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { setView } from "../../redux/actionCreators";
import { useSelector, shallowEqual } from "react-redux";

import css from "./Header.module.css";
import list from "../../images/icons/list.png";
import tile from "../../images/icons/tile.png";
import question from "../../images/icons/questionmark.png";

export const Header: React.FC = () => {
  const [modalState, setModalState] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();

  const view: IView = useSelector(
    (state: viewState) => state.current_view,
    shallowEqual
  );

  const changeView = React.useCallback(
    (view: IView) => dispatch(setView(view)),

    [dispatch]
  );

  const openModal: any = (article: Article) => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

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
          <li className={css.item} onClick={openModal}>
            <img src={question} className={css.icon} alt="show pop-up" />
          </li>
        </ul>
      </div>

      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        contentLabel="News"
        className={css.modal}
        overlayClassName={css.overlay}
        ariaHideApp={false}
      >
        <div className={css["modal-container"]}>
          <button className={css.button} onClick={closeModal}>
            &#10005;
          </button>

          <h2 className={css.title}>Doświadczenia w tworzeniu aplikacji</h2>
          <p>
            <b>Największą trudność</b> sprawiło stworzenie projektu. Ciężko było
            stworzyć coś z odpowiednim wyglądem. By sobie w tym dopomóc
            stworzyłem w pierwszej kolejności makietę w figmie by mieć chociaż
            ogólne pojęcie jak aplikacja będzie wyglądać.
          </p>

          <p>
            <b>Najprzyjemniejszy</b> był moment w którym szkielet aplikacji był
            już ukończony i można było dodawać funkcjonalności, oraz wykonywać
            ostatnie szlify w wyglądzie. Wtedy nie trzeba było już się
            zastanawiać nad projektem, ale skupić się na samym pisaniu kodu.
          </p>
        </div>
      </Modal>
    </header>
  );
};
