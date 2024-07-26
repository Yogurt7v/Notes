import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { NavLink } from "react-router-dom";
import styles from "./NoteList.module.css";

export function NoteList() {
  const notes = useLiveQuery(() => db.notes.toArray());

  return (
    <ul>
      {notes?.map((note, index) => (
        <NavLink to={`/notes/${note.id}`} key={note.id} className={styles.link}>
          <li key={note.id} className={styles.listItem}>
            <p className={styles.titleItem}> #{index + 1}</p>
            <p className={styles.date}>{note.date.toLocaleTimeString()}</p>
            <p className={styles.date}>{note.date.toLocaleDateString()}</p>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
