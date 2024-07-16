import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { useParams } from "react-router-dom";

export function SingleNote() {
  const id = useParams();
  const notes = useLiveQuery(() => db.notes.toArray()); // вот тут в будущем брать из стейта
  const singleNote = notes?.find((note) => note.id === parseInt(id.id));

  console.log(singleNote);

  return (
    <>
      <div>
        <h1>{singleNote?.title}</h1>
        <h4>{singleNote?.id}</h4>
        <span>{singleNote?.date.toLocaleDateString()}</span> : <span>{singleNote?.date.toLocaleTimeString()}</span>
        <h2>{singleNote?.newNote}</h2>
      </div>
    </>
  );
}
