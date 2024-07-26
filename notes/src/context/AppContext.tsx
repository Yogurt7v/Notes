import { createContext } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, Notes } from "../../db";

export const NotesContext = createContext<Notes[] | undefined>([]);

export function AppContext({ children }: { children: JSX.Element }) {
  const notes = useLiveQuery(() => db.notes.toArray());

  return (
    <>
      <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
    </>
  );
}
