import { HeaderSearch as Header } from "../Header/Header";
import { NavbarSimple as Sidebar } from "../Sidebar/NavBarSimple";
import { Main } from "../Main/Main";
import styles from "./MainLayout.module.css";

export function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
}
