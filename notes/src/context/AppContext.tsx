import { createContext } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../db";

export const NotesContext = createContext();

export function AppContext({ children }: { children: JSX.Element }) {
  const notes = useLiveQuery(() => db.notes.toArray());

  return (
    <>
      <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
    </>
  );
}
