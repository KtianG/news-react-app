import React from "react";
import css from "./App.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideMenu } from "./SideMenu/SideMenu";
import { MainContent } from "./MainContent/MainContent";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <div className={css.container}>
        <SideMenu />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
