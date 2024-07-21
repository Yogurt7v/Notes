import { NavLink } from "react-router-dom";
import { Group } from "@mantine/core";
import { NoteList } from "../AddComponent.js/NoteList.jsx";
// import {
//   IconBellRinging,
//   IconFingerprint,
//   IconKey,
//   IconSettings,
//   Icon2fa,
//   IconDatabaseImport,
//   IconReceipt2,
//   IconLogout,
// } from '@tabler/icons-react';  // это иконки

import classes from "./NavbarSimple.module.css";
import { useNavigate } from "react-router-dom";

// const data = [
//   { link: '', label: 'Notifications', icon: IconBellRinging },
//   { link: '', label: 'Billing', icon: IconReceipt2 },
//   { link: '', label: 'Security', icon: IconFingerprint },
//   // { link: '', label: 'SSH Keys', icon: IconKey },
//   // { link: '', label: 'Databases', icon: IconDatabaseImport },
//   // { link: '', label: 'Authentication', icon: Icon2fa },
//   // { link: '', label: 'Other Settings', icon: IconSettings },
// ]; //  названия иконок

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
          <span>Новая заметка</span>
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
