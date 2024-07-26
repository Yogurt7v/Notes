import Dexie, { type EntityTable } from 'dexie';

type Notes = {
  id: number;
  // title: string;
  note: string;
  date: Date;
}

const db = new Dexie('NotesDatabase') as Dexie & {
  notes: EntityTable<
    Notes,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  notes: '++id,title, note, date' // primary key "id" (for the runtime!)
});

export type { Notes };
export { db };