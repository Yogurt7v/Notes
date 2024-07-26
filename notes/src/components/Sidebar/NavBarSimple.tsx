import { NavLink } from "react-router-dom";
import { Button, Group } from "@mantine/core";
import { NoteList } from "../AddComponent/NoteList";
import classes from "./NavbarSimple.module.css";
import { useNavigate } from "react-router-dom";

export function NavbarSimple() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between"></Group>
        <NavLink to="/new" className={classes.link}>
          <Button variant="gradient" gradient={{ from: "indigo", to: "cyan" }}>
            Новая заметка
          </Button>
        </NavLink>
        <NoteList />
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={() => handleLogout()}>
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
