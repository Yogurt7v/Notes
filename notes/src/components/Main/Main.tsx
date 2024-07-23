import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import { useContext } from "react";
import { SearchPhraseContext } from "../MainLayout.tsx/MainLayout";
import { NotesContext } from "../../context/AppContext.tsx";
import { SingleNote } from "../SingleNote/SingleNote";

export function Main() {
  const user = sessionStorage.getItem("user");
  const navigate = useNavigate();
  const notes = useContext(NotesContext);

  const [filteredNotes, setFilteredNotes] = useState([]);
  const { searchPhrase } = useContext(SearchPhraseContext);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  function filterNotes(notes, searchPhrase) {
    return notes.filter((note) => note?.note?.includes(searchPhrase));
  }

  useEffect(() => {
    setTimeout(() => {
      if (notes && searchPhrase.length > 1) {
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
        {filteredNotes?.map((note, index) => (
          <SingleNote key={index} data={note} />
        ))}
      </div>
    </>
  );
}
