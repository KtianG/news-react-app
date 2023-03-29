import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";

import type { RootState } from "../../../reduxtkt/store";
import { useSelector, useDispatch } from "react-redux";
import { changeView } from "../../../reduxtkt/view/viewSlice";

import css from "./Header.module.css";
import list from "../../../images/icons/list.png";
import tile from "../../../images/icons/tile.png";
import question from "../../../images/icons/questionmark.png";

export const Header: React.FC = () => {
  const [modalState, setModalState] = useState(false);

  const view = useSelector((state: RootState) => state.view);
  const dispatch = useDispatch();

  const openModal: any = () => {
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
          <li className={view.value === "list" ? css.active : css.item}>
            <img
              src={list}
              className={css.icon}
              alt="change view to list"
              onClick={() => dispatch(changeView("list"))}
            />
          </li>
          <li className={view.value === "grid" ? css.active : css.item}>
            <img
              src={tile}
              className={css.icon}
              alt="change view to grid"
              onClick={() => dispatch(changeView("grid"))}
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
            <b>Największą trudność</b> sprawił sam wygląd projektu. Ciężko było
            stworzyć coś z odpowiednim wyglądem. By sobie w tym dopomóc
            stworzyłem w pierwszej kolejności makietę w figmie by mieć podgląd
            na docelowy wygląd aplikacji.
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
