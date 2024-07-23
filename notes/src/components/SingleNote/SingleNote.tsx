import { db } from "../../../db.ts";
import { useParams } from "react-router-dom";
import styles from "./SingleNote.module.css";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../../context/AppContext.tsx";
import { useContext } from "react";

export function SingleNote({ data = null }) {
  const notes = useContext(NotesContext);
  const id = useParams();
  const navigate = useNavigate();

  let singleNote;

  if (!notes) {
    return <div>Loading...</div>;
  }

  if (!data) {
    singleNote = notes?.find((note) => note.id === parseInt(id.id as string));
  } else {
    singleNote = data;
  }

  console.log("######data", data);

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
