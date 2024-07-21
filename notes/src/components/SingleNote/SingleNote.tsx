import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { useParams } from "react-router-dom";
import styles from "./SingleNote.module.css";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function SingleNote() {
  const id = useParams();
  const notes = useLiveQuery(() => db.notes.toArray());
  const singleNote = notes?.find(
    (note) => note.id === parseInt(id.id as string)
  );
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h4 className={styles.id}>№{singleNote?.id}</h4>
        <div className={styles.date}>
          <span>{singleNote?.date.toLocaleDateString()}</span>
          <span className={styles.time}>
            {singleNote?.date.toLocaleTimeString()}
          </span>
          <div className={styles.buttons}>
            <Button onClick={() => navigate(`/edit/${singleNote?.id}`)}>
              Редактировать
            </Button>
            <Button onClick={() => db.notes.delete(singleNote?.id)} color="red">
              Удалить
            </Button>
          </div>
        </div>
        <div
          className={styles.note}
          dangerouslySetInnerHTML={{ __html: singleNote?.note }}
        ></div>
      </div>
    </>
  );
}
