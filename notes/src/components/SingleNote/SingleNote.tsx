import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db.ts";
import { useParams } from "react-router-dom";
// import Markdown from "marked-react";

export function SingleNote() {
  const id = useParams();
  const notes = useLiveQuery(() => db.notes.toArray()); // вот тут в будущем брать из стейта
  const singleNote = notes?.find((note) => note.id === parseInt(id.id));

  return (
    <>
      <div>
        <h1>{singleNote?.title}</h1>
        <h4>{singleNote?.id}</h4>
        <div>{singleNote?.date.toLocaleDateString()}</div>
        <div>{singleNote?.date.toLocaleTimeString()}</div>
        {/* <div>{content}</div> */}
        {/* <Markdown></Markdown> */}
        <div dangerouslySetInnerHTML={{ __html: singleNote?.note }}></div>
      </div>
    </>
  );
}
