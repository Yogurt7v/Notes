import { Outlet } from "react-router-dom";
import { HeaderSearch as Header } from "../Header/Header";
import { NavbarSimple as Sidebar } from "../Sidebar/NavBarSimple";
import styles from "./MainLayout.module.css";
import { createContext, useState } from "react";

export const SearchPhraseContext = createContext("");

export function MainLayout() {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <>
      <SearchPhraseContext.Provider value={{ searchPhrase, setSearchPhrase }}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <Outlet />
        </div>
      </SearchPhraseContext.Provider>
    </>
  );
}
