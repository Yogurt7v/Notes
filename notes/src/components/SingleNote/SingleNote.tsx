import { useParams } from "react-router-dom";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../../context/AppContext.tsx";
import { useContext } from "react";
import { db, Notes } from "../../../db.ts";
import styles from "./SingleNote.module.css";
import AlertDialog from "../Modal/Modal.tsx";

export function SingleNote({ data }: { data: Notes | undefined }) {
  const notes = useContext(NotesContext);
  const id = useParams();
  const navigate = useNavigate();

  let singleNote: Notes | undefined;

  if (!notes) {
    return <div>Loading...</div>;
  }

  if (!data) {
    singleNote = notes?.find((note) => note.id === parseInt(id.id as string));
  } else {
    singleNote = data;
  }

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
            <Button
              size="sm"
              onClick={() => navigate(`/edit/${singleNote?.id}`)}
            >
              Редактировать
            </Button>
            <AlertDialog
              onAgreeClick={() => {
                db.notes.delete(Number(singleNote?.id));
                navigate(`/`);
              }}
            />
          </div>
        </div>
        <div
          className={styles.note}
          dangerouslySetInnerHTML={{ __html: String(singleNote?.note) }}
        ></div>
      </div>
    </>
  );
}
