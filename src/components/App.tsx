import * as React from "react";
import css from "./App.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideMenu } from "./SideMenu/SideMenu";
import { MainContent } from "./MainContent/MainContent";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { setView } from "../redux/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const view: IView = useSelector(
    (state: viewState) => state.current_view,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const changeView = React.useCallback(
    (view: IView) => dispatch(setView(view)),
    [dispatch]
  );

  return (
    <div className={css.App}>
      <Header view={view} setView={changeView} />
      <div className={css.container}>
        <SideMenu />
        <MainContent view={view} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
