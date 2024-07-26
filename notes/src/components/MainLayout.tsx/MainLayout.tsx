import { Outlet } from "react-router-dom";
import { HeaderSearch as Header } from "../Header/Header";
import { NavbarSimple as Sidebar } from "../Sidebar/NavBarSimple";
import styles from "./MainLayout.module.css";
import { createContext, useState } from "react";

interface MainLayoutContext {
  searchPhrase: string | null;
  setSearchPhrase: (searchPhrase: string) => void;
}

export const SearchPhraseContext = createContext<MainLayoutContext>({
  searchPhrase: "",
  setSearchPhrase: () => {},
});

export function MainLayout() {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <>
      <SearchPhraseContext.Provider
        value={{ searchPhrase, setSearchPhrase } as MainLayoutContext}
      >
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <Outlet />
        </div>
      </SearchPhraseContext.Provider>
    </>
  );
}
