import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { NavLink } from "react-router-dom";
import styles from "./NoteList.module.css";

export function NoteList() {
  const notes = useLiveQuery(() => db.notes.toArray()); // вот тут в будущем брать из стейта
  return (
    <ul>
      {notes?.map((note) => (
        <NavLink to={`/notes/${note.id}`}  key={note.id} className={styles.link}>
        <li key={note.id}>
          <p>{note.title}</p>
          <p>{note.date.toLocaleDateString()}</p>
          <p>{note.date.toLocaleTimeString()}</p>
          <p>{note.newNote}</p>
        </li>
        </NavLink>
      ))}
    </ul>
  );
}
