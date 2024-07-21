import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { useParams } from "react-router-dom";
import styles from "./SingleNote.module.css";

export function SingleNote() {
  const id = useParams();
  const notes = useLiveQuery(() => db.notes.toArray()); // вот тут в будущем брать из стейта
  const singleNote = notes?.find(
    (note) => note.id === parseInt(id.id as string)
  );

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.id}>№{singleNote?.id}</h4>
        <div className={styles.date}>
          {singleNote?.date.toLocaleDateString()}
        </div>
        <div className={styles.time}>
          {singleNote?.date.toLocaleTimeString()}
        </div>
        <div
          className={styles.note}
          dangerouslySetInnerHTML={{ __html: singleNote?.note }}
        ></div>
      </div>
    </>
  );
}
