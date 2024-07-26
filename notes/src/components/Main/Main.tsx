import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchPhraseContext } from "../MainLayout.tsx/MainLayout";
import { NotesContext } from "../../context/AppContext.tsx";
import { SingleNote } from "../SingleNote/SingleNote";
import { Notes } from "../../../db.ts";
import styles from "./Main.module.css";

export function Main() {
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const notes = useContext(NotesContext);

  const [filteredNotes, setFilteredNotes] = useState<Notes[]>([]);
  const { searchPhrase } = useContext(SearchPhraseContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function filterNotes(notes: Notes[], searchPhrase: string | "") {
    return notes.filter((note) => {
      if (searchPhrase === null) return notes;
      else {
        return note?.note?.includes(searchPhrase);
      }
    });
  }

  useEffect(() => {
    setTimeout(() => {
      if (notes && searchPhrase) {
        setFilteredNotes(filterNotes(notes, searchPhrase));
      } else {
        setFilteredNotes([]);
      }
    }, 800);
  }, [notes, searchPhrase]);

  return (
    <>
      <div className={styles.container}>
        <h1>Заметки</h1>
        {filteredNotes.map((note, index) => (
          <SingleNote key={index} data={note} />
        ))}
      </div>
    </>
  );
}
